"use client"

import * as React from "react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import EquipeComp from "./EquipeComp"

interface Equipe {
    nom: string,
    poste: string,
    image: string
}

interface Props {
    equipe: Equipe[]
}

export function EquipeCar({ equipe }: Props) {
    const [emblaRef, setEmblaRef] = React.useState<any>(null)

    React.useEffect(() => {
        if (!emblaRef) return

        const interval = setInterval(() => {
            if (emblaRef.canScrollNext()) {
                emblaRef.scrollNext()
            } else {
                emblaRef.scrollTo(0)
            }
        }, 5000)

        return () => clearInterval(interval)
    }, [emblaRef])

    return (
        <div className="max-w-fit w-full overflow-hidden">
            <Carousel
                opts={{
                    align: "center",
                    loop: true,
                    startIndex: 0, 
                    inViewThreshold: 0.5, 
                }}
                setApi={setEmblaRef}
                className="w-full relative"
            >
                <CarouselContent className="flex">
                    {equipe.map((membre, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-[300px] flex-shrink-0"
                        >
                            <EquipeComp {...membre} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}