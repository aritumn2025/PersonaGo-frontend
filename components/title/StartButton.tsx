"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface StartButtonProps {
  href: string;
  children: React.ReactNode;
}

function StartButton({ href, children }: StartButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
    >
      <Link href={href}>
        <motion.button
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 0 rgba(0,0,0,0)",
              "0 0 20px rgba(255,255,255,0.6)",
              "0 0 0 rgba(0,0,0,0)",
            ],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.1 }}
          className="h-12 w-40 rounded-2xl bg-white px-10 py-2 text-2xl font-semibold text-green-500 shadow-xl"
        >
          {children}
        </motion.button>
      </Link>
    </motion.div>
  );
}
export { StartButton };
