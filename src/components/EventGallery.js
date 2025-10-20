import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EventGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Fake event portfolio data with high-quality images
  const eventPortfolio = [
    {
      id: 1,
      title: "Mumbai Web3 Hackathon 2024",
      category: "hackathon",
      location: "IIT Mumbai",
      date: "March 2024",
      participants: "500+",
      image: "https://images.unsplash.com/photo-1559223607-b4d0555ae7b8?w=800&h=600&fit=crop&crop=center",
      description: "48-hour intensive hackathon focused on DeFi and blockchain solutions. Over 500 developers participated from across India.",
      highlights: ["120+ Projects", "₹25L Prize Pool", "15 Corporate Sponsors", "48 Hours"]
    },
    {
      id: 2,
      title: "Blockchain Workshop Series",
      category: "workshop",
      location: "IIIT Hyderabad",
      date: "February 2024",
      participants: "300+",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop&crop=center",
      description: "Comprehensive 3-day workshop covering smart contracts, Web3 development, and decentralized applications.",
      highlights: ["3 Days", "Expert Mentors", "Hands-on Projects", "Certification"]
    },
    {
      id: 3,
      title: "NFT Creator Summit",
      category: "seminar",
      location: "Delhi University",
      date: "January 2024", 
      participants: "800+",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=center",
      description: "Premier event bringing together NFT artists, developers, and collectors. Featured live minting sessions and art exhibitions.",
      highlights: ["50+ Artists", "Live Minting", "Art Gallery", "Networking"]
    },
    {
      id: 4,
      title: "DeFi Developer Conference",
      category: "hackathon",
      location: "NIT Trichy",
      date: "December 2023",
      participants: "400+",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop&crop=center",
      description: "Advanced conference on decentralized finance protocols, yield farming, and automated market makers.",
      highlights: ["Protocol Demos", "Yield Strategies", "AMM Deep Dive", "Developer Tools"]
    },
    {
      id: 5,
      title: "Web3 Student Bootcamp",
      category: "workshop",
      location: "VIT Vellore",
      date: "November 2023",
      participants: "600+",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center",
      description: "5-day intensive bootcamp teaching Web3 fundamentals to computer science students. From blockchain basics to dApp deployment.",
      highlights: ["5 Days Intensive", "Zero to dApp", "Industry Mentors", "Job Placements"]
    },
    {
      id: 6,
      title: "Crypto Trading Masterclass",
      category: "seminar",
      location: "BITS Pilani",
      date: "October 2023",
      participants: "350+",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&crop=center",
      description: "Expert-led masterclass on cryptocurrency trading, technical analysis, and risk management strategies.",
      highlights: ["Pro Trading Strategies", "Risk Management", "Live Trading", "Portfolio Building"]
    },
    {
      id: 7,
      title: "Metaverse Innovation Summit",
      category: "hackathon",
      location: "Manipal Institute",
      date: "September 2023",
      participants: "450+",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop&crop=center",
      description: "Exploring the future of virtual worlds, AR/VR integration, and metaverse business models.",
      highlights: ["VR Demos", "Metaverse Games", "Virtual Real Estate", "Future Tech"]
    },
    {
      id: 8,
      title: "DAO Governance Workshop",
      category: "workshop",
      location: "SRM University",
      date: "August 2023",
      participants: "280+",
      image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=800&h=600&fit=crop&crop=center",
      description: "Deep dive into decentralized autonomous organizations, governance tokens, and community management.",
      highlights: ["DAO Creation", "Governance Models", "Token Economics", "Community Building"]
    },
    {
      id: 9,
      title: "Smart Contract Security Audit",
      category: "seminar",
      location: "Amity University",
      date: "July 2023",
      participants: "220+",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop&crop=center",
      description: "Critical workshop on smart contract vulnerabilities, audit processes, and security best practices.",
      highlights: ["Security Patterns", "Audit Tools", "Vulnerability Assessment", "Best Practices"]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Events', count: eventPortfolio.length },
    { id: 'hackathon', label: 'Hackathons', count: eventPortfolio.filter(e => e.category === 'hackathon').length },
    { id: 'workshop', label: 'Workshops', count: eventPortfolio.filter(e => e.category === 'workshop').length },
    { id: 'seminar', label: 'Seminars', count: eventPortfolio.filter(e => e.category === 'seminar').length }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? eventPortfolio 
    : eventPortfolio.filter(event => event.category === selectedCategory);

  const openLightbox = (event) => {
    setSelectedImage(event);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredEvents.findIndex(event => event.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredEvents.length;
    setSelectedImage(filteredEvents[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredEvents.findIndex(event => event.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredEvents.length) % filteredEvents.length;
    setSelectedImage(filteredEvents[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-dark-card/20 to-dark-bg">
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
            Event Gallery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Explore our portfolio of successful Web3 events, hackathons, and workshops 
            across India's premier universities and tech hubs.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-web3 text-white shadow-lg'
                    : 'bg-dark-card border border-web3-purple/30 text-gray-300 hover:border-web3-purple/60'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label} ({category.count})
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Events Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(event)}
              >
                <div className="card-web3 overflow-hidden p-0">
                  {/* Image */}
                  <div className="relative overflow-hidden h-64">
                    <motion.img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      whileHover={{ scale: 1.1 }}
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.category === 'hackathon' ? 'bg-web3-purple text-white' :
                        event.category === 'workshop' ? 'bg-web3-cyan text-white' :
                        'bg-web3-pink text-white'
                      }`}>
                        {event.category.toUpperCase()}
                      </span>
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-4xl mb-2">🔍</div>
                        <div className="text-sm font-medium">View Details</div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-colors duration-300">
                      {event.title}
                    </h3>
                    
                    <div className="flex items-center text-gray-400 text-sm mb-3">
                      <span className="mr-4">📍 {event.location}</span>
                      <span>📅 {event.date}</span>
                    </div>

                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-web3-cyan font-semibold">
                        {event.participants} Participants
                      </span>
                      <div className="flex space-x-2">
                        {event.highlights.slice(0, 2).map((highlight, idx) => (
                          <span key={idx} className="text-xs bg-web3-purple/20 text-web3-purple px-2 py-1 rounded">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-5xl w-full max-h-[90vh] overflow-auto bg-dark-card rounded-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  ✕
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  ←
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  →
                </button>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                  {/* Large Image */}
                  <div className="relative">
                    <img
                      src={selectedImage.image}
                      alt={selectedImage.title}
                      className="w-full h-96 lg:h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="p-8">
                    <div className="mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        selectedImage.category === 'hackathon' ? 'bg-web3-purple text-white' :
                        selectedImage.category === 'workshop' ? 'bg-web3-cyan text-white' :
                        'bg-web3-pink text-white'
                      }`}>
                        {selectedImage.category.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold text-gradient mb-4">
                      {selectedImage.title}
                    </h3>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-gray-400 text-sm">Location</div>
                        <div className="text-white font-medium">{selectedImage.location}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">Date</div>
                        <div className="text-white font-medium">{selectedImage.date}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">Participants</div>
                        <div className="text-web3-cyan font-bold">{selectedImage.participants}</div>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-6">
                      {selectedImage.description}
                    </p>

                    <div>
                      <h4 className="text-white font-semibold mb-3">Event Highlights</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedImage.highlights.map((highlight, idx) => (
                          <div key={idx} className="bg-web3-purple/20 text-web3-purple px-3 py-2 rounded text-sm font-medium text-center">
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">25+</div>
              <div className="text-gray-400">Events Hosted</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">5000+</div>
              <div className="text-gray-400">Participants</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">100+</div>
              <div className="text-gray-400">University Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">₹2Cr+</div>
              <div className="text-gray-400">Prize Money Distributed</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventGallery;
