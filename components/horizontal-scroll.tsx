'use client'
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import React, { useRef } from "react";


export const HorizontalScrollCarousel = ({children}:{children:React.ReactNode}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Track if the screen is mobile
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind 'sm' breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const x = useSpring(useTransform(scrollYProgress, [0, 1], isMobile ? ["0%", "0%"] : ["0%", "-57%"]), {
    stiffness: 200,
    damping: 50,
    restDelta:0.001
  });

  return (
    <section ref={targetRef} className="static sm:relative min-h-fit sm:h-[300vh] overflow-x-clip w-screen">
      <motion.div className="sticky top-[20vh] mx-auto flex items-start w-full max-w-[844px] overflow-x-visible" initial={{height: "fit-content"}} animate={{height: "fit-content"}} exit={{height: "auto", transition: {type: "spring", damping: 50, stiffness: 200}}}>
        <motion.div style={{ x }} className="px-7 xl:px-0 grid grid-cols-1 sm:flex gap-10">
          {children}
        </motion.div>
      </motion.div>
    </section>
  );
};
