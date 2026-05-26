import { motion } from "framer-motion";
import planeSvg from "../images/plane.png";

export default function LimeCell() {
  return (
    <div className="grid-cell bg-[#C8E63C] h-full p-6 md:p-8 flex flex-col justify-between overflow-hidden relative">

      {/* Plane Image — top right, flush to edge */}
      <motion.div
        className="absolute top-4 right-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        <img
          src={planeSvg}
          alt="plane"
          className="w-88 h-80 object-contain grayscale"
        />
      </motion.div>

      {/* Text */}
      <motion.div
        className="mt-auto"
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
            Designing
            <br />
            Perspective
          </motion.p>
          <motion.p
            className="text-[20px] leading-[1.5rem] text-[#111111] max-w-[450px]"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            I turn ideas into intuitive interfaces by combining strategy,
            usability, and modern visual design.
          </motion.p>
        </div>
      </motion.div>

      {/* Decorative dot grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #111 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
    </div>
  );
}