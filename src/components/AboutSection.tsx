
import React, { useEffect } from 'react';
import { BadgeCheck, BarChart2, Brain, Cpu, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const aboutImages = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
];

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
    <section id="about" className="py-16 md:py-24 overflow-hidden bg-gradient-to-r from-indigo-50 via-white to-blue-50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 reveal">
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-indigo-200 to-blue-200 p-2 shadow-lg overflow-hidden">
                <div className="bg-white rounded-xl overflow-hidden">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {aboutImages.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="aspect-w-4 aspect-h-5 relative overflow-hidden">
                            <img
                              src={image}
                              alt={`Team working on AI marketing solutions ${index + 1}`}
                              className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10" />
                    <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10" />
                  </Carousel>
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
              <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 reveal">
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
                  <div key={index} className="flex items-start reveal hover:bg-blue-50/50 p-3 rounded-lg transition-all" style={{ transitionDelay: `${index * 0.1}s` }}>
                    <div className="flex-shrink-0 bg-blue-100 rounded-lg w-12 h-12 flex items-center justify-center mr-4">
                      <feature.icon className="h-6 w-6 text-blue-600" />
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
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-6 py-6 text-base shadow-md transition-all animate-pulse-subtle">
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
