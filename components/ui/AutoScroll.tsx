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

  React.useEffect(() => {
    if (!emblaRef) return

    const interval = setInterval(() => {
      if (emblaRef.canScrollNext()) {
        emblaRef.scrollNext()
      } else {
        emblaRef.scrollTo(0)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [emblaRef])

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
