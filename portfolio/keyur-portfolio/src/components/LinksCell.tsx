import { motion } from 'framer-motion'

const links = [
  { label: 'Behance', href: 'https://www.behance.net/keyurpawar306' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/keyur-pawar-66545b248/' },
  { label: 'Email', href: 'mailto:keyurpawar306@gmail.com' },
 { 
  label: 'Resume', 
  href: '../images/KeyurCV.pdf',
  download: true,
},
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.5 } },
}

const item = {
  hidden: { x: 20, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
}

export default function LinksCell() {
  return (
    <div className="grid-cell bg-[#111] h-full p-6 md:p-8 flex flex-col justify-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col"
      >
        {links.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            variants={item}
            data-hover
            className="group flex items-center justify-between py-5 border-b-2 border-white/40 last:border-none no-underline"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-white text-[28px] font-body font-normal tracking-wide">
              {link.label}
            </span>
            <motion.span
              className="text-white/50 text-2xl"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: -45, color: '#C8E63C' }}
              transition={{ duration: 0.2 }}
            >
              ↗
            </motion.span>
          </motion.a>
        ))}
      </motion.div>
    </div>
  )
}