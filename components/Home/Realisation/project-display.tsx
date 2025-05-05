'use client'
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

interface Props {
  image: string;
  title: string;
  url: string
}

function ProjectDisplay({ image, title, url }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={url} target='_blank'>
      <motion.div
        initial={{ height: "80%" }}
        whileHover={{ height: "100%" }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative w-full h-auto aspect-[5/6] rounded-xl overflow-clip flex flex-col justify-end"
      >
        {/* Sombre */}
        <motion.div
          initial={{ opacity: 0, scale: 0, backgroundColor: 'rgba(0,0,0,0)' }}
          animate={isHovered
            ? { opacity: 1, scale: 1.5, backgroundColor: 'rgba(0,0,0,0.5)' }
            : { opacity: 0, scale: 0, backgroundColor: 'rgba(0,0,0,0)' }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 flex items-center justify-center rounded-full z-0 overflow-hidden"
        />


        {/* Image */}
        <img
          src={image}
          alt={title}
          className="absolute top-0 w-full h-[400px] sm:h-[450px] md:h-[500px] object-cover -z-10"
        />

        {/* Icône du lien vers le projet */}
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={isHovered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 rounded-full bg-white text-black flex items-center justify-center z-10"
        >
          <ArrowUpRight size={24} />
        </motion.span>

        {/* Titre du projet */}
        <motion.h4
          initial={{ y: 100, opacity: 0 }}
          animate={isHovered ? { y: -80, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white text-center px-5 absolute bottom-[6rem] w-full z-10"
        >
          {title}
        </motion.h4>
      </motion.div>
    </Link>
  );
}

export default ProjectDisplay;
