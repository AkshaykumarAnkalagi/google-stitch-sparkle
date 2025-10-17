import { motion } from "framer-motion";

export const Loader = () => {
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
        
        {/* Center logo/text */}
        <div className="relative z-10 flex h-20 w-20 items-center justify-center">
          <span className="text-2xl font-bold text-white">SFL</span>
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

export const PageLoader = () => {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="relative">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-muted border-t-accent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 animate-pulse rounded-full bg-accent/20" />
        </div>
      </div>
    </div>
  );
};
