import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import React from "react";
import ProjectDisplay from "./project-display";
import { useProjetData } from "@/data/data";

function Projects() {

  const projets = useProjetData()

  return (
    <section
      id="projects"
      className="component flexing items-start justify-start"
    >
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="w-full gap-7 px-7">
          {projets.map((x, i) => (
            <CarouselItem
              className="pl-0 max-w-md w-full"
              key={i}
            >
              <ProjectDisplay
                url={x.lien}
                image={x.image}
                title={x.nom}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <span className="flex gap-2 flex-wrap mt-5">
          <CarouselPrevious />
          <CarouselNext />
        </span>
      </Carousel>
    </section>
  );
}

export default Projects;
