import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Instagram, Target, Bot, Users, Smartphone, Code, FileText, ChartBar, TrendingUp, Globe, Mail } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import AuditRequestForm from '@/components/AuditRequestForm';

// Service data with detailed information
const serviceDetails = {
  "branding-strategy": {
    title: "AI-Powered Branding and Strategy",
    icon: TrendingUp,
    description: "Our AI-powered branding and strategy service uses advanced algorithms to analyze market trends, consumer behavior, and competitive landscapes to create a distinctive brand identity and marketing strategy tailored to your specific goals.",
    benefits: [
      "Data-driven brand positioning based on market analysis",
      "AI-generated brand voice and visual identity recommendations",
      "Competitive analysis using natural language processing",
      "Customer persona development using behavioral data",
      "Strategic roadmap creation with predictive analytics"
    ],
    process: [
      "Comprehensive market and brand analysis using AI tools",
      "Data collection and pattern identification across industries",
      "Strategy development using predictive modeling",
      "Brand identity creation with AI creative assistance",
      "Implementation and continuous optimization"
    ],
    image: "https://images.unsplash.com/photo-1606765962248-7ff407b51667?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caseStudy: {
      client: "E-commerce Startup",
      challenge: "Needed to establish a distinctive brand in a crowded market with limited resources",
      solution: "Implemented AI-driven market analysis and brand strategy development",
      result: "Achieved 240% increase in brand recognition and 72% improvement in customer engagement within 6 months"
    }
  },
  "social-media-management": {
    title: "AI-Powered Social Media Management",
    icon: Instagram,
    description: "Our AI-driven social media management service uses advanced algorithms to create, schedule, and optimize content across all your social platforms, ensuring maximum engagement and ROI while saving you valuable time.",
    benefits: [
      "AI-generated content ideas based on trending topics",
      "Optimal posting schedule determined by algorithm",
      "Automated content creation with brand voice consistency",
      "Real-time engagement monitoring and response suggestions",
      "Comprehensive analytics and performance optimization"
    ],
    process: [
      "Social account audit and historical performance analysis",
      "AI-driven content strategy development",
      "Automated content creation and scheduling",
      "Engagement monitoring and response management",
      "Continuous optimization based on performance data"
    ],
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caseStudy: {
      client: "Retail Brand Chain",
      challenge: "Inconsistent social media presence and low engagement across multiple platforms",
      solution: "Implemented AI-powered content creation and optimization strategy",
      result: "185% increase in engagement, 210% growth in followers, and 75% improvement in conversion rate from social channels"
    }
  },
  "ppc-advertising": {
    title: "AI-Optimized PPC Advertising",
    icon: Target,
    description: "Our AI-powered PPC advertising service optimizes your Google and Meta ad campaigns in real-time, analyzing thousands of data points to maximize your return on ad spend and drive qualified leads to your business.",
    benefits: [
      "Automated bid management and optimization",
      "AI-driven audience targeting and segmentation",
      "Dynamic ad creation and testing",
      "Predictive performance modeling",
      "Cross-platform campaign coordination"
    ],
    process: [
      "Comprehensive account audit and competitive analysis",
      "AI-based keyword research and selection",
      "Campaign structure development and implementation",
      "Automated bid management and budget allocation",
      "Continuous testing and optimization"
    ],
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caseStudy: {
      client: "SaaS Company",
      challenge: "High cost per acquisition and low conversion rates from PPC campaigns",
      solution: "Implemented AI-driven campaign optimization and audience targeting",
      result: "63% reduction in cost per acquisition, 87% increase in qualified leads, and 45% improvement in ROI"
    }
  },
  "business-automation": {
    title: "AI-Powered Business Automation",
    icon: Bot,
    description: "Our business automation service uses artificial intelligence to identify, streamline, and automate repetitive tasks and workflows in your marketing operations, freeing up your team to focus on strategic initiatives.",
    benefits: [
      "Custom workflow automation for marketing processes",
      "AI-powered customer journey mapping and optimization",
      "Automated lead nurturing and qualification",
      "Intelligent data collection and analysis",
      "Cross-platform integration and synchronization"
    ],
    process: [
      "Business process audit and opportunity identification",
      "Workflow mapping and optimization planning",
      "Custom automation solution development",
      "Integration with existing systems and platforms",
      "Deployment, testing, and continuous improvement"
    ],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caseStudy: {
      client: "Professional Services Firm",
      challenge: "Manual, time-consuming marketing processes limiting team productivity",
      solution: "Implemented comprehensive workflow automation using AI systems",
      result: "71% reduction in time spent on routine tasks, 43% increase in lead processing capacity, and 35% improvement in conversion rates"
    }
  },
  "seo-services": {
    title: "AI-Powered SEO Services",
    icon: Globe,
    description: "Our AI-powered SEO service combines on-page and off-page optimization strategies, using machine learning to analyze search patterns, competitor strategies, and content performance to improve your organic visibility.",
    benefits: [
      "AI-driven keyword research and content gap analysis",
      "Automated technical SEO audits and fixes",
      "Content optimization using natural language processing",
      "Predictive ranking analysis and opportunity identification",
      "Comprehensive backlink strategy development"
    ],
    process: [
      "Comprehensive website and content audit",
      "Keyword research and competitive analysis using AI",
      "On-page optimization implementation",
      "Technical SEO improvements",
      "Off-page strategy development and execution"
    ],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caseStudy: {
      client: "Educational Platform",
      challenge: "Low organic traffic and poor search visibility despite quality content",
      solution: "Implemented comprehensive AI-driven SEO strategy focusing on both on-page and off-page factors",
      result: "214% increase in organic traffic, 156% improvement in keyword rankings, and 87% growth in organic conversions"
    }
  },
  "email-marketing": {
    title: "AI-Powered Email Marketing",
    icon: Mail,
    description: "Our AI-driven email marketing service creates highly personalized campaigns that adapt based on recipient behavior, optimizing everything from subject lines to send times for maximum open rates and conversions.",
    benefits: [
      "AI-generated subject line optimization",
      "Personalized content based on user behavior",
      "Automated segmentation and targeting",
      "Send time optimization for each recipient",
      "Predictive campaign performance analysis"
    ],
    process: [
      "Audience analysis and segmentation",
      "Campaign strategy development",
      "AI-driven content creation and personalization",
      "Automated deployment and testing",
      "Performance analysis and continuous optimization"
    ],
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caseStudy: {
      client: "Online Retailer",
      challenge: "Low email engagement rates and poor conversion performance",
      solution: "Implemented AI-powered personalization and optimization strategy",
      result: "189% increase in open rates, 157% improvement in click-through rates, and 94% growth in email-driven revenue"
    }
  },
  "influencer-marketing": {
    title: "AI-Powered Influencer Marketing",
    icon: Users,
    description: "Our AI-driven influencer marketing service uses advanced algorithms to identify, evaluate, and connect you with the perfect influencers for your brand, ensuring authentic partnerships that drive real results.",
    benefits: [
      "AI-powered influencer discovery and matching",
      "Audience alignment and authenticity verification",
      "Performance prediction and ROI forecasting",
      "Automated campaign management and tracking",
      "Comprehensive performance analytics"
    ],
    process: [
      "Brand goals and audience analysis",
      "AI-driven influencer identification and vetting",
      "Strategy development and influencer outreach",
      "Campaign management and content coordination",
      "Performance tracking and optimization"
    ],
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caseStudy: {
      client: "Beauty Brand",
      challenge: "Difficulty finding authentic influencers who resonated with their target audience",
      solution: "Used AI matching algorithms to identify and vet ideal influencer partners",
      result: "167% increase in campaign engagement, 132% improvement in conversion rates, and 45% reduction in influencer marketing costs"
    }
  },
  "whatsapp-marketing": {
    title: "AI-Powered WhatsApp Marketing",
    icon: Smartphone,
    description: "Our WhatsApp marketing service leverages AI to create personalized messaging campaigns that engage your audience on their preferred messaging platform, with automated responses and intelligent conversation flows.",
    benefits: [
      "AI-driven customer segmentation and targeting",
      "Automated chatbot responses and conversation flows",
      "Personalized messaging based on user behavior",
      "Campaign scheduling and optimization",
      "Comprehensive analytics and performance tracking"
    ],
    process: [
      "Audience analysis and segmentation",
      "Campaign strategy development",
      "Chatbot development and integration",
      "Content creation and personalization",
      "Deployment, monitoring, and optimization"
    ],
    image: "https://images.unsplash.com/photo-1559307429-4eb0be9c63cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caseStudy: {
      client: "Service Provider",
      challenge: "Needed to engage customers on their preferred platform with limited staff resources",
      solution: "Implemented AI-powered WhatsApp marketing strategy with automated responses",
      result: "73% increase in customer engagement, 94% improvement in response time, and 52% growth in conversions"
    }
  },
  "website-development": {
    title: "AI-Enhanced Website Development",
    icon: Code,
    description: "Our website development service uses AI to create custom, high-performance websites optimized for conversions, with intelligent features that adapt to user behavior and preferences in real-time.",
    benefits: [
      "AI-driven design recommendations for optimal UX",
      "Personalized user experiences based on behavior",
      "Conversion path optimization using predictive analytics",
      "Automated content suggestions and optimization",
      "Intelligent performance monitoring and enhancement"
    ],
    process: [
      "Requirements analysis and planning",
      "AI-assisted design creation and refinement",
      "Development and feature implementation",
      "Testing and optimization",
      "Deployment and ongoing performance monitoring"
    ],
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caseStudy: {
      client: "Fintech Startup",
      challenge: "Needed a high-conversion website that could adapt to different user segments",
      solution: "Created an AI-enhanced website with personalized user journeys",
      result: "127% increase in conversion rate, 63% improvement in average session duration, and 85% positive feedback from user testing"
    }
  },
  "content-creation": {
    title: "AI-Powered Content Creation",
    icon: FileText,
    description: "Our AI content creation service generates high-quality text and video content customized to your brand voice, optimized for search engines, and tailored to engage your specific audience segments.",
    benefits: [
      "AI-generated content ideas based on trending topics",
      "SEO-optimized content creation at scale",
      "Brand voice consistency across all content",
      "Multilingual content capabilities",
      "Automated content performance analysis"
    ],
    process: [
      "Brand voice analysis and content audit",
      "Content strategy development",
      "AI-assisted content creation and optimization",
      "Publishing and distribution",
      "Performance monitoring and refinement"
    ],
    image: "https://images.unsplash.com/photo-1591522810850-58128c5fb089?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caseStudy: {
      client: "B2B Software Company",
      challenge: "Struggled to produce enough quality content to support marketing efforts",
      solution: "Implemented AI-powered content creation system with editorial oversight",
      result: "350% increase in content output, 75% improvement in engagement metrics, and 62% growth in organic traffic"
    }
  },
  "lead-generation": {
    title: "AI-Powered Lead Generation",
    icon: ChartBar,
    description: "Our AI lead generation service uses predictive analytics and machine learning to identify, attract, and qualify the highest-potential prospects for your business, ensuring your sales team focuses on the most valuable opportunities.",
    benefits: [
      "AI-driven ideal customer profile development",
      "Predictive lead scoring and qualification",
      "Automated lead nurturing and engagement",
      "Intelligent cross-channel lead capture",
      "Comprehensive lead analytics and insights"
    ],
    process: [
      "Customer data analysis and segmentation",
      "Lead generation strategy development",
      "Campaign implementation across channels",
      "Lead capturing and qualification automation",
      "Performance monitoring and optimization"
    ],
    image: "https://images.unsplash.com/photo-1494176417869-e4b438a3b8bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caseStudy: {
      client: "Manufacturing Company",
      challenge: "High volume of leads but low conversion rate due to poor qualification",
      solution: "Implemented AI-powered lead scoring and nurturing system",
      result: "67% improvement in qualified lead rate, 54% reduction in cost per acquisition, and 128% increase in conversion rate"
    }
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const serviceData = serviceId ? serviceDetails[serviceId as keyof typeof serviceDetails] : null;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
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
  }, [serviceId]);
  
  if (!serviceData) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
        <p className="mb-8">Sorry, the service you're looking for doesn't exist.</p>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    );
  }

  const IconComponent = serviceData.icon;

  return (
    <div className="pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/#services" className="inline-flex items-center text-blue-600 mb-8 group reveal">
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to all services</span>
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="reveal">
            <div className="bg-blue-50 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
              <IconComponent className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold mb-6">{serviceData.title}</h1>
            <p className="text-lg text-gray-700 mb-8">{serviceData.description}</p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {serviceData.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="citta" className="rounded-full px-6 py-6 text-base shadow-lg transition-all">
                  Request a Consultation
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center mb-2">Request Your Free Consultation</DialogTitle>
                </DialogHeader>
                <AuditRequestForm />
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="reveal">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src={serviceData.image} 
                alt={serviceData.title} 
                className="w-full h-64 object-cover" 
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="reveal">
            <h3 className="text-2xl font-semibold mb-6">Our Process</h3>
            <div className="space-y-6">
              {serviceData.process.map((step, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <p className="text-lg">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="reveal">
            <h3 className="text-2xl font-semibold mb-6">Case Study</h3>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-semibold mb-3">Client: {serviceData.caseStudy.client}</h4>
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-500 mb-1">The Challenge</p>
                <p>{serviceData.caseStudy.challenge}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-500 mb-1">Our Solution</p>
                <p>{serviceData.caseStudy.solution}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">The Results</p>
                <p className="font-medium text-green-600">{serviceData.caseStudy.result}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-xl p-8 text-center max-w-3xl mx-auto reveal">
          <h3 className="text-2xl font-semibold mb-4">Ready to transform your marketing with CITTA MARKETING AGENCY?</h3>
          <p className="text-lg text-gray-700 mb-6">
            Get in touch with our team today for a free consultation and discover how {serviceData.title} can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="citta" className="rounded-full px-6 py-6 text-base shadow-lg transition-all">
                  Request a Demo
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center mb-2">Request a Free Demo</DialogTitle>
                </DialogHeader>
                <AuditRequestForm />
              </DialogContent>
            </Dialog>
            <Link to="/#contact">
              <Button variant="outline" className="border-gray-300 rounded-full px-6 py-6 text-base transition-all hover-card-animation">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
