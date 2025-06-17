'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur-lg py-4' : 'bg-gradient-to-b from-black/80 to-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-light tracking-[0.2em] uppercase">
            Dancer
          </div>

          <ul className="hidden md:flex gap-10">
            <li>
              <Link href="#story" className="text-sm uppercase tracking-[0.15em] hover:opacity-80 transition-opacity">
                My Story
              </Link>
            </li>
            <li>
              <Link href="#portfolio" className="text-sm uppercase tracking-[0.15em] hover:opacity-80 transition-opacity">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-sm uppercase tracking-[0.15em] hover:opacity-80 transition-opacity">
                Contact Me
              </Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button className="md:hidden">
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  )
}