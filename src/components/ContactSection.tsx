
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, CheckCircle, Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    content: 'team@influenceai.in',
    href: 'mailto:team@influenceai.in'
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+91 8919333347, 8919492742',
    href: 'tel:+918919333347'
  },
  {
    icon: MapPin,
    title: 'Office',
    content: '3rd floor, Kanakadurga mansion, KPHB Vth phase, Hyderabad',
    href: 'https://www.google.com/search?q=CITTA+MARKETING+AGENCY&stick=H4sIAAAAAAAA_-NgU1I1qDBOSk6yNDQzM0w0NEpLMkyxMqgwMTM3NzUwS7EwNbFMSU1NXcQq5uwZEuKo4OsY5O0a4unnruDo7urnHAkAXAEPikIAAAA&hl=en&mat=CW3xXgtQNAiPElYBmzl_pVpQvmsuF_y5YYtEpXKpxsbJMFldiZ83c2LXe_4vym17rI7oBkTUVplfD_a0qR1Q7Eru_3hdUlbZ2134IM8Ul32DCI5y07zVJfNIIcFiRfbwJA&authuser=0'
  }
];

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
        className: "glass-panel border-blue-100"
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    }, 1500);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="contact" className="py-20 md:py-32 overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-lg reveal">
            <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 mb-4">
              <Mail className="h-4 w-4 mr-1" />
              Get in Touch
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your <span className="text-gradient">Digital Marketing</span>?
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how our AI-powered solutions can help your business reach its full potential. Fill out the form and one of our specialists will get back to you within 24 hours.
            </p>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className="flex items-start hover-card-animation p-4 rounded-lg hover:bg-blue-50/50 transition-colors"
                  target={method.icon === MapPin ? "_blank" : undefined}
                  rel={method.icon === MapPin ? "noopener noreferrer" : undefined}
                >
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <method.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">{method.title}</h3>
                    <p className="text-gray-600">{method.content}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="reveal">
            <div className="glass-panel rounded-2xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your Company Ltd."
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-lg"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project and needs..."
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-lg resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  className={`w-full bg-blue-600 text-white hover:bg-blue-700 rounded-lg py-6 transition-all ${
                    isSubmitting ? 'opacity-90' : ''
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
