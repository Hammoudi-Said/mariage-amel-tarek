# Development Guide

## Package Manager
**Important:** This project uses **Yarn**, not npm. Always use yarn commands to avoid dependency conflicts.

## Setup
```bash
# Install dependencies
cd frontend
yarn install

# Start development server
yarn start

# Build for production
yarn build

# Deploy to GitHub Pages
yarn deploy
```

## Common Issues

### Dependency Resolution Error
If you encounter `npm error code ERESOLVE` when using npm:
- **Solution**: Use yarn instead of npm
- The project is configured for yarn and uses yarn.lock for dependency resolution
- npm and yarn handle peer dependencies differently, which can cause conflicts

### React-Day-Picker Compatibility
- Updated to v9.8.1 to support date-fns v4.1.0
- Breaking changes from v8 have been handled in the calendar component

### React 19 Support
- Updated to React 19.1.1 (latest stable)
- All dependencies have been updated to support React 19

## Available Scripts (from frontend directory)
- `yarn start` - Start development server
- `yarn build` - Build for production  
- `yarn test` - Run tests
- `yarn deploy` - Deploy to GitHub Pages