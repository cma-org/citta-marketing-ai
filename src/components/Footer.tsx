
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
  { label: 'About Us', href: '/about', content: 'Learn about our company mission, vision, and the team behind CittaAI.' },
  { label: 'Our Team', href: '/team', content: 'Meet our expert team of AI specialists, marketers, and data scientists.' },
  { label: 'Careers', href: '/careers', content: 'Join our talented team and help shape the future of AI-driven marketing.' },
  { label: 'Blog', href: '/blog', content: 'Explore our latest insights on AI marketing trends and strategies.' }
];

const serviceLinks = [
  { label: 'AI Marketing', href: '/services/branding-strategy', content: 'Leverage AI to create powerful branding strategies for your business.' },
  { label: 'SEO Optimization', href: '/services/seo-services', content: 'Improve your search rankings with our AI-powered SEO solutions.' },
  { label: 'Content Creation', href: '/services/content-creation', content: 'Generate engaging, SEO-optimized content with our AI tools.' },
  { label: 'Analytics', href: '/services/business-automation', content: 'Gain valuable insights with advanced AI-powered analytics.' }
];

const resourceLinks = [
  { label: 'Case Studies', href: '/showcase', content: 'Explore our client success stories and real-world applications of our services.' },
  { label: 'Documentation', href: '/resources/documentation', content: 'Access comprehensive guides and resources for our AI marketing tools.' },
  { label: 'Help Center', href: '/help-center', content: 'Find answers to common questions and get support for our services.' },
  { label: 'API', href: '/developers/api', content: 'Technical documentation for developers integrating with our AI marketing platform.' }
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/legal/privacy-policy', content: 'Learn how we collect, use, and protect your personal information.' },
  { label: 'Terms of Service', href: '/legal/terms-of-service', content: 'Understand the terms and conditions for using our services.' },
  { label: 'Security', href: '/legal/security', content: 'Discover our commitment to keeping your data safe and secure.' },
  { label: 'Cookies', href: '/legal/cookies', content: 'Information about how we use cookies and similar technologies.' }
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
                  <a href="mailto:info@cittaai.com" className="text-blue-100 hover:text-white transition-colors">
                    info@cittaai.com
                  </a>
                </div>
                <div className="flex items-center">
                  <PhoneCall className="h-5 w-5 mr-3 text-blue-300" />
                  <a href="tel:+919392655040" className="text-blue-100 hover:text-white transition-colors">
                    +91 9392655040
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
