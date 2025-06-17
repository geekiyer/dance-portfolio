'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const portfolioItems = [
  {
    id: 1,
    title: 'Alarippu & Jatiswaram',
    description: 'Opening pieces that showcase rhythm and technique',
    color: 'from-red-900/50 to-amber-900/50'
  },
  {
    id: 2,
    title: 'Varnam Performances',
    description: 'Complex pieces combining narrative and pure dance',
    color: 'from-blue-900/50 to-purple-900/50'
  },
  {
    id: 3,
    title: 'Thillana & Fusion',
    description: 'Contemporary interpretations and collaborations',
    color: 'from-green-900/50 to-teal-900/50'
  }
]

export default function PortfolioPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="portfolio" className="py-20 md:py-32 px-6 lg:px-10 bg-black/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extralight tracking-[0.15em] text-center mb-20 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          Portfolio
          <span className="section-title"></span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
            >
              <Link href={`/portfolio#${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="group relative h-[400px] rounded-lg overflow-hidden cursor-pointer">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-light tracking-wider mb-2 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="/portfolio"
            className="inline-block px-8 py-4 border border-white/50 text-sm uppercase tracking-[0.15em]
                     hover:bg-white hover:text-black transition-all duration-300"
          >
            View Full Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  )
}