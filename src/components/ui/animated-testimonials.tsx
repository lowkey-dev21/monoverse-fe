"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

import { useEffect, useState, useMemo } from "react";
import { Button } from "./button";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

// Fixed rotation values to use during server-side rendering
const serverRotationValues = [5, -3, -7, 4, -2, 6, -4, 8, -5, 3];

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  showButtons = false,
  buttonText = { primary: "Get Started", secondary: "Learn More" },
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  showButtons?: boolean;
  buttonText?: { primary: string; secondary: string };
}) => {
  const [active, setActive] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true after mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Pre-generate rotation values for each testimonial
  const rotationValues = useMemo(() => {
    // Use the same values for server and initial client render
    if (!isClient) {
      return testimonials.map((_, index) => ({
        initial: serverRotationValues[index % serverRotationValues.length],
        exit: serverRotationValues[(index + 1) % serverRotationValues.length],
      }));
    }

    // Generate random values only after component has mounted on client
    return testimonials.map(() => ({
      initial: Math.floor(Math.random() * 21) - 10,
      exit: Math.floor(Math.random() * 21) - 10,
    }));
  }, [testimonials.length, isClient]);

  const handleNext = () => {
    setActive(prev => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="mx-auto container  lg:px-[3rem] lg:h-[750px] h-[1000px] justify-center rounded-b-xl  pt-[8rem] lg:pt-[10rem] pb-[3rem] font-sans antialiased px-8 ">
      <div className="relative md:px-[4rem] lg:px-0 grid  justify-between grid-cols-1 lg:gap-20 h-[750px]  lg:h-full gap-4  lg:grid-cols-2">
        <div className=" flex  " >
          <div className="relative p-[2rem]  h-[300px] md:[500px] xl:h-[450px]  lg:p-0 lg:h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: rotationValues[index].initial,
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : rotationValues[index].initial,
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: rotationValues[index].exit,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={800}
                    height={800}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex  justify-between  flex-col lg:h-[400px] sm:h-[350px] h-[450px]  lg:py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            className="h-[250px]  sm:h-[160px] lg:h-[400px]  mt-8 lg:mt-0 "
          >
            <h3 className="text-3xl lg:text-4xl mt-2 lg:mt-0 font-dmsans font-bold text-foreground">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-foreground/70">
              {testimonials[active].designation}
            </p>
            <motion.div className=" lg:mt-8  mt-2 text-lg text-foreground/70">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <div className="flex  flex-col  lg:pt-0">
            <div className="sm:hidden  mb-4 flex gap-4 mt-4">
              <button
                onClick={handlePrev}
                className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-primary hover:bg-primary/80 transition"
              >
                <IconArrowLeft className="h-5 w-5 text-card transition-transform duration-300 group-hover/button:rotate-12 " />
              </button>
              <button
                onClick={handleNext}
                className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-primary  hover:bg-primary/80 transition"
              >
                <IconArrowRight className="h-5 w-5 text-card transition-transform duration-300 group-hover/button:-rotate-12 " />
              </button>
            </div>

            {showButtons && (
              <div className="flex lg:items-center flex-col sm:h-[100px]  sm:flex-row gap-4 mt-3 lg:mt-6">
                <Button className="h-[45px] rounded-lg bg-primary text-card font-semibold text-base shadow hover:bg-primary/80 transition">
                  {buttonText.primary}
                </Button>
                <Button
                  variant="outline"
                  className="h-[45px] rounded-lg border-2 border-primary font-semibold text-base transition"
                >
                  {buttonText.secondary}
                </Button>
              </div>
            )}

            <div className="hidden sm:flex gap-4 sm:mt-0 ">
              <button
                onClick={handlePrev}
                className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-primary hover:bg-primary/80 transition"
              >
                <IconArrowLeft className="h-5 w-5 text-card transition-transform duration-300 group-hover/button:rotate-12 " />
              </button>
              <button
                onClick={handleNext}
                className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-primary hover:bg-primary/80 transition"
              >
                <IconArrowRight className="h-5 w-5 text-card transition-transform duration-300 group-hover/button:-rotate-12 " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
