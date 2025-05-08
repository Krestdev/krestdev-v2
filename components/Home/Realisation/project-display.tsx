'use client'
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

interface Props {
  image: string;
  title: string;
  url: string;
}

function ProjectDisplay({ image, title, url }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Détecter mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Détecter scroll dans la vue sur mobile
  useEffect(() => {
    if (!isMobile || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("intersection:", entry.isIntersecting);
        if (entry.isIntersecting) setIsHovered(true);
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <Link href={url} target="_blank">
      <motion.div
        ref={containerRef}
        initial={{ height: isMobile ? '100%' : '80%' }}
        animate={!isMobile && isHovered ? { height: '100%' } : {}}
        onHoverStart={() => !isMobile && setIsHovered(true)}
        onHoverEnd={() => !isMobile && setIsHovered(false)}
        className="relative w-full min-h-[500px] sm:min-h-0 sm:aspect-[5/6] rounded-xl ml-11 overflow-hidden flex flex-col justify-end"
      >
        {/* Overlay sombre */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isHovered
            ? { opacity: 1, scale: 1.5, backgroundColor: 'rgba(0,0,0,0.5)' }
            : { opacity: 0, scale: 0, backgroundColor: 'rgba(0,0,0,0)' }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 rounded-full flex items-center justify-center z-0"
        />

        {/* Image */}
        <img
          src={image}
          alt={title}
          className="absolute top-0 left-0 w-full h-fit object-cover -z-10"
        />

        {/* Icône */}
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={isHovered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 rounded-full bg-white text-black flex items-center justify-center z-10"
        >
          <ArrowUpRight size={24} />
        </motion.span>

        {/* Titre */}
        <motion.h4
          initial={{ y: 100, opacity: 0 }}
          animate={isHovered ? { y: -50, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-center px-5 absolute bottom-[6rem] w-full z-10"
        >
          {title}
        </motion.h4>
      </motion.div>
    </Link>
  );
}

export default ProjectDisplay;
