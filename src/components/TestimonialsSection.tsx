
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Users } from 'lucide-react';

const testimonials = [{
  quote: "CittaAI's AI-powered content strategy completely transformed our digital presence. We've seen a 4x growth in engagement since partnering with them.",
  author: "Priya Reddy",
  position: "CMO at TechVeda Solutions",
  logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
}, {
  quote: "Their predictive analytics helped us identify untapped market segments in Hyderabad that we would have otherwise missed. A true game-changer for our business.",
  author: "Vikram Sharma",
  position: "Director of Growth at HydStartups",
  logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
}, {
  quote: "The personalized AI marketing campaigns created by CittaAI doubled our conversion rates in just two months. Their expertise in the Hyderabad market is unmatched.",
  author: "Ananya Desai",
  position: "Head of Digital at GreenTech Innovations",
  logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
}];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex(prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1
    });
    
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));
    
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  // Auto-advance the testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-blue-100 via-blue-50 to-white overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 mb-4">
            <Users className="h-4 w-4 mr-1" />
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Are Saying</h2>
          <p className="text-gray-600 text-lg">
            Discover how our AI-powered marketing solutions have transformed businesses across Hyderabad.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto reveal">
          <div className="glass-panel rounded-2xl p-8 md:p-12 bg-gradient-to-r from-white via-blue-50 to-white shadow-xl">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`transition-all duration-500 ease-smooth ${index === activeIndex ? 'opacity-100 translate-x-0' : 'opacity-0 absolute top-0 left-0 translate-x-8'}`} 
                style={{
                  display: index === activeIndex ? 'block' : 'none'
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <div className="flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400 animate-pulse-subtle" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex flex-col items-center">
                    <div className="text-center">
                      <p className="font-semibold text-lg">{testimonial.author}</p>
                      <p className="text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              onClick={prevTestimonial} 
              variant="outline" 
              size="icon" 
              className="rounded-full h-12 w-12 border border-gray-300 hover-card-animation bg-white/80 backdrop-blur-sm"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button 
              onClick={nextTestimonial} 
              variant="outline" 
              size="icon" 
              className="rounded-full h-12 w-12 border border-gray-300 hover-card-animation bg-white/80 backdrop-blur-sm"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Indicator dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setActiveIndex(index)} 
                className={`w-2 h-2 rounded-full transition-all ${index === activeIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'}`} 
                aria-label={`Go to testimonial ${index + 1}`} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
