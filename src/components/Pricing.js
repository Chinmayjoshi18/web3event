import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const pricingTiers = [
    {
      type: 'sponsor',
      title: 'Event Sponsor',
      subtitle: 'Join Existing Events',
      price: 'Variable',
      priceSubtext: 'Based on event size & visibility',
      description: 'Perfect for companies looking to gain visibility by sponsoring our existing roadshows, hackathons, and workshops.',
      features: [
        'Brand visibility at events',
        'Logo placement on materials',
        'Booth/stall space',
        'Access to participant data',
        'Social media mentions',
        'Networking opportunities',
        'Event photography/videos',
        'Post-event report'
      ],
      gradient: 'from-web3-purple to-web3-cyan',
      popular: false,
      ctaText: 'Become a Sponsor',
      icon: '🎯'
    },
    {
      type: 'partner',
      title: 'Strategic Partner',
      subtitle: 'Custom Event Management',
      price: '$100',
      priceSubtext: '/month minimum subscription',
      description: 'Complete end-to-end event management with custom branding and full control over your Web3 event experience.',
      features: [
        'Custom branded events',
        'End-to-end management',
        'University network access',
        'Dedicated event manager',
        'Custom venue selection',
        'Speaker coordination',
        'Marketing & promotion',
        'Analytics & insights',
        'Priority support',
        'Flexible event formats',
        'Multi-city coordination',
        'Post-event follow-up'
      ],
      gradient: 'from-web3-pink to-neon-green',
      popular: true,
      ctaText: 'Become a Partner',
      icon: '🚀'
    }
  ];

  const additionalServices = [
    { service: 'Custom Workshop Development', price: '$500 - $2,000' },
    { service: 'Multi-City Roadshow', price: '$5,000 - $20,000' },
    { service: 'Hackathon Organization', price: '$10,000 - $50,000' },
    { service: 'Brand Positioning Consultation', price: '$1,000 - $5,000' },
    { service: 'Event Photography & Video', price: '$500 - $2,000' },
    { service: 'Social Media Management', price: '$300 - $1,000/month' }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-dark-bg to-dark-card/20">
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
            Partnership Models
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the partnership model that best fits your Web3 event goals. 
            From sponsoring existing events to creating custom experiences.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, rotateY: 2 }}
              className={`relative ${tier.popular ? 'lg:scale-105' : ''}`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-web3 text-white px-6 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className={`card-web3 relative overflow-hidden ${tier.popular ? 'border-web3-pink/50' : ''}`}>
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-5`}></div>
                
                <div className="relative z-10 p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className="text-6xl mb-4">{tier.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.title}</h3>
                    <p className="text-web3-cyan mb-4">{tier.subtitle}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gradient">{tier.price}</span>
                      <p className="text-sm text-gray-400 mt-1">{tier.priceSubtext}</p>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{tier.description}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-white mb-4">What's Included:</h4>
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: featureIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-center text-sm text-gray-300"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${tier.gradient} rounded-full mr-3 flex-shrink-0`}></div>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    onClick={scrollToContact}
                    className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                      tier.popular 
                        ? 'bg-gradient-web3 text-white hover:scale-105 hover:shadow-lg hover:shadow-web3-purple/25' 
                        : 'border-2 border-web3-purple text-web3-purple hover:bg-web3-purple hover:text-white hover:scale-105'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tier.ctaText}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gradient mb-8">
            Additional Services & Pricing
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-dark-card/50 border border-web3-purple/20 rounded-lg p-6 text-center hover:border-web3-purple/50 transition-all duration-300"
              >
                <h4 className="font-semibold text-white mb-2">{service.service}</h4>
                <p className="text-web3-cyan font-bold">{service.price}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ or Contact Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-dark-card to-dark-bg border border-web3-purple/30 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gradient mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Every Web3 project is unique. Let's discuss your specific needs and create 
            a tailored event solution that aligns with your goals and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={scrollToContact}
              className="btn-web3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Custom Quote
            </motion.button>
            <motion.button
              onClick={scrollToContact}
              className="btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
