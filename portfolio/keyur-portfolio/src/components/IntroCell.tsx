import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
}

const word = {
  hidden: { y: 60, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function IntroCell() {
  const lines = ["I'M KEYUR", 'A UI/UX DESIGNER', '& PRODUCT', 'MANAGER']

  return (
    <div className="grid-cell bg-[#f5f4ef] h-full p-6 md:p-8 flex flex-col justify-between min-h-[280px] md:min-h-0">
  <motion.p
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4, delay: 0.1 }}
    className="text-[20px] tracking-[0.15em] text-neutral-400 uppercase"
  >
    About
  </motion.p>

  <div className="flex flex-col gap-2">
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="overflow-hidden"
    >
      {lines.map((line) => (
        <div key={line} className="overflow-hidden">
          <motion.h1
            variants={word}
            className="font-condensed font-semibold text-[clamp(32px,4.5vw,54px)] leading-[1.09] uppercase text-[#111] tracking-tight"
          >
            {line}
          </motion.h1>
        </div>
      ))}
    </motion.div>

    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className="text-[20px] leading-[1.5rem] text-[#111111] max-w-[450px]"
    >
      Designing intuitive digital experiences that simplify complex ideas into
      seamless and engaging user journeys.
    </motion.p>
  </div>
</div>
  )
}
