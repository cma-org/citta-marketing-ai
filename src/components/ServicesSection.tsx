
import React, { useEffect } from 'react';
import { BadgeCheck, Brain, ChartBar, LineChart, LineChartIcon, MailOpen, MessageSquare, MousePointer, Search, TrendingUp, Zap } from 'lucide-react';

const services = [
  {
    title: "AI-Powered SEO",
    description: "Optimize your content with machine learning algorithms that analyze search patterns in real-time.",
    icon: Search,
    delay: "0.1s"
  },
  {
    title: "Predictive Analytics",
    description: "Forecast market trends and customer behavior to stay ahead of your competition.",
    icon: LineChart,
    delay: "0.2s"
  },
  {
    title: "Conversion Optimization",
    description: "Use AI to analyze user behavior and automatically optimize for higher conversion rates.",
    icon: TrendingUp,
    delay: "0.3s"
  },
  {
    title: "Smart Content Generation",
    description: "Create engaging, SEO-optimized content at scale with our AI content engine.",
    icon: Brain,
    delay: "0.4s"
  },
  {
    title: "Automated Email Campaigns",
    description: "Personalized email marketing that adapts based on recipient engagement and behavior.",
    icon: MailOpen,
    delay: "0.5s"
  },
  {
    title: "Social Media Intelligence",
    description: "AI-driven analysis of trends and engagement patterns across all your social channels.",
    icon: MessageSquare,
    delay: "0.6s"
  }
];

const ServicesSection = () => {
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
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 reveal">
          <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 mb-4">
            <Zap className="h-4 w-4 mr-1" />
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            AI-Powered Solutions for Modern Marketing
          </h2>
          <p className="text-gray-600 text-lg">
            We leverage artificial intelligence to transform how businesses connect with their audiences, providing measurable results through innovative strategies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-panel rounded-xl p-6 hover-card-animation reveal"
              style={{ transitionDelay: service.delay }}
            >
              <div className="bg-blue-50 rounded-lg w-12 h-12 flex items-center justify-center mb-5">
                <service.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <div className="mt-5 flex items-center text-blue-600 font-medium">
                <span className="text-sm">Learn more</span>
                <MousePointer className="h-4 w-4 ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
