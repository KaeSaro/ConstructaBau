'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const menuItems = [
  { name: 'Leistungen', href: '/leistungen' },
  { name: 'Karriere', href: '/karriere' },
  { name: 'Team', href: '/team' },
  { name: 'Kontakt', href: '/kontakt' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // 768px ist der md breakpoint in Tailwind
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 bg-background z-50">
      <div className="w-full">
        <div className="flex h-[80px]">
          <div className="w-full h-full px-8 sm:px-12 lg:px-16">
            {/* Logo */}
            <div className="absolute left-8 sm:left-12 lg:left-16 h-[80px] flex items-center z-[60]">
              <Link 
                href="/" 
                onClick={() => setIsOpen(false)}
                className={`text-xl font-bold font-['IBM_Plex_Mono',_sans-serif] uppercase tracking-wider transition-colors duration-300 ease-in-out text-foreground md:text-foreground ${
                  isOpen ? 'text-white' : ''
                }`}
              >
                CONSTRUCTA BAU
              </Link>
            </div>
            
            {/* Desktop menu */}
            <nav className="hidden md:flex h-full flex-1 justify-center items-center pl-40">
              <div className="flex space-x-12">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group relative inline-flex items-center px-1 text-sm font-medium font-['Montserrat',_sans-serif] text-[#0d0e14]"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0d0e14] group-hover:w-full transition-all duration-300 ease-in-out" />
                  </Link>
                ))}
              </div>
            </nav>
            
            {/* Menu button */}
            <div className="absolute right-8 sm:right-12 lg:right-16 h-[80px] flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex md:hidden items-center w-10 h-10 rounded-md focus:outline-none z-[60]"
                aria-label="Toggle menu"
              >
                <div className="relative w-7 h-2.5 ml-auto">
                  <span className={`
                    absolute left-0 w-full h-[2px] transform transition-all duration-300 ease-in-out
                    ${isOpen 
                      ? 'top-1 rotate-45 bg-white' 
                      : 'top-0 bg-[#0d0e14]'
                    }
                  `} />
                  <span className={`
                    absolute left-0 w-full h-[2px] transform transition-all duration-300 ease-in-out
                    ${isOpen 
                      ? 'top-1 -rotate-45 bg-white' 
                      : 'top-2.5 bg-[#0d0e14]'
                    }
                  `} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Border */}
        <div className="px-8 sm:px-12 lg:px-16">
          <div className="h-px bg-border" />
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`fixed top-0 left-0 right-0 bottom-0 bg-[#1a1a1a] md:hidden z-50 transition-all duration-300 ease-in-out transform ${
          isOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        {/* Menu items container */}
        <div className="h-full flex flex-col justify-end pb-32 px-8 sm:px-12 lg:px-16">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-[25px] font-[500] font-bold font-['Montserrat',_sans-serif] text-[#6a6a6a] hover:text-white transition-colors duration-200 mb-0.5"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Contact footer */}
        <div className="absolute bottom-0 left-0 right-0 px-8 sm:px-12 lg:px-16 py-6 flex justify-between items-center border-t border-gray-800">
          <span className="text-gray-400 font-['IBM_Plex_Mono',_sans-serif] text-sm uppercase">
            <span className="hidden min-[400px]:inline">BLEIBEN SIE IN KONTAKT</span>
            <span className="min-[400px]:hidden">KONTAKT</span>
          </span>
          <a 
            href="tel:+4930123456789" 
            className="text-white font-['Montserrat',_sans-serif] text-sm underline decoration-1 underline-offset-4 hover:text-gray-400 transition-colors duration-200"
          >
            +49 30 123 45 678
          </a>
        </div>
      </div>
    </header>
  )
}