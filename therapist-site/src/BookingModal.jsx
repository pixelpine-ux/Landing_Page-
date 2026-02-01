import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const BookingModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-[60]"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 flex items-center justify-center z-[70] p-4 pointer-events-none"
          >
            <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden pointer-events-auto">
              {/* Header */}
              <div className="bg-primary-50 p-6 flex justify-between items-center border-b border-primary-100">
                <div>
                  <h3 className="font-serif text-2xl text-stone-900">Request Consultation</h3>
                  <p className="text-stone-600 text-sm mt-1">Free 15-minute introductory call</p>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-primary-100 rounded-full text-stone-500 hover:text-stone-800 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
                    <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none bg-stone-50" placeholder="Jane Doe" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                      <input type="email" className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none bg-stone-50" placeholder="jane@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Phone</label>
                      <input type="tel" className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none bg-stone-50" placeholder="(555) 000-0000" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Preferred Time</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Morning', 'Afternoon', 'Evening'].map((time) => (
                        <button 
                          key={time}
                          type="button"
                          className="px-3 py-2 rounded-lg border border-stone-200 text-sm text-stone-600 hover:border-primary-500 hover:text-primary-600 hover:bg-primary-50 transition-all"
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 rounded-lg transition-colors shadow-lg shadow-primary-200">
                      Request Appointment
                    </button>
                    <p className="text-center text-xs text-stone-400 mt-3">
                      I will contact you within 24 hours to confirm.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;