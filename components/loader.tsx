// components/Loader.tsx
'use client';
import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 bg-primary z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <img src="krestdev.svg" alt="logo" className='size-20'/>
    </motion.div>
  );
}