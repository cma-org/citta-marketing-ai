
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import FounderSection from '../components/FounderSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  useEffect(() => {
    // Initialize reveal animation on scroll
    const handleScroll = () => {
      const revealElements = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    // Initial check
    handleScroll();
    
    // Event listener
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden scroll-container bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Navbar />
      <div className="space-y-0">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <FounderSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
