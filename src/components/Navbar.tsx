import { motion } from 'motion/react';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const container = document.getElementById('main-scroll-container');
    if (!container) {
      // For pages without the custom scroll container (ProjectDetail), use window scroll
      const handleWindowScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleWindowScroll);
      return () => window.removeEventListener('scroll', handleWindowScroll);
    }

    const handleScroll = () => {
      setIsScrolled(container.scrollTop > 50);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname !== '/') {
      // Just let the natural Link/navigate behavior happen if we're not on home
      // But we want to scroll to that hash after navigation
      return; 
    }

    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    const container = document.getElementById('main-scroll-container');
    
    if (element && container) {
      container.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // If we just navigated to '/' with a hash, scroll to it
    if (location.pathname === '/' && location.hash) {
      const targetId = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        const container = document.getElementById('main-scroll-container');
        if (element && container) {
          container.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location.pathname, location.hash]);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      document.getElementById('main-scroll-container')?.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:py-6",
        isScrolled || location.pathname !== '/' ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 group"
          onClick={handleLogoClick}
        >
          <div className="w-10 h-10 rounded-full bg-accent-purple flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
            AB
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={`/${link.href}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-6 py-3 bg-[#9333ea] text-white rounded-full font-bold text-xs uppercase tracking-widest hover:shadow-lg transition-all"
          >
            Connect
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl"
      >
        <div className="p-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={`/${link.href}`}
              className="text-2xl font-bold text-gray-900"
              onClick={(e) => {
                handleNavClick(e, link.href);
                setIsMenuOpen(false);
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/#contact"
            className="w-full py-4 bg-[#9333ea] text-white rounded-2xl font-bold text-center"
            onClick={(e) => {
              handleNavClick(e, '#contact');
              setIsMenuOpen(false);
            }}
          >
            Let's Talk
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
}
