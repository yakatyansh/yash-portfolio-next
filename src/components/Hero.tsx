'use client'; // if you're using Next.js app directory

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="snap-start h-screen bg-gray-900 text-white flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-5xl sm:text-6xl font-extrabold"
      >
        Hello, I'm Yash Katyan
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
        className="mt-4 text-xl sm:text-2xl font-light"
      >
        A passionate developer who builds amazing digital experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-8"
      >
        <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition-all ease-in-out">
          Let's Build Something
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
