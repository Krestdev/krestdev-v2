// components/PageWrapper.tsx
'use client';
import { useEffect, useState } from 'react';
import Loader from './loader';
import { AnimatePresence } from 'framer-motion';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simule un chargement (tu peux remplacer par une logique de vérification des images, API, etc.)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>
      {!isLoading && children}
    </>
  );
}