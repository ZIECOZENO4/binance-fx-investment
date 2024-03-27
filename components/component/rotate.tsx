import { motion } from 'framer-motion';

const CircleAnimation = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div 
        className="relative w-48 h-48 rounded-full flex items-center justify-center"
        animate={{
          rotate: 360,
          backgroundColor: ["#ff0000", "#00ff00", "#0000ff", "#ff0000"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.33, 0.66, 1],
          repeat: Infinity,
          repeatDelay: 1
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-sm font-bold">FX Trade</span>
        </div>
      </motion.div>
    </div>
  );
};

export default CircleAnimation;
