import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./Loader.css"; // Make sure this file exists

export const Loader = () => {
  const [animateBurst, setAnimateBurst] = useState(false);

  useEffect(() => {
    // Trigger burst animation on mount
    setAnimateBurst(true);

    // Remove after animation duration (0.8s)
    const timer = setTimeout(() => setAnimateBurst(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-hero">
      <div className="relative">
        {/* Outer rotating ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-transparent border-t-accent border-r-accent"
          style={{ width: "80px", height: "80px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner pulsing circle */}
        <motion.div
          className="absolute inset-0 m-auto rounded-full bg-accent"
          style={{ width: "40px", height: "40px" }}
          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.6, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Center logo/text with burst effect */}
        <div className="relative z-10 flex h-20 w-20 items-center justify-center">
          <span
            className={`text-2xl font-bold text-white relative explosive-text ${
              animateBurst ? "animate-burst" : ""
            }`}
          >
            SFL
          </span>
        </div>
      </div>

      {/* Loading text */}
      <motion.p
        className="absolute bottom-1/3 text-lg font-medium text-white/80"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Loading Experience...
      </motion.p>
    </div>
  );
};
