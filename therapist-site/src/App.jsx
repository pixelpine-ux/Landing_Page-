import React, { useState } from 'react';
import Hero from './Hero';
import Empathy from './Empathy';
import About from './About';
import Services from './Services';
import FAQ from './FAQ';
import Contact from './Contact';
import Footer from './Footer';
import BookingModal from './BookingModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-stone-50/80 backdrop-blur-md z-50 border-b border-stone-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-serif font-semibold text-stone-900">
            Dr. Sarah Bennett
          </div>
          <div className="hidden md:flex gap-8 text-stone-600 font-medium items-center">
            <a href="#about" className="hover:text-primary-600 transition-colors">About</a>
            <a href="#services" className="hover:text-primary-600 transition-colors">Services</a>
            <a href="#faq" className="hover:text-primary-600 transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-primary-600 transition-colors">Contact</a>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-md shadow-primary-200"
            >
              Book Consultation
            </button>
          </div>
          <button className="md:hidden text-stone-600">
            Menu
          </button>
        </div>
      </nav>

      <main>
        <Hero onBook={() => setIsModalOpen(true)} />
        <Empathy />
        <About />
        <Services />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App
