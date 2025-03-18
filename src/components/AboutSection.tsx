
import React, { useEffect } from 'react';
import { BadgeCheck, BarChart2, Brain, Cpu, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const features = [
  {
    title: "AI-Driven Strategy",
    description: "Our algorithms analyze market trends and customer data to create tailored strategies.",
    icon: Brain
  },
  {
    title: "Human Expertise",
    description: "We combine AI power with human creativity and industry expertise for optimal results.",
    icon: Users
  },
  {
    title: "Data Privacy First",
    description: "Your data security is our priority with strict compliance and privacy measures.",
    icon: Shield
  },
  {
    title: "Measurable Results",
    description: "Clear metrics and transparent reporting so you can see the real impact.",
    icon: BarChart2
  }
];

const AboutSection = () => {
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
    <section id="about" className="py-20 md:py-32 overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 reveal">
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-gray-100 to-blue-100 p-1 shadow-lg overflow-hidden">
                <div className="bg-white rounded-xl overflow-hidden">
                  <div className="aspect-w-3 aspect-h-4 relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Team working on AI marketing solutions"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -right-5 top-10 bg-white rounded-lg p-4 shadow-lg animate-float">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-50 rounded-full p-2">
                    <Cpu className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">AI Marketing</p>
                    <p className="text-xs text-gray-500">Next generation</p>
                  </div>
                </div>
              </div>
              
              {/* Stats floating element */}
              <div className="absolute -left-5 bottom-10 bg-white rounded-lg p-4 shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Success</p>
                    <p className="text-lg font-bold text-blue-600">98%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">ROI</p>
                    <p className="text-lg font-bold text-blue-600">+187%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7">
            <div className="space-y-6 max-w-2xl">
              <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 reveal">
                <BadgeCheck className="h-4 w-4 mr-1" />
                Why Choose Us
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold leading-tight reveal">
                Where Technology Meets <span className="text-gradient">Marketing Excellence</span>
              </h2>
              
              <p className="text-lg text-gray-600 reveal">
                We're not just another marketing agency. We're a team of AI specialists, data scientists, and creative marketers who leverage cutting-edge technology to deliver exceptional results.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
                    <div className="flex-shrink-0 bg-blue-50 rounded-lg w-10 h-10 flex items-center justify-center mr-4">
                      <feature.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-6 reveal">
                <Link to="/about">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-6 py-6 text-base shadow-md transition-all">
                    Discover Our AI-Driven Approach
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
