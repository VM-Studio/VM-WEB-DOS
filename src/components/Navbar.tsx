'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'INICIO' },   
    { href: '/casos-de-estudio', label: 'CASOS DE ESTUDIO' },
    { href: '/app', label: 'APP' },
    { href: '/cotizador', label: 'COTIZADOR' },
    { href: '/contacto', label: 'CONTACTO' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.substring(2);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      <nav 
        className={`
          fixed top-0 left-0 right-0 z-50 
          transition-all duration-300 ease-out
          ${isScrolled 
            ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200' 
            : 'bg-transparent'
          }
          ${className}
        `}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image 
                width={60}
                height={60}
                src="/log.png"
                alt="Logo"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-[11px] font-medium tracking-widest text-gray-600 hover:text-black transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button and Theme Toggle */}
            <div className="flex items-center gap-4 md:hidden">
              {/* Hamburger Menu */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative z-10 min-w-[44px] min-h-[44px] flex flex-col justify-center items-center"
                aria-label="Toggle mobile menu"
              >
                <span 
                  className={`
                    block w-5 h-[1.5px] bg-black 
                    transition-all duration-300 ease-out
                    ${isMobileMenuOpen ? 'rotate-45 translate-y-[3.75px]' : ''}
                  `}
                />
                <span 
                  className={`
                    block w-5 h-[1.5px] bg-black mt-1.5
                    transition-all duration-300 ease-out
                    ${isMobileMenuOpen ? '-rotate-45 -translate-y-[3.75px]' : ''}
                  `}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-14"
          >
            <div className="px-6 py-8">
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      handleNavClick(e, item.href);
                      if (!item.href.startsWith('/#')) {
                        setIsMobileMenuOpen(false);
                      }
                    }}
                    className="min-h-[44px] flex items-center text-sm font-medium tracking-widest text-gray-600 hover:text-black transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
