'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function StoryPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="story" className="py-20 md:py-32 px-6 lg:px-10" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extralight tracking-[0.15em] text-center mb-20 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          My Story
          <span className="section-title"></span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Placeholder for image - replace with actual image */}
            <div className="w-full h-full bg-gradient-to-br from-amber-900/50 to-amber-700/50 flex items-center justify-center">
              <p className="text-white/50 text-sm tracking-widest">DANCE PHOTO</p>
            </div>
            {/* When you have real images, use this instead:
            <Image
              src="/images/story-photo.jpg"
              alt="Bharatanatyam performance"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-light mb-6 tracking-wider">
              A Journey Through Bharatanatyam
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Bharatanatyam has been my spiritual and artistic journey for over 15 years.
              Trained in the traditional Kalakshetra style, I've had the privilege of
              performing at prestigious venues across the East Coast.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              My repertoire includes classical pieces like Alarippu, Jatiswaram, Varnam,
              and Thillana, alongside contemporary interpretations that bridge ancient
              traditions with modern expression.
            </p>
            <Link
              href="/story"
              className="inline-block px-8 py-4 border border-white/50 text-sm uppercase tracking-[0.15em]
                       hover:bg-white hover:text-black transition-all duration-300"
            >
              Read Full Story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}