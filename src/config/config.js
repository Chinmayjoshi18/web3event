// Configuration settings for the Web3 Events app

export const config = {
  // Google Sheets Integration
  googleSheetsUrl: process.env.REACT_APP_GOOGLE_SHEETS_URL || '',
  
  // Contact Information (Update these with your real details)
  contact: {
    email: process.env.REACT_APP_CONTACT_EMAIL || 'hello@web3events.com',
    phone: process.env.REACT_APP_CONTACT_PHONE || '+91 98765 43210',
    whatsapp: process.env.REACT_APP_WHATSAPP_NUMBER || '+91 98765 43210',
    address: process.env.REACT_APP_COMPANY_ADDRESS || 'Mumbai, India',
  },
  
  // Company Information
  company: {
    name: process.env.REACT_APP_COMPANY_NAME || 'Web3 Events',
    tagline: 'Premier Web3 Event Management Agency',
    description: 'Experts in hosting web3-based events, hackathons, workshops, and seminars with tie-ups in 100+ Indian universities.',
  },
  
  // Social Media Links (Update with your real social profiles)
  social: {
    twitter: 'https://twitter.com/web3events',
    linkedin: 'https://linkedin.com/company/web3events',
    instagram: 'https://instagram.com/web3events',
    discord: 'https://discord.gg/web3events',
    telegram: 'https://t.me/web3events',
  },
  
  // Analytics
  googleAnalytics: {
    measurementId: process.env.REACT_APP_GA_MEASUREMENT_ID || '',
  },
  
  // Feature Flags
  features: {
    googleSheets: true,
    analytics: true,
    newsletter: true,
    testimonials: true,
  }
};

export default config;
