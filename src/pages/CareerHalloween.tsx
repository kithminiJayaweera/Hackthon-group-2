import React from "react";
import { motion } from "framer-motion";
import { FaGhost, FaSpider, FaHatWizard } from "react-icons/fa";
import { GiPumpkinLantern, GiRobotGolem, GiSpiderWeb } from "react-icons/gi";

import uiImage from "../assets/ui.webp";
import qaImage from "../assets/qa.webp";
import designerImage from "../assets/designer.webp";
import roboticsImage from "../assets/robotics.webp";
import bgImage from "../assets/bgimage.jpg"; // Your background image

const careers = [
  {
    title: "Certix Certified UI/UX Architect",
    image: uiImage,
    icon: <FaHatWizard className="text-[#FFA500] text-3xl" />,
    description: "🎃 Design spellbinding user experiences that haunt users in the best way possible"
  },
  {
    title: "Certix Certified Quality Assurance Engineer",
    image: qaImage,
    icon: <FaGhost className="text-[#ADFF2F] text-3xl" />,
    description: "👻 Hunt down bugs and glitches like a spectral investigator"
  },
  {
    title: "Certix Certified Creative Designer",
    image: designerImage,
    icon: <GiPumpkinLantern className="text-[#FF8C00] text-3xl" />,
    description: "🕸️ Craft visuals that capture attention and never let go"
  },
  {
    title: "Certix Certified IoT & Robotics Engineer",
    image: roboticsImage,
    icon: <GiRobotGolem className="text-[#ADFF2F] text-3xl" />,
    description: "🤖 Bring mechanical monsters to life with cutting-edge technology"
  },
];

const CareerHalloween: React.FC = () => {
  return (
    <section 
      className="relative w-full min-h-screen text-white overflow-hidden py-16 px-6 lg:px-20"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark Overlay for better readability */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Halloween Color Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f02]/60 via-[#0f1507]/70 to-black/90"></div>

      {/* Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Ghosts */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: "100vw", opacity: [0, 0.7, 0] }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          className="absolute top-1/4"
        >
          <FaGhost className="text-[#ADFF2F] text-4xl opacity-70" />
        </motion.div>
        
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: "100vw", opacity: [0, 0.5, 0] }}
          transition={{ duration: 20, repeat: Infinity, delay: 10 }}
          className="absolute top-3/4"
        >
          <FaGhost className="text-[#FFA500] text-3xl opacity-60" />
        </motion.div>
        
        {/* Animated Spider Webs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-10 left-10"
        >
          <GiSpiderWeb className="text-gray-400 text-6xl" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="absolute bottom-20 right-20"
        >
          <GiSpiderWeb className="text-gray-400 text-8xl" />
        </motion.div>
        
        {/* Floating Spiders */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-16 right-16"
        >
          <FaSpider className="text-[#ADFF2F] text-4xl" />
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-32 left-20"
        >
          <FaSpider className="text-[#FF8C00] text-3xl" />
        </motion.div>
        
        {/* Pulsing Pumpkins */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-12 right-12"
        >
          <GiPumpkinLantern className="text-[#FF8C00] text-6xl" />
        </motion.div>

        {/* Floating Bats Animation */}
        <motion.div
          initial={{ x: -50, y: -50, opacity: 0 }}
          animate={{ x: "100vw", y: ["0%", "10%", "-5%", "0%"], opacity: [0, 0.8, 0] }}
          transition={{ duration: 12, repeat: Infinity, delay: 5 }}
          className="absolute top-1/3 text-2xl"
        >
          🦇
        </motion.div>

        <motion.div
          initial={{ x: -50, y: 50, opacity: 0 }}
          animate={{ x: "100vw", y: ["0%", "-10%", "5%", "0%"], opacity: [0, 0.6, 0] }}
          transition={{ duration: 15, repeat: Infinity, delay: 8 }}
          className="absolute top-2/3 text-2xl"
        >
          🦇
        </motion.div>

        {/* Subtle Fog Effect */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-[#FFA500] drop-shadow-[0_0_25px_#FF8C00]"
          >
            Kickstart Your Career While You Learn 🎃
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-200 max-w-2xl mx-auto text-lg sm:text-xl mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            <span className="text-[#ADFF2F] font-semibold">Join Certix</span> — Gain real-world experience, earn while you grow, and master in-demand skills that set you apart.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-[#FFA500] font-bold text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            Learn. Work. Get Paid. 👻
          </motion.p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {careers.map((career, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="relative bg-[#141808]/90 backdrop-blur-md border border-[#FFA500]/50 rounded-2xl p-6 text-center shadow-[0_0_25px_#ADFF2F] hover:shadow-[0_0_45px_#FFA500] transition-all duration-300 overflow-hidden group w-full max-w-sm"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ADFF2F]/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Floating Icon */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="flex justify-center mb-4"
              >
                {career.icon}
              </motion.div>
              
              {/* Image with Hover Effect */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mb-4"
              >
                <img
                  src={career.image}
                  alt={career.title}
                  className="w-full h-48 object-contain rounded-xl bg-white/5 p-2"
                />
              </motion.div>
              
              {/* Title with Glow */}
              <h3 className="text-lg sm:text-xl font-bold text-[#ADFF2F] drop-shadow-[0_0_10px_#ADFF2F] mb-2">
                {career.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-200 mb-3 min-h-[60px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {career.description}
              </p>
              
              {/* Qualification Badge */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-black font-semibold py-1 px-3 rounded-full text-xs"
              >
                🎓 Dual Qualification: UK + Certix
              </motion.div>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#ADFF2F] rounded-2xl transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 25px #FF8C00"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-black font-bold py-3 px-8 rounded-full text-lg shadow-lg"
          >
            Explore Spooky Career Paths 🕷️
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-t from-[#FFA500]/40 to-transparent blur-2xl z-0" />
    </section>
  );
};

export default CareerHalloween;