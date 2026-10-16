import { useState, useEffect } from 'react'
import { HiBars3, HiXMark } from 'react-icons/hi2'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Technology', href: '#technology' },
  { label: 'Analytics', href: '#analytics' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-slate-200 bg-white/95 shadow-sm backdrop-blur'
          : 'border-transparent bg-white'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight text-teal-700"
        >
            
            <span><img src="https://acenna.in/wp-content/uploads/2019/06/finalLogo.png" width="100" height="50" /></span>
          ACENNA<span className="text-slate-800">.</span>
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          className="rounded-lg border border-slate-200 p-2 text-slate-600 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            <HiXMark className="h-5 w-5" />
          ) : (
            <HiBars3 className="h-5 w-5" />
          )}
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-teal-700"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-lg bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
          >
            Book Demo
          </a>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div className="absolute left-0 top-full flex w-full flex-col gap-4 border-t border-slate-100 bg-white p-5 shadow-lg md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-medium text-slate-700 transition hover:text-teal-700"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg bg-teal-700 px-5 py-3 text-center font-semibold text-white"
            >
              Book Demo
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
