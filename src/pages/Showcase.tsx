
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart2, Bot, Brain, Target, TrendingUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const showcaseItems = [
  {
    title: "AI-Driven Content Generation",
    description: "Creating personalized content at scale for a leading Hyderabad tech company, resulting in 240% increase in engagement.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: Brain,
    clientName: "TechVeda Solutions"
  },
  {
    title: "Predictive Customer Analytics",
    description: "Implementing predictive analytics for an e-commerce platform to optimize customer journeys and increase conversions by 45%.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: BarChart2,
    clientName: "HydStartups"
  },
  {
    title: "Intelligent Chatbot Solutions",
    description: "Developing AI-powered customer service chatbots for a local financial services company, reducing response time by 78%.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: Bot,
    clientName: "GreenTech Innovations"
  },
  {
    title: "AI-Enhanced Social Media Campaigns",
    description: "Creating data-driven social media strategies for a Hyderabad healthcare provider, resulting in 189% increase in patient inquiries.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: Target,
    clientName: "MediCare Hyderabad"
  },
  {
    title: "Automated SEO Optimization",
    description: "Implementing AI-powered SEO tools for a real estate company in Hyderabad, improving organic traffic by 210%.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: TrendingUp,
    clientName: "Hyderabad Homes"
  },
  {
    title: "Performance Marketing Engine",
    description: "Building an AI-driven performance marketing system for a local retail chain, reducing CAC by 35% while increasing ROAS.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: Zap,
    clientName: "ShopSmart Retail"
  }
];

const Showcase = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
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
    <div className="relative overflow-hidden">
      <Navbar />
      
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our AI-Powered <span className="text-gradient">Success Stories</span>
            </h1>
            <p className="text-lg text-gray-600">
              Explore how we've transformed businesses across Hyderabad with cutting-edge AI marketing solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {showcaseItems.map((item, index) => (
              <div 
                key={index} 
                className="glass-panel rounded-2xl overflow-hidden shadow-lg hover-card-animation reveal"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-52">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <item.icon className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                  <p className="text-blue-600 font-medium text-sm mb-4">Client: {item.clientName}</p>
                  
                  <Link to={`/contact`}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center reveal">
            <Link to="/contact">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-8 py-6 text-base shadow-lg">
                Start Your AI Marketing Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Showcase;
