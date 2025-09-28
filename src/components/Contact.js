import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: 'sponsor',
    budget: '',
    eventType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate form submission (replace with Google Sheets integration)
    try {
      // TODO: Implement Google Sheets API integration
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitMessage('Thank you! We\'ll be in touch within 24 hours.');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        interest: 'sponsor',
        budget: '',
        eventType: '',
        message: ''
      });
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'hello@web3events.com',
      description: 'Get in touch via email'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 98765 43210',
      description: 'Call us directly'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      value: '+91 98765 43210',
      description: 'Quick chat on WhatsApp'
    },
    {
      icon: '📍',
      title: 'Office',
      value: 'Mumbai, India',
      description: 'Come visit us'
    }
  ];

  const interestOptions = [
    { value: 'sponsor', label: 'Event Sponsorship' },
    { value: 'partner', label: 'Strategic Partnership' },
    { value: 'custom', label: 'Custom Event Management' },
    { value: 'consultation', label: 'Consultation Only' }
  ];

  const budgetRanges = [
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-20k', label: '$5,000 - $20,000' },
    { value: '20k-50k', label: '$20,000 - $50,000' },
    { value: 'over-50k', label: '$50,000+' },
    { value: 'discuss', label: 'Let\'s Discuss' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-dark-card/20 to-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to elevate your Web3 presence? Let's discuss how we can create 
            an unforgettable event experience for your brand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="card-web3">
              <h3 className="text-2xl font-bold text-gradient mb-6">Get Started Today</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-bg border border-web3-purple/30 rounded-lg text-white placeholder-gray-500 focus:border-web3-purple focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-bg border border-web3-purple/30 rounded-lg text-white placeholder-gray-500 focus:border-web3-purple focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Company and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-bg border border-web3-purple/30 rounded-lg text-white placeholder-gray-500 focus:border-web3-purple focus:outline-none transition-colors"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-bg border border-web3-purple/30 rounded-lg text-white placeholder-gray-500 focus:border-web3-purple focus:outline-none transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                {/* Interest and Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      I'm Interested In *
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-bg border border-web3-purple/30 rounded-lg text-white focus:border-web3-purple focus:outline-none transition-colors"
                    >
                      {interestOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-bg border border-web3-purple/30 rounded-lg text-white focus:border-web3-purple focus:outline-none transition-colors"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Event Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Event Type (if applicable)
                  </label>
                  <input
                    type="text"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-bg border border-web3-purple/30 rounded-lg text-white placeholder-gray-500 focus:border-web3-purple focus:outline-none transition-colors"
                    placeholder="Hackathon, Workshop, Seminar, etc."
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-dark-bg border border-web3-purple/30 rounded-lg text-white placeholder-gray-500 focus:border-web3-purple focus:outline-none transition-colors resize-vertical"
                    placeholder="Tell us about your goals, target audience, timeline, or any specific requirements..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-gradient-web3 hover:scale-105 hover:shadow-lg hover:shadow-web3-purple/25'
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {/* Submit Message */}
                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${
                      submitMessage.includes('Thank you') 
                        ? 'bg-green-500/20 border border-green-500/30 text-green-400' 
                        : 'bg-red-500/20 border border-red-500/30 text-red-400'
                    }`}
                  >
                    {submitMessage}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="card-web3 text-center"
                >
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h4 className="font-semibold text-white mb-2">{method.title}</h4>
                  <p className="text-web3-cyan font-medium mb-1">{method.value}</p>
                  <p className="text-sm text-gray-400">{method.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Why Choose Us */}
            <div className="card-web3">
              <h3 className="text-xl font-bold text-gradient mb-4">Why Partner With Us?</h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  '🚀 Web3 industry expertise',
                  '🎓 Extensive university network',
                  '⚡ Rapid event deployment',
                  '📊 Data-driven insights',
                  '🤝 Dedicated account management',
                  '🎯 Targeted audience reach'
                ].map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <span className="mr-3">{point.split(' ')[0]}</span>
                    <span>{point.slice(point.indexOf(' ') + 1)}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-br from-web3-purple/20 to-web3-cyan/20 border border-web3-purple/30 rounded-2xl p-6 text-center">
              <h3 className="font-bold text-white mb-2">⚡ Quick Response Guarantee</h3>
              <p className="text-gray-300">
                We respond to all inquiries within <span className="text-web3-cyan font-semibold">24 hours</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
