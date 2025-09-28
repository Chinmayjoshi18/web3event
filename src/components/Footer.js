import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Services',
      links: [
        'Web3 Hackathons',
        'Tech Workshops',
        'Academic Seminars',
        'Branding & Positioning',
        'University Roadshows',
        'End-to-End Management'
      ]
    },
    {
      title: 'Partnership',
      links: [
        'Event Sponsorship',
        'Strategic Partnership',
        'Custom Events',
        'University Network',
        'Pricing Plans',
        'Get Started'
      ]
    },
    {
      title: 'Company',
      links: [
        'About Us',
        'Our Team',
        'Case Studies',
        'Blog',
        'Careers',
        'Contact'
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: '𝕏', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'Discord', icon: '💬', url: '#' },
    { name: 'Telegram', icon: '✈️', url: '#' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-t from-dark-bg to-dark-card/20 border-t border-web3-purple/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-web3 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">W3</span>
                </div>
                <span className="text-2xl font-bold text-gradient">Web3 Events</span>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Premier event management agency specializing in Web3 experiences. 
                We connect brands with the next generation of innovators through 
                hackathons, workshops, and seminars across India's top universities.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <span className="mr-3">📧</span>
                  <span>hello@web3events.com</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">📱</span>
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">📍</span>
                  <span>Mumbai, India</span>
                </div>
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-white mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.button
                        onClick={() => {
                          if (link === 'Get Started') scrollToSection('contact');
                          else if (link === 'Pricing Plans') scrollToSection('pricing');
                          else if (link === 'University Network') scrollToSection('universities');
                          else if (link === 'Contact') scrollToSection('contact');
                        }}
                        className="text-gray-400 hover:text-web3-purple transition-colors duration-300 text-left"
                        whileHover={{ x: 5 }}
                      >
                        {link}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
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
              across Indian universities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-dark-card border border-web3-purple/30 rounded-lg text-white placeholder-gray-500 focus:border-web3-purple focus:outline-none transition-colors"
              />
              <motion.button
                className="btn-web3 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-web3-purple/20">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Copyright */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mb-4 lg:mb-0"
            >
              © {currentYear} Web3 Events. All rights reserved. 
              <span className="mx-2">|</span>
              <button className="hover:text-web3-purple transition-colors">Privacy Policy</button>
              <span className="mx-2">|</span>
              <button className="hover:text-web3-purple transition-colors">Terms of Service</button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 bg-dark-card border border-web3-purple/30 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-web3-purple/60 hover:bg-web3-purple/10 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-web3-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-web3-cyan/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
