import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ReadMoreProps {
  children: React.ReactNode;
}

export default function ReadMore({ children }: ReadMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      {/* Fade effect for the content above */}
      {!isExpanded && (
        <div className="h-32 bg-gradient-to-t from-white via-white/80 to-transparent absolute -top-32 left-0 right-0 pointer-events-none z-10" />
      )}

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-12">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`flex justify-center ${isExpanded ? 'mt-4' : '-mt-16 relative z-20'}`}>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="group flex items-center gap-3 px-12 py-5 bg-white border-2 border-rainbow-pink text-rainbow-pink font-black rounded-full hover:bg-rainbow-pink hover:text-white transition-all shadow-2xl hover:shadow-rainbow-pink/40 active:scale-95 text-lg"
        >
          {isExpanded ? (
            <>Show Less Information <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" /></>
          ) : (
            <>Read More Detailed Information <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" /></>
          )}
        </button>
      </div>
    </div>
  );
}
