'use client';

import { motion } from 'framer-motion';

export default function AnimationWrapper({
  children,
  className = '',

  stagger = false,
  delay = 0,

  direction = 'y',
  distance = -30,
  duration = 0.5,
}) {
  const containerVariants = {
    hidden: {},
    show: {
      transition: stagger
        ? {
            staggerChildren: 0.12,
            delayChildren: delay,
          }
        : {
            delay,
          },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      ...(direction === 'x' ? { x: distance } : { y: distance }),
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true, // animate only once
        amount: 0.2, // trigger when 20% visible
      }}
    >
      <motion.div variants={itemVariants} className="h-full">
        {children}
      </motion.div>
    </motion.div>
  );
}
