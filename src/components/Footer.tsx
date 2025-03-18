
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: '#' },
  { icon: Facebook, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Linkedin, href: '#' }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-600 text-white overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="md:col-span-4">
              <div className="mb-6">
                <span className="font-display text-2xl font-bold">Citta<span className="text-blue-100">AI</span></span>
              </div>
              <p className="text-blue-100 max-w-xs mb-6">
                Transforming digital marketing with artificial intelligence and data-driven strategies for the modern age.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    className="bg-blue-500/30 hover:bg-blue-500/50 p-2 rounded-full transition-colors"
                    aria-label={`Follow us on ${social.icon.name}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h3 className="font-medium text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Team</a></li>
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h3 className="font-medium text-lg mb-4">Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">AI Marketing</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">SEO Optimization</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Content Creation</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Analytics</a></li>
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h3 className="font-medium text-lg mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h3 className="font-medium text-lg mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-500/30 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100 text-sm">
              © {currentYear} CittaAI. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
