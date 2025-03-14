import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { COLORS, TRANSITIONS, Z_INDEX } from '../../constants/theme';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className="fixed top-0 left-0 w-full"
      style={{ 
        background: isScrolled ? COLORS.background.overlay : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: `1px solid ${isScrolled ? 'rgba(255, 255, 255, 0.03)' : 'transparent'}`,
        transition: TRANSITIONS.smooth,
        zIndex: Z_INDEX.navbar,
      }}
      role="navigation" 
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink 
            to="/" 
            className="text-xl font-bold text-purple-500 hover:text-purple-300"
            style={{ transition: TRANSITIONS.default }}
            aria-label="Home"
          >
            stvk.
          </NavLink>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-purple-200 hover:text-purple-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex gap-6" role="menubar">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `text-sm font-medium ${
                    isActive ? 'text-purple-400' : 'text-neutral-400'
                  } hover:text-purple-300`
                }
                style={{ transition: TRANSITIONS.default }}
                role="menuitem"
                aria-current={({ isActive }) => isActive ? 'page' : undefined}
              >
                home
              </NavLink>
            </nav>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <nav className="pt-4 flex flex-col gap-4" role="menubar">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-sm font-medium ${
                  isActive ? 'text-purple-400' : 'text-neutral-400'
                } hover:text-purple-300`
              }
              style={{ transition: TRANSITIONS.default }}
              role="menuitem"
              aria-current={({ isActive }) => isActive ? 'page' : undefined}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              home
            </NavLink>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 