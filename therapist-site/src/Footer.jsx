import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-2xl text-stone-100 mb-4">Dr. Sarah Bennett</h3>
            <p className="max-w-xs leading-relaxed">
              Compassionate, evidence-based therapy to help you navigate life's challenges and find your way back to yourself.
            </p>
          </div>
          
          <div>
            <h4 className="text-stone-100 font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-primary-400 transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Services</a></li>
              <li><a href="#faq" className="hover:text-primary-400 transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-stone-100 font-medium mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Psychology Today</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Dr. Sarah Bennett. All rights reserved.</p>
          <div className="flex items-center gap-2 text-amber-500/80">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            Crisis Line: 988
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;