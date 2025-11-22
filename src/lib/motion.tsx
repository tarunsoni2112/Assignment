import React from "react";
import { motion, Variants } from "framer-motion";

export const variants: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: -24 },
    show: { opacity: 1, x: 0 },
  },
  fadeScale: {
    hidden: { opacity: 0, scale: 0.96 },
    show: { opacity: 1, scale: 1 },
  },
  staggerContainer: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  },
};

export type RevealProps = {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  delay?: number;
  duration?: number;
  className?: string;
};

export const Reveal: React.FC<RevealProps> = ({
  children,
  variant = "fadeInUp",
  delay = 0,
  duration = 0.6,
  className,
}) => {
  return (
    <motion.div
      className={className}
      variants={variants[variant]}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};