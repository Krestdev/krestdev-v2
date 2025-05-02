// Déclaration du composant comme Client Component (nécessaire pour les hooks et animations)
'use client'

// Import des hooks et fonctions nécessaires
import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Statistique from './Statistique'
import { useTranslations } from 'next-intl'

// Définition des propriétés du composant avec TypeScript
interface ScrollCarouselProps {
  children: React.ReactNode       // Contenu du carousel
  containerHeight?: string       // Hauteur optionnelle du conteneur
  stickyHeight?: string          // Hauteur optionnelle de la section sticky
  className?: string             // Classes CSS optionnelles
}

export function ScrollCarousel({
  children,
  containerHeight = '800vh',     // Valeur par défaut
  stickyHeight = '300px',        // Valeur par défaut
  className = ''                 // Valeur par défaut
}: ScrollCarouselProps) {
  // Références aux éléments DOM
  const containerRef = useRef<HTMLDivElement>(null) // Conteneur principal
  const innerRef = useRef<HTMLDivElement>(null)     // Conteneur des éléments enfants
  const sectionRef = useRef<HTMLDivElement>(null)   // Section globale

  // Configuration du suivi du scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,          // Élément à observer
    offset: ['start start', 'end start'] // Déclencheurs de début/fin
  })

  // État pour stocker la largeur scrollable
  const [scrollableWidth, setScrollableWidth] = useState(0)

  // Effet pour calculer et mettre à jour la largeur scrollable
  useEffect(() => {
    const calculateWidth = () => {
      if (innerRef.current && containerRef.current) {
        // Calcul de la largeur totale scrollable
        const contentWidth = innerRef.current.scrollWidth
        const containerWidth = containerRef.current.clientWidth
        setScrollableWidth(contentWidth - containerWidth)
      }
    }

    // Calcul initial + écouteur de redimensionnement
    calculateWidth()
    window.addEventListener('resize', calculateWidth)

    // Nettoyage de l'écouteur
    return () => window.removeEventListener('resize', calculateWidth)
  }, [])

  // Transformation du scroll en valeur de déplacement horizontal
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollableWidth])
  const t = useTranslations("About")

  return (
    // Section principale qui sert de déclencheur pour le scroll
    <section
      ref={sectionRef}
      className={`relative ${className}`}
      style={{ height: containerHeight }}
    >
      {/* Zone sticky qui reste visible pendant le scroll */}
      <div
        className="sticky top-0 flex flex-col items-center overflow-hidden"
        style={{ height: stickyHeight }}
      >
        {/* Conteneur avec overflow caché */}
        <div ref={containerRef} className="h-fit w-full flex flex-col items-center gap-[60px] overflow-hidden">
          {/* Élément animé qui contient les enfants */}

          <p className='w-[844px] text-[28px] text-black'>{t("description")}</p>
          <motion.div
            ref={innerRef}
            style={{ x }} // Animation horizontale contrôlée par le scroll
            className="flex gap-8 px-4 will-change-transform" // will-change pour optimisation
          >
            {children} {/* Contenu du carousel */}
          </motion.div>
          
          <Statistique /> {/* Composant de statistiques */}
        </div>
      </div>
    </section>
  )
}