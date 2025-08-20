
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-smooth ${isScrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'}`}>
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/images/Logo.png" 
            alt="CittaAI Logo" 
            className="h-8 sm:h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/#services" className="text-sm font-medium hover:text-blue-600 transition-colors">Services</Link>
          <Link to="/#about" className="text-sm font-medium hover:text-blue-600 transition-colors">About</Link>
          <Link to="/#testimonials" className="text-sm font-medium hover:text-blue-600 transition-colors">Testimonials</Link>
          <Link to="/#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">Contact</Link>
          <Link to="/#contact">
            <Button className="bg-blue-600 text-white rounded-full px-5 hover:bg-blue-700 transition-all shadow-sm">
               Get started
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-900" />
          ) : (
            <Menu className="h-6 w-6 text-gray-900" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-smooth ${isMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container px-4 py-4 mx-auto flex flex-col space-y-4">
          <Link to="/#services" className="text-sm font-medium py-2 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Services</Link>
          <Link to="/#about" className="text-sm font-medium py-2 hover:text-blue-600 transition-colors" onClick={toggleMenu}>About</Link>
          <Link to="/#testimonials" className="text-sm font-medium py-2 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Testimonials</Link>
          <Link to="/#contact" className="text-sm font-medium py-2 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Contact</Link>
          <Link to="/#contact">
            <Button className="bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all w-full" onClick={toggleMenu}>
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
