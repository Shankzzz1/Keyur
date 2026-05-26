import { motion } from 'framer-motion'
import CustomCursor from './components/CustomCursor'
import IntroCell from './components/IntroCell'
import LimeCell from './components/LimeCell'
import OrangeCell from './components/OrangeCell'
import PhotoCell from './components/PhotoCell'
import WorkCell from './components/WorkCell'
import LinksCell from './components/LinksCell'

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

const cells = [
  { component: <IntroCell />, key: 'intro' },
  { component: <LimeCell />, key: 'lime' },
  { component: <OrangeCell />, key: 'orange' },
  { component: <PhotoCell />, key: 'photo' },
  { component: <WorkCell />, key: 'work' },
  { component: <LinksCell />, key: 'links' },
]

export default function App() {
  return (
    <>
      <CustomCursor />

      {/* ── Desktop: locked viewport, original 3×2 grid ── */}
      <main className="hidden lg:flex lg:flex-col w-screen h-screen bg-[#f5f4ef] overflow-hidden">
        <motion.div
          className="w-full h-full grid grid-rows-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid grid-cols-3 min-h-0 overflow-hidden">
            {cells.slice(0, 3).map(({ component, key }, i) => (
              <motion.div
                key={key}
                custom={i}
                variants={fadeIn}
                initial="hidden"
                animate="show"
                className="min-h-0 min-w-0 overflow-hidden"
              >
                {component}
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-3 min-h-0 overflow-hidden">
            {cells.slice(3).map(({ component, key }, i) => (
              <motion.div
                key={key}
                custom={i + 3}
                variants={fadeIn}
                initial="hidden"
                animate="show"
                className="min-h-0 min-w-0 overflow-hidden"
              >
                {component}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      {/* ── Tablet & Mobile: scrollable, equal square cells ── */}
      <main className="lg:hidden w-screen bg-[#f5f4ef]">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {cells.map(({ component, key }, i) => (
            <motion.div
              key={key}
              custom={i}
              variants={fadeIn}
              initial="hidden"
              animate="show"
              className="aspect-square w-full min-w-0 overflow-hidden"
            >
              {component}
            </motion.div>
          ))}
        </motion.div>
      </main>
    </>
  )
}