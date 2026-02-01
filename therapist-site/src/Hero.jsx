import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = ({ onBook }) => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-stone-50">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary-100/40 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 text-sm font-medium tracking-wide mb-6"
          >
            Licensed Clinical Counseling
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-stone-900 leading-tight mb-6"
          >
            Find your way back <br />
            <span className="text-primary-500 italic">to yourself.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-stone-600 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            A safe space to navigate anxiety, burnout, and life transitions. 
            Together, we will build the tools you need for a balanced, meaningful life.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button 
              onClick={onBook}
              className="group bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary-200 hover:shadow-primary-300"
            >
              Book a Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="text-stone-600 hover:text-primary-600 px-8 py-4 rounded-full text-lg font-medium transition-colors duration-300">
              Learn more about me
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;