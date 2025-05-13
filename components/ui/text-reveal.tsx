"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  text: string;
  textClassName?:string;
}

export const TextReveal: FC<TextRevealProps> = ({ text, className, textClassName }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 80%", "end 50%"], // Trigger when the component enters the viewport
  });

  const words = text.split(" ");

  return (
    <div ref={targetRef} className={className}>
      <div className="flex items-center relative px-7 md:px-0">
        <p
          className={"flex flex-wrap font-medium text-slate-950/20 mx-auto text-[18px] sm:text-[24px] lg:text-[28px] max-w-[844px] leading-[120%] tracking-[-0.03em]"}
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useSpring(useTransform(progress, range, [0, 1]), {
    stiffness: 200,
    damping: 50,
    restDelta:0.001
  });
  const y = useTransform(progress, range, [20, 0]); // Words move up slightly as they appear

  return (
    <span className="relative mx-1 lg:mx-1.5">
      {/* Faded Background Text */}
      <span className="absolute opacity-30">{children}</span>
      {/* Revealed Text */}
      <motion.span
        style={{ opacity, y }}
        className="text-slate-950 dark:text-white"
      >
        {children}
      </motion.span>
    </span>
  );
};
