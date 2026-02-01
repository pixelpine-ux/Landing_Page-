import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What can I expect from the first session?",
    answer: "Our first session is a chance for us to get to know each other. We'll discuss what brought you to therapy, your history, and your goals. It's a low-pressure environment to see if we're a good fit."
  },
  {
    question: "Do you accept insurance?",
    answer: "I am an out-of-network provider. This means I can provide you with a superbill to submit to your insurance company for potential reimbursement, but I do not bill insurance directly."
  },
  {
    question: "How long does therapy usually take?",
    answer: "The duration of therapy varies for everyone. Some clients find relief in 8-12 sessions, while others prefer longer-term support. We will regularly review your progress to ensure we're meeting your needs."
  },
  {
    question: "Is what we talk about confidential?",
    answer: "Absolutely. Confidentiality is the cornerstone of therapy. What you share in our sessions stays between us, with a few legal exceptions regarding safety which we will discuss in our first meeting."
  }
];

const AccordionItem = ({ i, expanded, setExpanded, question, answer }) => {
  const isOpen = i === expanded;

  return (
    <motion.div 
      initial={false}
      className="border-b border-stone-200 last:border-0"
    >
      <button
        onClick={() => setExpanded(isOpen ? false : i)}
        className="flex items-center justify-between w-full py-6 text-left group"
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-primary-700' : 'text-stone-800 group-hover:text-primary-700'}`}>
          {question}
        </span>
        <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <Minus size={20} className="text-primary-600" /> : <Plus size={20} className="text-stone-400 group-hover:text-primary-600" />}
        </span>
      </button>
      
      <motion.div
        initial="collapsed"
        animate={isOpen ? "open" : "collapsed"}
        variants={{
          open: { opacity: 1, height: "auto", marginBottom: 24 },
          collapsed: { opacity: 0, height: 0, marginBottom: 0 }
        }}
        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
        className="overflow-hidden"
      >
        <p className="text-stone-600 leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
};

const FAQ = () => {
  const [expanded, setExpanded] = useState(0); // First one open by default

  return (
    <section id="faq" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">
            Common Questions
          </h2>
          <p className="text-stone-600">
            Everything you need to know before booking your first appointment.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-stone-100 px-6 md:px-8">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} i={i} expanded={expanded} setExpanded={setExpanded} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;