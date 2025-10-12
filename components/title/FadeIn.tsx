"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
      {children}
    </motion.div>
  );
}

export { FadeIn };
