import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import React from "react";
import ProjectDisplay from "./project-display";
import { title } from "process";

function Projects() {

  const projets = [
    {
      title: "Project Sample",
      image: "https://images.pexels.com/photos/3801422/pexels-photo-3801422.jpeg",
      url: "#"
    },
    {
      title: "Project Sample",
      image: "https://images.pexels.com/photos/3801422/pexels-photo-3801422.jpeg",
      url: "#"
    },
    {
      title: "Project Sample",
      image: "https://images.pexels.com/photos/3801422/pexels-photo-3801422.jpeg",
      url: "#"
    },
    {
      title: "Project Sample",
      image: "https://images.pexels.com/photos/3801422/pexels-photo-3801422.jpeg",
      url: "#"
    },
    {
      title: "Project Sample",
      image: "https://images.pexels.com/photos/3801422/pexels-photo-3801422.jpeg",
      url: "#"
    },
  ]

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
                url={x.url}
                image={x.image}
                title={x.title}
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
