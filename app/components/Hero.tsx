'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsChevronDown } from 'react-icons/bs'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black z-0" />

      {/* Animated background pattern */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear'
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(139, 69, 19, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 69, 19, 0.3) 0%, transparent 50%)',
          backgroundSize: '100% 100%',
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-[0.2em] uppercase mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Bharatanatyam
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl font-light tracking-[0.15em] text-gray-300 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Classical Indian Dance • Jersey City, NJ
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="#story"
            className="inline-block px-8 py-4 border border-white/50 text-sm uppercase tracking-[0.15em]
                     hover:bg-white hover:text-black transition-all duration-300 hover:-translate-y-1"
          >
            Discover My Journey
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Bs