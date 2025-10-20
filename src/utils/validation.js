import * as Yup from 'yup';

// Phone number validation regex (supports various formats)
const phoneRegex = /^(\+\d{1,4}[-.\s]?)?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

// Email validation schema
const emailValidation = Yup.string()
  .email('Please enter a valid email address')
  .required('Email is required');

// Phone validation schema
const phoneValidation = Yup.string()
  .matches(phoneRegex, 'Please enter a valid phone number')
  .min(10, 'Phone number must be at least 10 digits');

// Contact form validation schema
export const contactFormSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Name is required'),
  
  email: emailValidation,
  
  company: Yup.string()
    .max(100, 'Company name must be less than 100 characters'),
  
  phone: phoneValidation,
  
  interest: Yup.string()
    .oneOf(['sponsor', 'partner', 'custom', 'consultation'], 'Please select a valid option')
    .required('Please select your interest'),
  
  budget: Yup.string()
    .oneOf(['under-5k', '5k-20k', '20k-50k', 'over-50k', 'discuss'], 'Please select a valid budget range'),
  
  eventType: Yup.string()
    .max(100, 'Event type must be less than 100 characters'),
  
  message: Yup.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
});

// Newsletter signup validation schema
export const newsletterSchema = Yup.object({
  email: emailValidation
});

// Initial form values
export const contactFormInitialValues = {
  name: '',
  email: '',
  company: '',
  phone: '',
  interest: 'sponsor',
  budget: '',
  eventType: '',
  message: ''
};

export const newsletterInitialValues = {
  email: ''
};

// Form field configurations
export const interestOptions = [
  { value: 'sponsor', label: 'Event Sponsorship' },
  { value: 'partner', label: 'Strategic Partnership' },
  { value: 'custom', label: 'Custom Event Management' },
  { value: 'consultation', label: 'Consultation Only' }
];

export const budgetRanges = [
  { value: '', label: 'Select budget range' },
  { value: 'under-5k', label: 'Under $5,000' },
  { value: '5k-20k', label: '$5,000 - $20,000' },
  { value: '20k-50k', label: '$20,000 - $50,000' },
  { value: 'over-50k', label: '$50,000+' },
  { value: 'discuss', label: 'Let\'s Discuss' }
];
