from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class WeddingConfirmation(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    firstName: str
    lastName: str
    phone: Optional[str] = None
    email: Optional[str] = None
    numberOfGuests: int = 1
    attendsCeremony: bool = True
    attendsReception: bool = True
    allergies: Optional[str] = None
    message: Optional[str] = None
    submittedAt: datetime = Field(default_factory=datetime.utcnow)

class WeddingConfirmationCreate(BaseModel):
    firstName: str
    lastName: str
    phone: Optional[str] = None
    email: Optional[str] = None
    numberOfGuests: int = 1
    attendsCeremony: bool = True
    attendsReception: bool = True
    allergies: Optional[str] = None
    message: Optional[str] = None
    submittedAt: Optional[str] = None

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Wedding confirmation endpoints
@api_router.post("/confirmations", response_model=WeddingConfirmation)
async def create_confirmation(input: WeddingConfirmationCreate):
    try:
        confirmation_dict = input.dict()
        
        # Parse submittedAt if provided as string
        if confirmation_dict.get('submittedAt') and isinstance(confirmation_dict['submittedAt'], str):
            try:
                confirmation_dict['submittedAt'] = datetime.fromisoformat(confirmation_dict['submittedAt'].replace('Z', '+00:00'))
            except:
                confirmation_dict['submittedAt'] = datetime.utcnow()
        else:
            confirmation_dict['submittedAt'] = datetime.utcnow()
            
        confirmation_obj = WeddingConfirmation(**confirmation_dict)
        
        # Save to database
        await db.wedding_confirmations.insert_one(confirmation_obj.dict())
        
        logger.info(f"New wedding confirmation received from {confirmation_obj.firstName} {confirmation_obj.lastName}")
        return confirmation_obj
        
    except Exception as e:
        logger.error(f"Error creating confirmation: {e}")
        raise HTTPException(status_code=500, detail="Error saving confirmation")

@api_router.get("/confirmations", response_model=List[WeddingConfirmation])
async def get_confirmations():
    try:
        confirmations = await db.wedding_confirmations.find().sort("submittedAt", -1).to_list(1000)
        return [WeddingConfirmation(**confirmation) for confirmation in confirmations]
    except Exception as e:
        logger.error(f"Error retrieving confirmations: {e}")
        raise HTTPException(status_code=500, detail="Error retrieving confirmations")

@api_router.get("/confirmations/stats")
async def get_confirmation_stats():
    try:
        total_confirmations = await db.wedding_confirmations.count_documents({})
        total_guests = await db.wedding_confirmations.aggregate([
            {"$group": {"_id": None, "total": {"$sum": "$numberOfGuests"}}}
        ]).to_list(1)
        
        ceremony_count = await db.wedding_confirmations.count_documents({"attendsCeremony": True})
        reception_count = await db.wedding_confirmations.count_documents({"attendsReception": True})
        
        total_guests_count = total_guests[0]["total"] if total_guests else 0
        
        return {
            "totalConfirmations": total_confirmations,
            "totalGuests": total_guests_count,
            "ceremonyAttendees": ceremony_count,
            "receptionAttendees": reception_count
        }
    except Exception as e:
        logger.error(f"Error getting stats: {e}")
        raise HTTPException(status_code=500, detail="Error retrieving statistics")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()