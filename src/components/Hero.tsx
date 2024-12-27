import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/animations';
import { HeroHeading } from './hero/HeroHeading';
import { SocialLinks } from './hero/SocialLinks';
import { ScrollIndicator } from './hero/ScrollIndicator';

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="container mx-auto px-4 py-16"
      >
        <div className="max-w-4xl mx-auto">
          <HeroHeading />
          <SocialLinks />
        </div>
      </motion.div>
      <ScrollIndicator />
    </section>
  );
};