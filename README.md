# Web3 Events - Event Management Agency

A modern, futuristic React application for a Web3-focused event management agency. This app showcases services for hackathons, workshops, seminars, and end-to-end event management across 100+ Indian universities.

## Features

- 🚀 **Modern Web3 Design** - Futuristic UI with gradients, animations, and glassmorphism
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Fast Performance** - Built with React 18 and optimized components
- 🎨 **Custom Animations** - Framer Motion for smooth, engaging interactions
- 📝 **Lead Generation** - Contact forms ready for Google Sheets integration
- 🎯 **Targeted Sections** - Services, pricing, university partnerships, and more

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm start
   ```

3. **Open your browser**
   Navigate to `http://localhost:3000` to view the app

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation header
│   ├── Hero.js         # Hero section
│   ├── Services.js     # Services showcase
│   ├── UniversityPartnership.js # University network
│   ├── Pricing.js      # Pricing tiers
│   ├── Contact.js      # Contact forms
│   └── Footer.js       # Footer section
├── App.js              # Main app component
├── index.js            # App entry point
└── index.css           # Global styles + Tailwind
```

## Customization

### Colors & Branding

The app uses a custom color palette defined in `tailwind.config.js`:

- `web3-purple`: #6366f1
- `web3-cyan`: #06b6d4  
- `web3-pink`: #ec4899
- `neon-green`: #00ff88
- `dark-bg`: #0a0a0f
- `dark-card`: #1a1a2e

### Content Updates

Update the content in each component file:

- **Company info**: `Header.js` and `Footer.js`
- **Services**: `Services.js` - modify the services array
- **Pricing**: `Pricing.js` - update pricing tiers and features
- **University list**: `UniversityPartnership.js` - add/remove universities
- **Contact details**: `Contact.js` and `Footer.js`

## Google Sheets Integration

The contact form is currently set up with a placeholder submission function. To integrate with Google Sheets:

1. Set up Google Apps Script or Google Sheets API
2. Replace the submission logic in `Contact.js`
3. Update the form handling to send data to your Google Sheet

Example integration points are marked with `TODO:` comments in the code.

## Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect and deploy your React app

### Traditional Hosting
1. Run `npm run build`
2. Upload the contents of the `build` folder to your web server

## Technologies Used

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **Custom CSS** - Additional styling and animations

## Browser Support

- Chrome 90+
- Firefox 90+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary. All rights reserved.

## Contact

For questions about this project, contact the development team or refer to the contact information in the app.

---

**Built with ❤️ for the Web3 community**
