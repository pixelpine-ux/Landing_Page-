import React from 'react';
import { motion } from 'framer-motion';

const Empathy = () => {
  const painPoints = [
    "You feel overwhelmed by daily life, even when things seem 'fine' on paper.",
    "Anxiety keeps you awake at night, replaying conversations or worrying about the future.",
    "You feel disconnected from your partner or struggle to set boundaries with family.",
    "You've achieved success, but still feel a lingering sense of emptiness or burnout."
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-4xl text-stone-800 mb-4"
          >
            You don't have to carry it all alone.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-stone-600"
          >
            Life can feel heavy. Therapy provides the space to set that weight down.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:border-primary-200 transition-colors"
            >
              <div className="w-2 h-2 mt-2.5 rounded-full bg-primary-400 shrink-0" />
              <p className="text-stone-700 leading-relaxed">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Empathy;