import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { newsletterSchema, newsletterInitialValues } from '../utils/validation';
import { submitNewsletterSignup } from '../services/googleSheets';
import { trackEvent } from '../utils/analytics';

const Newsletter = () => {
  const [submitStatus, setSubmitStatus] = useState({ message: '', type: '' });

  const handleNewsletterSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitStatus({ message: '', type: '' });
    
    try {
      const result = await submitNewsletterSignup(values.email);
      
      if (result.success) {
        setSubmitStatus({
          message: 'Thank you! You\'ve been subscribed to our newsletter.',
          type: 'success'
        });
        resetForm();
        
        // Track successful newsletter signup
        trackEvent('newsletter_signup', {
          event_category: 'engagement',
          event_label: 'newsletter_form'
        });
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ message: '', type: '' });
        }, 5000);
      } else {
        throw new Error(result.message || 'Subscription failed');
      }
    } catch (error) {
      setSubmitStatus({
        message: error.message || 'Something went wrong. Please try again.',
        type: 'error'
      });
      
      // Track failed newsletter signup
      trackEvent('newsletter_signup_failed', {
        event_category: 'error',
        event_label: 'newsletter_form'
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12 border-t border-web3-purple/20"
    >
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gradient mb-4">
          Stay Updated with Web3 Events
        </h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Get notified about upcoming hackathons, workshops, and Web3 opportunities 
          across Indian universities. Join our community of innovators!
        </p>
        
        <Formik
          initialValues={newsletterInitialValues}
          validationSchema={newsletterSchema}
          onSubmit={handleNewsletterSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <div className="flex-1">
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 bg-dark-card border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors ${
                    errors.email && touched.email 
                      ? 'border-red-500 focus:border-red-400' 
                      : 'border-web3-purple/30 focus:border-web3-purple'
                  }`}
                />
                <ErrorMessage name="email" component="div" className="text-red-400 text-sm mt-1 text-left" />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-web3 hover:scale-105 hover:shadow-lg hover:shadow-web3-purple/25'
                }`}
                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </motion.button>
            </Form>
          )}
        </Formik>

        {/* Submit Status Message */}
        {submitStatus.message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 p-3 rounded-lg max-w-md mx-auto ${
              submitStatus.type === 'success'
                ? 'bg-green-500/20 border border-green-500/30 text-green-400' 
                : 'bg-red-500/20 border border-red-500/30 text-red-400'
            }`}
          >
            {submitStatus.message}
          </motion.div>
        )}

        {/* Privacy Note */}
        <p className="text-xs text-gray-500 mt-4 max-w-md mx-auto">
          We respect your privacy. Unsubscribe at any time. 
          By subscribing, you agree to receive emails about Web3 events and opportunities.
        </p>
      </div>
    </motion.div>
  );
};

export default Newsletter;
