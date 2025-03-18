
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
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const services = [
  {
    id: "branding-strategy",
    title: "Branding and Strategy",
    description: "Develop a distinctive brand identity and comprehensive marketing strategy powered by AI insights.",
    icon: TrendingUp,
    delay: "0.1s",
    bgColor: "from-blue-50 to-indigo-50"
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    description: "AI-driven social media content creation, scheduling, and analytics to maximize engagement.",
    icon: Instagram,
    delay: "0.2s",
    bgColor: "from-pink-50 to-purple-50"
  },
  {
    id: "ppc-advertising",
    title: "PPC Advertisement",
    description: "Data-driven Meta and Google Ads campaigns optimized by AI for maximum ROI.",
    icon: Target,
    delay: "0.3s",
    bgColor: "from-green-50 to-emerald-50"
  },
  {
    id: "business-automation",
    title: "Business Automation",
    description: "Streamline operations and marketing workflows with intelligent AI automation solutions.",
    icon: Bot,
    delay: "0.4s",
    bgColor: "from-sky-50 to-blue-50"
  },
  {
    id: "seo-services",
    title: "SEO Services",
    description: "Comprehensive on-page and off-page SEO strategies powered by AI analysis and optimization.",
    icon: Globe,
    delay: "0.5s",
    bgColor: "from-amber-50 to-yellow-50"
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    description: "AI-driven email campaigns with personalized content, smart segmentation and automated workflows.",
    icon: Mail,
    delay: "0.6s",
    bgColor: "from-red-50 to-orange-50"
  },
  {
    id: "influencer-marketing",
    title: "Influencer Marketing",
    description: "Identify and collaborate with the perfect influencers for your brand using AI matching algorithms.",
    icon: Users,
    delay: "0.7s",
    bgColor: "from-violet-50 to-purple-50"
  },
  {
    id: "whatsapp-marketing",
    title: "WhatsApp Marketing",
    description: "Create personalized WhatsApp campaigns with AI-powered customer segmentation and messaging.",
    icon: Smartphone,
    delay: "0.8s",
    bgColor: "from-green-50 to-teal-50"
  },
  {
    id: "website-development",
    title: "Website Development",
    description: "Custom, responsive websites built with AI assistance for optimal user experience and conversions.",
    icon: Code,
    delay: "0.9s",
    bgColor: "from-cyan-50 to-blue-50"
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description: "AI-generated text and video content customized to your brand voice and marketing objectives.",
    icon: FileText,
    delay: "1.0s",
    bgColor: "from-neutral-50 to-gray-50"
  },
  {
    id: "lead-generation",
    title: "Lead Generation",
    description: "Identify and capture high-quality leads using AI predictive analytics and targeting.",
    icon: ChartBar,
    delay: "1.1s",
    bgColor: "from-indigo-50 to-purple-50"
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

  // Group services for carousel
  const servicesGroups = [
    services.slice(0, 6), // First 6 services
    services.slice(6)     // Remaining services
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-indigo-50 overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 mb-4">
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
        
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`glass-panel rounded-xl p-6 shadow-md transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br ${service.bgColor} reveal`}
                style={{ transitionDelay: service.delay }}
              >
                <div className="bg-white rounded-lg w-14 h-14 flex items-center justify-center mb-5 shadow-sm">
                  <service.icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to={`/services/${service.id}`} className="flex items-center text-blue-600 font-medium group">
                  <span className="text-sm">Learn more</span>
                  <MousePointer className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div 
                    className={`glass-panel rounded-xl p-6 shadow-md h-full transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br ${service.bgColor} reveal`}
                    style={{ transitionDelay: service.delay }}
                  >
                    <div className="bg-white rounded-lg w-14 h-14 flex items-center justify-center mb-5 shadow-sm">
                      <service.icon className="h-7 w-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link to={`/services/${service.id}`} className="flex items-center text-blue-600 font-medium group">
                      <span className="text-sm">Learn more</span>
                      <MousePointer className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="relative left-0 mr-2" />
              <CarouselNext className="relative right-0 ml-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
