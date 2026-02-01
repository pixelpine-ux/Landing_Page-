import React from 'react';
import { motion } from 'framer-motion';
import { User, Users, Sun, Anchor } from 'lucide-react';

const services = [
  {
    title: "Individual Therapy",
    desc: "One-on-one sessions to explore your inner world, heal past wounds, and build resilience.",
    icon: User
  },
  {
    title: "Couples Counseling",
    desc: "Navigate conflict, improve communication, and deepen intimacy with your partner.",
    icon: Users
  },
  {
    title: "Anxiety & Depression",
    desc: "Evidence-based strategies to manage symptoms and find your footing again.",
    icon: Sun
  },
  {
    title: "Life Transitions",
    desc: "Support during career changes, grief, breakups, or new beginnings.",
    icon: Anchor
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary-600 font-medium tracking-wider uppercase text-sm"
          >
            My Approach
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl text-stone-900 mt-3"
          >
            How we can work together
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-stone-100"
            >
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6">
                <service.icon size={24} />
              </div>
              <h3 className="font-serif text-xl text-stone-900 mb-3">{service.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;