import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-600 font-medium tracking-wider uppercase text-sm">
              Get in Touch
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mt-3 mb-6">
              Start your journey today.
            </h2>
            <p className="text-stone-600 mb-8 leading-relaxed">
              Reaching out is the first step. Whether you have questions or are ready to book a session, I'm here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-stone-900">Office Location</h4>
                  <p className="text-stone-600">123 Healing Way, Suite 400<br/>Portland, OR 97205</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-stone-900">Email</h4>
                  <p className="text-stone-600">hello@drsarahbennett.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-stone-900">Phone</h4>
                  <p className="text-stone-600">(555) 123-4567</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-stone-50 p-8 rounded-2xl border border-stone-100"
          >
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all bg-white" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all bg-white" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all bg-white" placeholder="How can I help you?"></textarea>
              </div>
              <button type="button" className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;