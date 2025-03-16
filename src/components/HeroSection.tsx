
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart2, Bot, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

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
    <section className="pt-28 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <div className="space-y-6 max-w-2xl">
              <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 reveal">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                Revolutionizing Digital Marketing
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight reveal">
                <span className="block">AI-Powered Marketing</span>
                <span className="block text-gradient">For the Digital Age</span>
              </h1>
              
              <p className="text-lg text-gray-600 reveal">
                We blend artificial intelligence with human creativity to deliver marketing campaigns that convert. Experience data-driven strategies tailored to your brand's unique needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2 reveal">
                <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-6 py-6 text-base shadow-lg transition-all">
                  Get a Free Audit <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-gray-300 rounded-full px-6 py-6 text-base transition-all hover-card-animation">
                  View Our Work
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-6 reveal">
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm font-medium">Increased ROI</span>
                </div>
                <div className="flex items-center">
                  <BarChart2 className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm font-medium">Data-Driven</span>
                </div>
                <div className="flex items-center">
                  <Bot className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm font-medium">AI Optimized</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-5 reveal">
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-blue-100 to-sky-100 p-1 shadow-lg overflow-hidden">
                <div className="rounded-xl overflow-hidden glass-panel">
                  <div className="aspect-w-5 aspect-h-4 relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="AI-powered marketing dashboard"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Floating UI elements */}
                    <div className="absolute top-1/4 -right-8 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-float">
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-xs font-medium">Conversion +28%</span>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-1/4 -left-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                      <div className="flex items-center">
                        <BarChart2 className="h-4 w-4 text-blue-500 mr-2" />
                        <span className="text-xs font-medium">Engagement +65%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background decorative elements */}
              <div className="absolute -z-10 top-1/2 -right-12 w-24 h-24 rounded-full bg-blue-200/50 blur-2xl"></div>
              <div className="absolute -z-10 bottom-1/3 -left-8 w-20 h-20 rounded-full bg-sky-200/50 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
