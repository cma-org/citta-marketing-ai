
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ArrowRight, BarChart2, Bot, TrendingUp, Users, Clock, Target, Award } from 'lucide-react';
import AuditRequestForm from './AuditRequestForm';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Updated high-quality AI-powered marketing images with reliable sources
const heroImages = [
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90", // Tech visualization
  "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90", // Digital circuit
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90", // Programming screen
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90"  // Person using laptop
];

// Campaign results data
const campaignResults = [
  {
    clientType: "E-commerce",
    metric: "Revenue Growth",
    result: "+42%",
    period: "6 months",
    icon: TrendingUp
  },
  {
    clientType: "SaaS Company",
    metric: "Lead Generation",
    result: "+135%",
    period: "3 months",
    icon: Users
  },
  {
    clientType: "Local Business",
    metric: "Customer Acquisition",
    result: "-28% Cost",
    period: "12 months",
    icon: Target
  },
  {
    clientType: "B2B Enterprise",
    metric: "Conversion Rate",
    result: "+83%",
    period: "9 months",
    icon: Award
  },
  {
    clientType: "Startup",
    metric: "Marketing ROI",
    result: "+215%",
    period: "6 months",
    icon: BarChart2
  }
];

const HeroSection = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeCarousel, setActiveCarousel] = useState('images');

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

  // Auto-switch between carousels
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCarousel(prev => prev === 'images' ? 'results' : 'images');
    }, 8000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden bg-gradient-to-r from-blue-50 via-white to-blue-100">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <div className="space-y-6 max-w-2xl">
              <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 reveal">
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
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-6 py-6 text-base shadow-lg transition-all animate-pulse-subtle">
                      Get a Free Audit <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-center mb-2">Request Your Free Marketing Audit</DialogTitle>
                    </DialogHeader>
                    <AuditRequestForm />
                  </DialogContent>
                </Dialog>
                <Link to="/showcase">
                  <Button variant="outline" className="border-gray-300 rounded-full px-6 py-6 text-base transition-all hover-card-animation">
                    Showcase Our Work
                  </Button>
                </Link>
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
              <div className="rounded-2xl bg-gradient-to-br from-blue-200 to-sky-200 p-2 shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
                <div className="rounded-xl overflow-hidden glass-panel shadow-inner">
                  {activeCarousel === 'images' ? (
                    <Carousel className="w-full" opts={{ loop: true }}>
                      <CarouselContent>
                        {heroImages.map((image, index) => (
                          <CarouselItem key={index}>
                            <AspectRatio ratio={16/10} className="overflow-hidden">
                              <img
                                src={image}
                                alt={`AI-powered marketing ${index + 1}`}
                                className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                                <div className="p-6 text-white text-left">
                                  <p className="text-base md:text-lg font-semibold tracking-wide">
                                    {index === 0 ? "Advanced Tech Solutions" : 
                                     index === 1 ? "Integrated Digital Systems" : 
                                     index === 2 ? "AI-Powered Code Optimization" : 
                                     "Smart Marketing Analytics"}
                                  </p>
                                </div>
                              </div>
                            </AspectRatio>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <div className="absolute inset-0 flex items-center justify-between p-2 z-10">
                        <CarouselPrevious className="h-10 w-10 left-3 bg-white/80 backdrop-blur-sm hover:bg-white shadow-md border-0" />
                        <CarouselNext className="h-10 w-10 right-3 bg-white/80 backdrop-blur-sm hover:bg-white shadow-md border-0" />
                      </div>
                    </Carousel>
                  ) : (
                    <Carousel className="w-full" opts={{ loop: true }}>
                      <CarouselContent>
                        {campaignResults.map((result, index) => (
                          <CarouselItem key={index}>
                            <AspectRatio ratio={16/10} className="overflow-hidden">
                              <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                                <div className="text-white text-center p-8 space-y-3 max-w-md">
                                  <div className="mx-auto bg-white/20 p-4 rounded-full backdrop-blur-sm w-20 h-20 flex items-center justify-center mb-4">
                                    {React.createElement(result.icon, { className: "h-10 w-10" })}
                                  </div>
                                  <h3 className="text-sm md:text-base font-medium uppercase tracking-wider">{result.clientType}</h3>
                                  <h2 className="text-2xl md:text-3xl font-bold">{result.metric}</h2>
                                  <p className="text-4xl md:text-5xl font-extrabold text-white">{result.result}</p>
                                  <p className="text-blue-100 font-medium">in {result.period}</p>
                                </div>
                              </div>
                            </AspectRatio>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <div className="absolute inset-0 flex items-center justify-between p-2 z-10">
                        <CarouselPrevious className="h-10 w-10 left-3 bg-white/80 backdrop-blur-sm hover:bg-white shadow-md border-0" />
                        <CarouselNext className="h-10 w-10 right-3 bg-white/80 backdrop-blur-sm hover:bg-white shadow-md border-0" />
                      </div>
                    </Carousel>
                  )}
                  
                  {/* Carousel switcher */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                    <button 
                      className={`w-3 h-3 rounded-full transition-all ${activeCarousel === 'images' ? 'bg-white scale-125' : 'bg-white/50'}`}
                      onClick={() => setActiveCarousel('images')}
                      aria-label="Show Images"
                    />
                    <button 
                      className={`w-3 h-3 rounded-full transition-all ${activeCarousel === 'results' ? 'bg-white scale-125' : 'bg-white/50'}`}
                      onClick={() => setActiveCarousel('results')}
                      aria-label="Show Results"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating UI elements */}
              {activeCarousel === 'images' && (
                <>
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
                </>
              )}
              
              {/* Background decorative elements */}
              <div className="absolute -z-10 top-1/2 -right-12 w-24 h-24 rounded-full bg-blue-200/80 blur-2xl"></div>
              <div className="absolute -z-10 bottom-1/3 -left-8 w-20 h-20 rounded-full bg-sky-200/80 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
