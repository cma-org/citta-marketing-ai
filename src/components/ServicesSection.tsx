
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BadgeCheck, 
  Brain, 
  ChartBar, 
  LineChart, 
  MailOpen, 
  MessageSquare, 
  MousePointer, 
  Search, 
  TrendingUp, 
  Zap,
  Instagram,
  Target,
  Bot,
  Users,
  Smartphone,
  Code,
  FileText,
  Video,
  Globe,
  Mail
} from 'lucide-react';

const services = [
  {
    id: "branding-strategy",
    title: "Branding and Strategy",
    description: "Develop a distinctive brand identity and comprehensive marketing strategy powered by AI insights.",
    icon: TrendingUp,
    delay: "0.1s"
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    description: "AI-driven social media content creation, scheduling, and analytics to maximize engagement.",
    icon: Instagram,
    delay: "0.2s"
  },
  {
    id: "ppc-advertising",
    title: "PPC Advertisement",
    description: "Data-driven Meta and Google Ads campaigns optimized by AI for maximum ROI.",
    icon: Target,
    delay: "0.3s"
  },
  {
    id: "business-automation",
    title: "Business Automation",
    description: "Streamline operations and marketing workflows with intelligent AI automation solutions.",
    icon: Bot,
    delay: "0.4s"
  },
  {
    id: "seo-services",
    title: "SEO Services",
    description: "Comprehensive on-page and off-page SEO strategies powered by AI analysis and optimization.",
    icon: Globe,
    delay: "0.5s"
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    description: "AI-driven email campaigns with personalized content, smart segmentation and automated workflows.",
    icon: Mail,
    delay: "0.6s"
  },
  {
    id: "influencer-marketing",
    title: "Influencer Marketing",
    description: "Identify and collaborate with the perfect influencers for your brand using AI matching algorithms.",
    icon: Users,
    delay: "0.7s"
  },
  {
    id: "whatsapp-marketing",
    title: "WhatsApp Marketing",
    description: "Create personalized WhatsApp campaigns with AI-powered customer segmentation and messaging.",
    icon: Smartphone,
    delay: "0.8s"
  },
  {
    id: "website-development",
    title: "Website Development",
    description: "Custom, responsive websites built with AI assistance for optimal user experience and conversions.",
    icon: Code,
    delay: "0.9s"
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description: "AI-generated text and video content customized to your brand voice and marketing objectives.",
    icon: FileText,
    delay: "1.0s"
  },
  {
    id: "lead-generation",
    title: "Lead Generation",
    description: "Identify and capture high-quality leads using AI predictive analytics and targeting.",
    icon: ChartBar,
    delay: "1.1s"
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
            AI-Powered Marketing Solutions
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
              <Link to={`/services/${service.id}`} className="mt-5 flex items-center text-blue-600 font-medium group">
                <span className="text-sm">Learn more</span>
                <MousePointer className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
