import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: '🔥',
      title: 'Web3 Hackathons',
      description: 'Cutting-edge blockchain and cryptocurrency hackathons designed to push the boundaries of innovation',
      features: ['48-72 hour events', 'Expert mentorship', 'Prize pools up to $50K', 'Industry partnerships'],
      gradient: 'from-web3-purple to-web3-pink'
    },
    {
      icon: '🚀',
      title: 'Tech Workshops',
      description: 'Hands-on workshops covering the latest in Web3, DeFi, NFTs, and emerging technologies',
      features: ['Expert instructors', 'Practical projects', 'Certification', 'Networking opportunities'],
      gradient: 'from-web3-cyan to-neon-green'
    },
    {
      icon: '🎓',
      title: 'Academic Seminars',
      description: 'Educational seminars bringing industry leaders to universities across India',
      features: ['Industry speakers', 'Research presentations', 'Career guidance', 'Q&A sessions'],
      gradient: 'from-web3-pink to-web3-purple'
    },
    {
      icon: '📈',
      title: 'Branding & Positioning',
      description: 'Strategic event marketing to position your brand at the forefront of Web3 innovation',
      features: ['Target audience analysis', 'Brand messaging', 'Marketing campaigns', 'ROI tracking'],
      gradient: 'from-neon-green to-web3-cyan'
    },
    {
      icon: '🌐',
      title: 'University Roadshows',
      description: 'Multi-city roadshows connecting your brand with the next generation of tech talent',
      features: ['100+ universities', 'Regional coordination', 'Student engagement', 'Brand visibility'],
      gradient: 'from-web3-purple to-web3-cyan'
    },
    {
      icon: '⚡',
      title: 'End-to-End Management',
      description: 'Complete event management from concept to execution, tailored specifically for your brand',
      features: ['Custom event design', 'Venue management', 'Speaker coordination', 'Post-event analytics'],
      gradient: 'from-web3-pink to-neon-green'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-dark-bg to-dark-card/20">
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
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From intimate workshops to massive hackathons, we deliver exceptional Web3 events 
            that drive innovation and connect communities across India's top universities.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group"
            >
              <div className="card-web3 h-full relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gradient transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 flex-shrink-0`}></div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Hover Effect */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`h-1 bg-gradient-to-r ${service.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-8">
            Ready to elevate your Web3 event experience?
          </p>
          <motion.button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn-web3 text-lg px-10 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Create Something Amazing
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
