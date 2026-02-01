import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-primary-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-stone-200 shadow-xl relative z-10">
               {/* Placeholder for Headshot */}
               <div className="w-full h-full bg-stone-300 flex items-center justify-center text-stone-500 font-medium">
                  [Therapist Headshot]
               </div>
            </div>
            {/* Decorative blobs behind image */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-200 rounded-full -z-0 blur-2xl opacity-60" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-white rounded-full -z-0 blur-2xl opacity-60" />
          </motion.div>

          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <span className="text-primary-600 font-medium tracking-wider uppercase text-sm">
              About Me
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mt-3 mb-6">
              Hi, I'm Dr. Sarah Belayneh.
            </h2>
            
            <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
              <p>
                I believe that therapy is not just about fixing what’s "broken," but about uncovering the resilience that has been there all along.
              </p>
              <p>
                With over 10 years of clinical experience, I help individuals and couples navigate the complexities of modern life. My approach is warm, direct, and grounded in evidence-based practices like CBT and Mindfulness.
              </p>
              <p>
                When I'm not in the office, you can find me hiking the local trails or curling up with a good book and a cup of tea.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-primary-200 grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-serif text-xl text-stone-900">10+ Years</h4>
                <p className="text-stone-500 text-sm">Experience</p>
              </div>
              <div>
                <h4 className="font-serif text-xl text-stone-900">Ph.D.</h4>
                <p className="text-stone-500 text-sm">Clinical Psychology</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;