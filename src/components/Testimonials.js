import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      title: "CTO, BlockTech India",
      company: "Leading DeFi Platform",
      image: "👨‍💻",
      rating: 5,
      quote: "Web3 Events organized an incredible hackathon at IIT Delhi. The quality of participants and organization was outstanding. We found 3 talented developers who joined our team!",
      event: "DeFi Hackathon 2024",
      university: "IIT Delhi"
    },
    {
      name: "Priya Sharma",
      title: "Marketing Director",
      company: "CryptoStart Solutions",
      image: "👩‍💼",
      rating: 5,
      quote: "Their university network is unmatched. We reached over 2000 students across 15 universities in just one month. The ROI was incredible - 500% increase in brand awareness.",
      event: "Multi-City Roadshow",
      university: "15+ Universities"
    },
    {
      name: "Amit Patel",
      title: "Co-founder",
      company: "NFT Marketplace Startup",
      image: "🧑‍🚀",
      rating: 5,
      quote: "From concept to execution, Web3 Events handled everything perfectly. Our Web3 workshop series attracted 1500+ students and generated 200+ qualified leads.",
      event: "NFT Workshop Series",
      university: "IIIT Hyderabad"
    },
    {
      name: "Dr. Sarah Gupta",
      title: "Professor & Head",
      company: "Computer Science Dept.",
      image: "👩‍🏫",
      rating: 5,
      quote: "As an academic partner, I'm impressed by their professionalism and industry knowledge. Students gained real-world blockchain experience and networking opportunities.",
      event: "Blockchain Seminar",
      university: "NIT Trichy"
    }
  ];

  const caseStudies = [
    {
      title: "DeFi Hackathon Success",
      subtitle: "IIT Delhi Partnership",
      metrics: {
        participants: "500+",
        projects: "120+",
        prizes: "$25K",
        companies: "15+"
      },
      description: "48-hour intensive hackathon focused on decentralized finance solutions. Attracted top talent from across India.",
      results: [
        "3 startups received funding",
        "50+ job offers extended",
        "15 corporate partnerships formed",
        "95% participant satisfaction"
      ],
      gradient: "from-web3-purple to-web3-cyan"
    },
    {
      title: "Multi-City Roadshow",
      subtitle: "15 Universities in 30 Days",
      metrics: {
        universities: "15",
        students: "2000+",
        cities: "8",
        leads: "800+"
      },
      description: "Comprehensive Web3 awareness campaign across major Indian tech universities with workshops and networking events.",
      results: [
        "500% brand awareness increase",
        "800+ qualified leads generated",
        "12 university partnerships established",
        "95% positive feedback"
      ],
      gradient: "from-web3-pink to-neon-green"
    },
    {
      title: "Corporate Training Program",
      subtitle: "Fortune 500 Company",
      metrics: {
        employees: "300+",
        sessions: "12",
        completion: "98%",
        satisfaction: "4.8/5"
      },
      description: "Custom Web3 education program for enterprise teams covering blockchain, smart contracts, and DeFi applications.",
      results: [
        "300+ employees trained",
        "5 blockchain projects launched",
        "98% course completion rate",
        "Ongoing partnership established"
      ],
      gradient: "from-web3-cyan to-web3-purple"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span key={index} className={index < rating ? "text-yellow-400" : "text-gray-600"}>
        ⭐
      </span>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-dark-bg to-dark-card/20">
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
            Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've helped companies and universities create impactful Web3 experiences
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="mb-20">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center text-white mb-12"
          >
            Case Studies
          </motion.h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="card-web3 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-5`}></div>
                
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-white mb-2">{study.title}</h4>
                  <p className="text-web3-cyan mb-4">{study.subtitle}</p>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {Object.entries(study.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-gradient">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {study.description}
                  </p>
                  
                  {/* Results */}
                  <div className="space-y-2">
                    <h5 className="font-semibold text-white text-sm">Key Results:</h5>
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-xs text-gray-300">
                        <div className={`w-2 h-2 bg-gradient-to-r ${study.gradient} rounded-full mr-2 flex-shrink-0`}></div>
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center text-white mb-12"
          >
            What Our Clients Say
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="card-web3 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-4xl text-web3-purple/20">"</div>
                
                {/* Rating */}
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Quote */}
                <blockquote className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author Info */}
                <div className="flex items-center">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-web3-cyan">{testimonial.title}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {testimonial.event} • {testimonial.university}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-dark-card to-dark-bg border border-web3-purple/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join these successful companies and universities in creating impactful Web3 experiences.
            </p>
            <motion.button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-web3 text-lg px-10 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
