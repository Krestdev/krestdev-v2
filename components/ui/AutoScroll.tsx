"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import TemoignageComp from "../Home/Temoignage/TemoignageComp"

interface Temoignage {
  image: string
  name: string
  titre: string
  description: string
}

interface Props {
  item: Temoignage[]
}

export function AutoScroll({ item }: Props) {
  const [emblaRef, setEmblaRef] = React.useState<any>(null)
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    // Vérifier si on est sur mobile au montage
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768) // 768px est une valeur courante pour mobile/tablette
    }
    
    // Vérifier au montage
    checkIfMobile()
    
    // Écouter les changements de taille
    window.addEventListener('resize', checkIfMobile)
    
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  React.useEffect(() => {
    if (!emblaRef || isMobile) return

    const interval = setInterval(() => {
      if (emblaRef.canScrollNext()) {
        emblaRef.scrollNext()
      } else {
        emblaRef.scrollTo(0)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [emblaRef, isMobile])

  if (isMobile) {
    return (
      <div className="flex flex-col w-fit">
        {item.map((x, i) => (
          <div key={i} className="w-fit">
            <TemoignageComp
              image={x.image}
              name={x.name}
              description={x.description}
              titre={x.titre}
            />
          </div>
        ))}
      </div>
    )
  }

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      setApi={setEmblaRef}
      className="w-full"
    >
      <CarouselContent className="ml-11 max-w-screen">
        {item.map((x, i) => (
          <CarouselItem
            key={i}
            className="basis-auto shrink-0 grow-0 p-0"
          >
            <TemoignageComp
              image={x.image}
              name={x.name}
              description={x.description}
              titre={x.titre}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}