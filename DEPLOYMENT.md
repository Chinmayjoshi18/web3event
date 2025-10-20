# Web3 Events - Deployment Guide

This guide covers deploying your Web3 Events app to various hosting platforms.

## 🚀 Quick Deployment Options

### 1. Vercel (Recommended)
**Fastest and easiest deployment**

1. **Connect GitHub Repository**
   ```bash
   # Push your code to GitHub first
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel automatically detects React and builds your app
   - Your app will be live in 2-3 minutes!

3. **Environment Variables** (Optional)
   - Go to Project Settings > Environment Variables
   - Add your Google Sheets URL and Analytics ID:
     ```
     REACT_APP_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
     REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX
     ```

### 2. Netlify
**Great for static sites with forms**

1. **Build and Deploy**
   ```bash
   npm run build
   ```

2. **Deploy Options**
   - **Drag & Drop**: Upload the `build` folder to [netlify.com/drop](https://netlify.com/drop)
   - **Git Integration**: Connect your GitHub repo on [netlify.com](https://netlify.com)

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `build`

### 3. GitHub Pages
**Free hosting for open source projects**

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

### 4. Traditional Web Hosting
**For shared hosting or VPS**

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload files**
   - Upload all contents of the `build` folder to your web server's public directory
   - Configure your web server to serve `index.html` for all routes (for SPA routing)

## 🔧 Pre-Deployment Checklist

### Required Updates
- [ ] Update contact information in `src/config/config.js`
- [ ] Add your Google Sheets webhook URL
- [ ] Add your Google Analytics Measurement ID
- [ ] Replace social media links with your real profiles
- [ ] Add a real favicon.ico file (generate from favicon.svg)

### Performance Optimization
- [ ] Optimize images (if you add custom images)
- [ ] Test mobile responsiveness
- [ ] Check loading speeds
- [ ] Test form submissions

### SEO & Social
- [ ] Update Open Graph image (`public/og-image.jpg`)
- [ ] Create Apple Touch Icon (`public/apple-touch-icon.png`)
- [ ] Generate additional PWA icons (192x192, 512x512)
- [ ] Update website URL in meta tags

## 🔗 Google Sheets Integration Setup

### Step 1: Create Google Apps Script

1. Go to [script.google.com](https://script.google.com)
2. Create new project
3. Replace default code with:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getActiveSheet();
    
    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 8).setValues([[
        'Timestamp', 'Name', 'Email', 'Company', 'Phone', 'Interest', 'Budget', 'Message'
      ]]);
    }
    
    // Add the data
    if (data.type === 'newsletter') {
      // Newsletter signup
      sheet.appendRow([
        new Date(),
        'Newsletter Signup',
        data.email,
        '',
        '',
        'Newsletter',
        '',
        data.source || 'Website'
      ]);
    } else {
      // Contact form
      sheet.appendRow([
        new Date(),
        data.name || '',
        data.email || '',
        data.company || '',
        data.phone || '',
        data.interest || '',
        data.budget || '',
        data.message || ''
      ]);
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true, message: 'Data saved successfully'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Step 2: Deploy as Web App

1. Click "Deploy" > "New deployment"
2. Choose "Web app" as type
3. Execute as: "Me"
4. Access: "Anyone" (for public form submissions)
5. Deploy and copy the web app URL

### Step 3: Update Your App

Add the URL to your environment variables:
```bash
REACT_APP_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

## 📊 Google Analytics Setup

1. Create a Google Analytics 4 property
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add it to your environment variables:
   ```bash
   REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

## 🌐 Custom Domain Setup

### Vercel
1. Go to Project Settings > Domains
2. Add your custom domain
3. Update DNS settings as instructed

### Netlify
1. Go to Site Settings > Domain management
2. Add custom domain
3. Update DNS or nameservers

## 🔒 Security Considerations

- Keep your Google Apps Script URL secure
- Use HTTPS for production
- Regularly update dependencies
- Monitor form submissions for spam
- Consider adding reCAPTCHA for high-traffic sites

## 📈 Performance Tips

1. **Enable gzip compression** on your web server
2. **Use a CDN** like Cloudflare for faster global delivery
3. **Monitor Core Web Vitals** using Google PageSpeed Insights
4. **Compress images** before adding them
5. **Test on mobile devices** regularly

## 🐛 Troubleshooting

### Common Issues

**Build Errors**
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors if any
- Ensure Node.js version compatibility

**Form Not Submitting**
- Check Google Apps Script URL
- Verify CORS settings in Apps Script
- Check browser console for errors

**Analytics Not Working**
- Verify Measurement ID format
- Check if ad blockers are interfering
- Use Google Analytics Real-time reports to test

## 📞 Support

If you encounter issues:
1. Check the browser console for errors
2. Verify all environment variables are set
3. Test Google Sheets integration separately
4. Ensure all dependencies are up to date

---

Your Web3 Events app is now ready for production deployment! 🚀
