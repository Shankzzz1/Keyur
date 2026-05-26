import { motion } from "framer-motion";
import keyurpfp from "../images/keyurpfp.png";

export default function PhotoCell() {
  return (
    <div className="grid-cell h-full bg-[#ffffff] overflow-hidden relative flex items-center justify-center min-h-[220px]">
      {/* Placeholder silhouette — swap src for real photo */}
      <motion.div
        className="w-full h-full relative flex items-end"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Placeholder person silhouette SVG */}
        <svg
          viewBox="0 0 300 400"
          fill="none"
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(1)", opacity: 0.4 }}
        >
          <rect width="300" height="400" fill="#333" />
          <circle cx="150" cy="120" r="55" fill="#555" />
          <ellipse cx="150" cy="330" rx="110" ry="130" fill="#444" />
        </svg>

        {/* "Add your photo" hint */}
        <img
          src={keyurpfp}
          alt="Keyur"
          className="absolute inset-0 w-full h-full object-cover object-top grayscale"
        />

        {/* Gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1a1a1a] to-transparent pointer-events-none" />
      </motion.div>

      {/* NAME tag at bottom */}
      <motion.div
        className="absolute bottom-4 left-5"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.4 }}
      >
        <p className="text-white/20 text-[10px] tracking-[0.2em] uppercase">
          Keyur
        </p>
      </motion.div>
    </div>
  );
}
