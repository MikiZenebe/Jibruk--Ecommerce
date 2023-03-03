const { motion } = require("framer-motion");

export const wrapper = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const empty = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
  transition: { delay: 0.2 },
};

export const card = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { delay: 0.4 } },
};

export const cards = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};
