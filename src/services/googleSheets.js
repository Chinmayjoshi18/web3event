/**
 * Google Sheets Integration Service
 * 
 * This service handles form submissions to Google Sheets using Google Apps Script webhook.
 * 
 * Setup Instructions:
 * 1. Go to https://script.google.com/
 * 2. Create a new project
 * 3. Replace the default code with the Apps Script code provided in the comments below
 * 4. Deploy as web app with execute permissions for "Anyone"
 * 5. Copy the web app URL and set it in your environment variables
 * 
 * Google Apps Script Code:
 * 
 * function doPost(e) {
 *   try {
 *     const data = JSON.parse(e.postData.contents);
 *     const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getActiveSheet();
 *     
 *     // Add headers if sheet is empty
 *     if (sheet.getLastRow() === 0) {
 *       sheet.getRange(1, 1, 1, 8).setValues([[
 *         'Timestamp', 'Name', 'Email', 'Company', 'Phone', 'Interest', 'Budget', 'Message'
 *       ]]);
 *     }
 *     
 *     // Add the data
 *     sheet.appendRow([
 *       new Date(),
 *       data.name || '',
 *       data.email || '',
 *       data.company || '',
 *       data.phone || '',
 *       data.interest || '',
 *       data.budget || '',
 *       data.message || ''
 *     ]);
 *     
 *     return ContentService
 *       .createTextOutput(JSON.stringify({success: true, message: 'Data saved successfully'}))
 *       .setMimeType(ContentService.MimeType.JSON);
 *       
 *   } catch (error) {
 *     return ContentService
 *       .createTextOutput(JSON.stringify({success: false, message: error.toString()}))
 *       .setMimeType(ContentService.MimeType.JSON);
 *   }
 * }
 */

// Configuration
const GOOGLE_SCRIPTS_URL = process.env.REACT_APP_GOOGLE_SHEETS_URL || '';

/**
 * Submit form data to Google Sheets
 * @param {Object} formData - The form data to submit
 * @returns {Promise} Promise that resolves when submission is complete
 */
export const submitToGoogleSheets = async (formData) => {
  if (!GOOGLE_SCRIPTS_URL) {
    console.warn('Google Sheets URL not configured. Using fallback behavior.');
    // Fallback behavior for development/demo
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: 'Demo submission successful' });
      }, 1500);
    });
  }

  try {
    const response = await fetch(GOOGLE_SCRIPTS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'Web3 Events Website'
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    
    if (!result.success) {
      throw new Error(result.message || 'Submission failed');
    }

    return result;
  } catch (error) {
    console.error('Google Sheets submission error:', error);
    throw new Error('Failed to submit form. Please try again or contact us directly.');
  }
};

/**
 * Submit newsletter signup to Google Sheets
 * @param {string} email - Email address for newsletter
 * @returns {Promise} Promise that resolves when submission is complete
 */
export const submitNewsletterSignup = async (email) => {
  const newsletterData = {
    type: 'newsletter',
    email,
    source: 'Web3 Events Website Newsletter',
    timestamp: new Date().toISOString()
  };

  return submitToGoogleSheets(newsletterData);
};

const googleSheetsService = {
  submitToGoogleSheets,
  submitNewsletterSignup
};

export default googleSheetsService;
