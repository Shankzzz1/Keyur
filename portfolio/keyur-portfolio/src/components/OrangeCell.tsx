import { motion } from "framer-motion";
import stickman from "../images/stickman1.svg";

export default function OrangeCell() {
  return (
    <div className="grid-cell bg-[#FF4D1C] p-6 md:p-8 h-full flex flex-col justify-between overflow-hidden relative noise">

      {/* Diagonal grid lines — upper half */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "55%",
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              rgba(255,255,255,0.2) 0px,
              rgba(255,255,255,0.2) 1px,
              transparent 1px,
              transparent 28px
            ),
            repeating-linear-gradient(
              -45deg,
              rgba(255,255,255,0.2) 0px,
              rgba(255,255,255,0.2) 1px,
              transparent 1px,
              transparent 28px
            )
          `,
        }}
      />

      {/* Stickman */}
      <motion.div
        className="absolute -right-36 -top-4 z-10"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <img
          src={stickman}
          alt="stickman"
          className="w-[28rem] h-[26rem] object-contain grayscale"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-between h-full">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <h2 className="font-condensed font-semibold text-[clamp(32px,4.5vw,70px)] leading-[0.95] uppercase text-white tracking-tight">
            Product
            <br />
            Thinking
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-[20px] leading-[1.5rem] text-[#ffffff] max-w-[450px]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          A user-focused design approach built around usability, clarity,
          research, and seamless digital experiences.
        </motion.p>
      </div>
    </div>
  );
}