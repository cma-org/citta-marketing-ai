
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Users } from 'lucide-react';

const testimonials = [
  {
    quote: "The AI-powered insights transformed our marketing approach completely. We've seen a 3x ROI since partnering with SynapseAI.",
    author: "Sarah Johnson",
    position: "CMO at TechVision",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
  },
  {
    quote: "Their predictive analytics helped us identify market opportunities we would have otherwise missed. Truly game-changing for our business.",
    author: "Michael Chen",
    position: "Director of Growth at StartupHub",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
  },
  {
    quote: "The personalized AI marketing campaigns doubled our conversion rates in just three months. The team's expertise is unmatched.",
    author: "Emma Williams",
    position: "VP Marketing at NexGen",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
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

  // Auto-advance the testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 mb-4">
            <Users className="h-4 w-4 mr-1" />
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Clients Are Saying
          </h2>
          <p className="text-gray-600 text-lg">
            Discover how our AI-powered marketing solutions have transformed businesses across industries.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto reveal">
          <div className="glass-panel rounded-2xl p-8 md:p-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ease-smooth ${
                  index === activeIndex
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 absolute top-0 left-0 translate-x-8'
                }`}
                style={{ display: index === activeIndex ? 'block' : 'none' }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <div className="flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex flex-col items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full object-cover mb-4"
                    />
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
          <div className="flex justify-center mt-10 space-x-4">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full h-12 w-12 border border-gray-300 hover-card-animation"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full h-12 w-12 border border-gray-300 hover-card-animation"
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
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? 'bg-blue-600 w-6'
                    : 'bg-gray-300'
                }`}
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
