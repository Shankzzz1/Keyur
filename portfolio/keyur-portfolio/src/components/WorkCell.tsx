import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clinisio from '../images/clinisio.svg';
import skillcrunch from "../images/skillcrunch.svg";

const images = [
  {
    id: 1,
    src: clinisio,
    alt: "Healthcare",
  },
  {
    id: 2,
    src: skillcrunch,
    alt: "Education",
  },
  
];

export default function WorkCell() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActive((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid-cell bg-[#ffffff] h-full p-6 md:p-8 flex flex-col justify-between overflow-hidden relative">

      {/* Image Carousel */}
      <div className="relative w-full flex-1 rounded-xl overflow-hidden mb-4 min-h-0">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={images[active].id}
            src={images[active].src}
            alt={images[active].alt}
            custom={direction}
            variants={{
              enter: (d: number) => ({ x: d * 40, opacity: 0, scale: 1.04 }),
              center: { x: 0, opacity: 1, scale: 1 },
              exit: (d: number) => ({ x: d * -40, opacity: 0, scale: 0.97 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Dot indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? 20 : 6,
                height: 6,
                background:
                  i === active ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.4)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="flex flex-col gap-2">
          <motion.p
            className="font-condensed font-semibold text-[clamp(32px,4.5vw,54px)] leading-[1.09] uppercase text-[#111] tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            MY WORK
          </motion.p>
          <motion.p
            className="text-[20px] leading-[1.5rem] text-[#111111] max-w-[600px]"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            My work is driven by curiosity, problem-solving, and attention to
            detail — designing products that not only look polished, but also
            feel intuitive and purposeful.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}