// Google Analytics 4 Integration
import config from '../config/config';

// Initialize Google Analytics
export const initGA = () => {
  if (!config.googleAnalytics.measurementId) {
    console.warn('Google Analytics Measurement ID not configured');
    return;
  }

  // Load gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${config.googleAnalytics.measurementId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', config.googleAnalytics.measurementId, {
    page_title: document.title,
    page_location: window.location.href,
  });

  // Make gtag globally available
  window.gtag = gtag;
};

// Track events
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      event_label: parameters.label || '',
      value: parameters.value || 0,
      ...parameters
    });
  }
};

// Track page views
export const trackPageView = (pagePath) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', config.googleAnalytics.measurementId, {
      page_path: pagePath,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName, success = true) => {
  trackEvent('form_submit', {
    event_category: 'form',
    event_label: formName,
    success: success ? 'true' : 'false'
  });
};

// Track button clicks
export const trackButtonClick = (buttonName, location) => {
  trackEvent('button_click', {
    event_category: 'interaction',
    event_label: buttonName,
    button_location: location
  });
};

// Track contact method usage
export const trackContactMethod = (method) => {
  trackEvent('contact_method_used', {
    event_category: 'contact',
    event_label: method,
    contact_type: method
  });
};

const analyticsService = {
  initGA,
  trackEvent,
  trackPageView,
  trackFormSubmission,
  trackButtonClick,
  trackContactMethod
};

export default analyticsService;
