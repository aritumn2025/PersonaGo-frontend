"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface EmphasizeButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

function EmphasizeButton({ href, className, children }: EmphasizeButtonProps) {
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
          className={twMerge("rounded-2xl px-4 py-2 shadow-xl", className)}
        >
          {children}
        </motion.button>
      </Link>
    </motion.div>
  );
}
export { EmphasizeButton };
