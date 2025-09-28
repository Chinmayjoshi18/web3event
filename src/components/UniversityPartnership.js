import React from 'react';
import { motion } from 'framer-motion';

const UniversityPartnership = () => {
  const stats = [
    { number: '100+', label: 'University Partners', description: 'Across major Indian cities' },
    { number: '50K+', label: 'Students Reached', description: 'Through our events' },
    { number: '25+', label: 'States Covered', description: 'Pan-India presence' },
    { number: '500+', label: 'College Clubs', description: 'Active partnerships' }
  ];

  const universities = [
    'IIT Delhi', 'IIT Bombay', 'IIT Madras', 'IIT Kanpur',
    'IIIT Hyderabad', 'NIT Trichy', 'BITS Pilani', 'VIT Vellore',
    'SRM University', 'Manipal Institute', 'DTU', 'NSIT',
    'JSS Academy', 'PES University', 'Amity University', 'LPU'
  ];

  const benefits = [
    {
      icon: '🎯',
      title: 'Targeted Reach',
      description: 'Connect directly with tech-savvy students across India\'s premier institutions'
    },
    {
      icon: '🤝',
      title: 'Established Network',
      description: 'Leverage our existing relationships with university administrators and student bodies'
    },
    {
      icon: '📊',
      title: 'Quality Audience',
      description: 'Engage with motivated students in computer science, engineering, and related fields'
    },
    {
      icon: '⚡',
      title: 'Rapid Deployment',
      description: 'Launch events quickly through our pre-established university partnerships'
    }
  ];

  return (
    <section id="universities" className="py-20 bg-gradient-to-b from-dark-card/20 to-dark-bg">
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
            University Network
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our extensive partnerships with India's top universities and college clubs 
            give you unparalleled access to the next generation of Web3 innovators.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-dark-card to-dark-bg border border-web3-purple/30 rounded-2xl p-6 glow-effect">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* University Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
            Our Partner Universities Include
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {universities.map((university, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
                className="bg-dark-card/50 border border-web3-purple/20 rounded-lg p-4 text-center transition-all duration-300 hover:border-web3-purple/50"
              >
                <span className="text-gray-300 font-medium">{university}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-6">
            <span className="text-gray-400 italic">...and many more</span>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="card-web3"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Interactive Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-dark-card to-dark-bg border border-web3-purple/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gradient mb-4">Pan-India Presence</h3>
            <p className="text-gray-300 mb-6">
              From metros to tier-2 cities, our network spans across India's educational landscape
            </p>
            <div className="relative h-64 bg-gradient-to-br from-web3-purple/10 to-web3-cyan/10 rounded-xl flex items-center justify-center">
              <div className="text-6xl opacity-30">🗺️</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-lg font-semibold text-gray-300">Interactive Map Coming Soon</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UniversityPartnership;
