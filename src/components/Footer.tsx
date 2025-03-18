
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Mail, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/cittaai', label: 'Twitter' },
  { icon: Facebook, href: 'https://facebook.com/cittaai', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/cittaai', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/company/cittaai', label: 'LinkedIn' }
];

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Team', href: '/team' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' }
];

const serviceLinks = [
  { label: 'AI Marketing', href: '/services/branding-strategy' },
  { label: 'SEO Optimization', href: '/services/seo-services' },
  { label: 'Content Creation', href: '/services/content-creation' },
  { label: 'Analytics', href: '/services/business-automation' }
];

const resourceLinks = [
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Documentation', href: '/resources/documentation' },
  { label: 'Help Center', href: '/help-center' },
  { label: 'API', href: '/developers/api' }
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/legal/privacy-policy' },
  { label: 'Terms of Service', href: '/legal/terms-of-service' },
  { label: 'Security', href: '/legal/security' },
  { label: 'Cookies', href: '/legal/cookies' }
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
                    aria-label={`Follow us on ${social.label}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-blue-300" />
                  <a href="mailto:team@influenceai.in" className="text-blue-100 hover:text-white transition-colors">
                    team@influenceai.in
                  </a>
                </div>
                <div className="flex items-center">
                  <PhoneCall className="h-5 w-5 mr-3 text-blue-300" />
                  <a href="tel:+918919333347" className="text-blue-100 hover:text-white transition-colors">
                    +91 8919333347
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h3 className="font-medium text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.href} className="text-blue-100 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h3 className="font-medium text-lg mb-4">Services</h3>
              <ul className="space-y-3">
                {serviceLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.href} className="text-blue-100 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h3 className="font-medium text-lg mb-4">Resources</h3>
              <ul className="space-y-3">
                {resourceLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.href} className="text-blue-100 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h3 className="font-medium text-lg mb-4">Legal</h3>
              <ul className="space-y-3">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.href} className="text-blue-100 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
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
                <li>
                  <Link to="/legal/privacy-policy" className="text-blue-100 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/legal/terms-of-service" className="text-blue-100 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/legal/cookies" className="text-blue-100 hover:text-white transition-colors">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
