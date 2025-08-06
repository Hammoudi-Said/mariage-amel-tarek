# Mariage Amel & Tarek - Wedding Website 💍

A beautiful, modern wedding website built with React and deployed on GitHub Pages.

## 🌟 Features

- **Elegant Design**: Beautiful wedding-themed UI with warm colors and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Multiple Pages**: 
  - Home page with hero section and timeline
  - Wedding details and ceremony information
  - Contact information for the couple
  - Useful information for guests
  - RSVP/Confirmation page with Google Form integration
- **RSVP System**: Integrated with Google Forms for guest confirmations
- **Performance Optimized**: Built with modern React and optimized for fast loading

## 🚀 Live Demo

Visit the website: [https://Hammoudi-Said.github.io/mariage-amel-tarek](https://Hammoudi-Said.github.io/mariage-amel-tarek)

## 🛠 Tech Stack

- **Frontend**: React 19, React Router DOM
- **Styling**: Tailwind CSS, Radix UI Components
- **Build Tool**: CRACO (Create React App Configuration Override)
- **Deployment**: GitHub Pages with GitHub Actions
- **Icons**: Lucide React
- **Forms**: Google Forms integration

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Radix UI components
│   │   ├── Navigation.jsx # Main navigation
│   │   ├── Footer.jsx    # Site footer
│   │   └── ImageCarousel.jsx
│   ├── pages/            # Page components
│   │   ├── HomePage.jsx  # Landing page
│   │   ├── DetailsPage.jsx # Wedding details
│   │   ├── ContactPage.jsx # Contact information
│   │   ├── InfosUtilesPage.jsx # Useful info
│   │   └── ConfirmationPage.jsx # RSVP page
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   └── App.js           # Main app component
├── public/               # Static assets
└── package.json         # Dependencies and scripts
```

## 🔧 Development Setup

### Prerequisites
- Node.js (v18 or higher)
- Yarn package manager

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Hammoudi-Said/mariage-amel-tarek.git
   cd mariage-amel-tarek
   ```

2. **Install dependencies**:
   ```bash
   cd frontend
   yarn install
   ```

3. **Start development server**:
   ```bash
   yarn start
   ```
   
   The site will be available at `http://localhost:3000`

4. **Build for production**:
   ```bash
   yarn build
   ```

## 🚀 Deployment

This website automatically deploys to GitHub Pages using GitHub Actions.

### Automatic Deployment
- Push to `main` or `master` branch triggers automatic deployment
- GitHub Actions builds the React app and deploys to GitHub Pages
- Available at: https://Hammoudi-Said.github.io/mariage-amel-tarek

### Manual Deployment
You can also deploy manually using:
```bash
cd frontend
yarn deploy
```

## 📝 Configuration

### Homepage URL
The homepage is configured in `package.json`:
```json
"homepage": "https://Hammoudi-Said.github.io/mariage-amel-tarek"
```

### Routing
The app uses React Router with basename configuration for GitHub Pages:
```javascript
<BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/mariage-amel-tarek' : ''}>
```

### Google Form Integration
The RSVP functionality uses Google Forms. To change the form:
1. Update the `GOOGLE_FORM_URL` in `src/pages/ConfirmationPage.jsx`
2. Replace with your Google Form's public URL

## 🎨 Customization

### Colors and Styling
The website uses Tailwind CSS. Main color scheme:
- Primary: Amber/Gold tones
- Accent: Rose/Pink for romantic elements
- Background: Stone/Warm grays

### Content Updates
- **Wedding Details**: Edit `src/pages/DetailsPage.jsx`
- **Contact Information**: Edit `src/pages/ContactPage.jsx`
- **Timeline/Schedule**: Edit `src/pages/InfosUtilesPage.jsx`
- **Home Page Content**: Edit `src/pages/HomePage.jsx`

### Images
- Add images to `public/` folder
- Reference them using `/mariage-amel-tarek/image-name.jpg` for production
- Update image references in components as needed

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and created specifically for Amel & Tarek's wedding.

## ❤️ Built with Love

Created with love for Amel & Tarek's special day! 💕

---

**Contact Information:**
- Amel: 06 51 57 23 63
- Tarek: 07 63 70 14 97
