import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export const ScrollIndicator = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
    >
      <ChevronDown className="w-8 h-8" />
    </motion.div>
  );
};