
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Brain, LineChart, MailOpen, MessageSquare, Search, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Service data with detailed information
const serviceDetails = {
  "ai-seo": {
    title: "AI-Powered SEO",
    icon: Search,
    description: "Our AI-powered SEO service leverages cutting-edge machine learning algorithms to analyze search patterns in real-time, helping your content rank higher on search engines.",
    benefits: [
      "Real-time keyword analysis and optimization",
      "Predictive search trend forecasting",
      "Automated content gap identification",
      "Semantic search understanding",
      "Competitor strategy analysis"
    ],
    process: [
      "Initial website and content audit",
      "AI analysis of search patterns and trends",
      "Customized SEO strategy development",
      "Implementation of optimizations",
      "Continuous monitoring and refinement"
    ],
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caseStudy: {
      client: "TechNova Solutions",
      challenge: "Low organic traffic and poor search visibility despite quality content",
      solution: "Implemented AI-powered keyword analysis and content optimization",
      result: "187% increase in organic traffic and 43% improvement in keyword rankings within 3 months"
    }
  },
  "predictive-analytics": {
    title: "Predictive Analytics",
    icon: LineChart,
    description: "Our predictive analytics service uses sophisticated AI models to forecast market trends and customer behavior, giving you a competitive edge in your industry.",
    benefits: [
      "Accurate market trend forecasting",
      "Customer behavior prediction",
      "Product demand analysis",
      "Risk assessment and mitigation",
      "Strategic decision support"
    ],
    process: [
      "Data collection and preparation",
      "AI model training with your historical data",
      "Pattern identification and trend analysis",
      "Predictive model development",
      "Actionable insights delivery"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caseStudy: {
      client: "Global Retail Chain",
      challenge: "Inability to predict seasonal demand fluctuations leading to inventory issues",
      solution: "Deployed AI predictive models analyzing years of sales data and market trends",
      result: "Reduced inventory costs by 27% and improved product availability by 35%"
    }
  },
  "conversion-optimization": {
    title: "Conversion Optimization",
    icon: TrendingUp,
    description: "Our AI-driven conversion optimization service analyzes user behavior to automatically identify and implement changes that increase your conversion rates.",
    benefits: [
      "Personalized user experience",
      "Behavior-based funnel optimization",
      "Automated A/B testing",
      "Conversion bottleneck identification",
      "Real-time optimization recommendations"
    ],
    process: [
      "Comprehensive conversion audit",
      "User behavior analysis using AI",
      "Conversion path mapping",
      "Implementation of optimizations",
      "Continuous testing and refinement"
    ],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caseStudy: {
      client: "E-commerce Platform",
      challenge: "High cart abandonment rate and low checkout completion",
      solution: "Implemented AI-driven user experience optimizations based on behavior analysis",
      result: "63% decrease in cart abandonment and 47% increase in conversion rate"
    }
  },
  "smart-content": {
    title: "Smart Content Generation",
    icon: Brain,
    description: "Our smart content generation service creates engaging, SEO-optimized content at scale using advanced AI models that understand your brand voice and audience preferences.",
    benefits: [
      "Brand-consistent content at scale",
      "SEO-optimized for maximum visibility",
      "Audience-targeted messaging",
      "Multilingual content capabilities",
      "Diverse content formats"
    ],
    process: [
      "Brand voice analysis and content audit",
      "AI training on your successful content",
      "Content strategy development",
      "Automated content generation and refinement",
      "Performance tracking and optimization"
    ],
    image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caseStudy: {
      client: "Industry News Publication",
      challenge: "Struggled to produce enough quality content to keep audience engaged",
      solution: "Implemented AI content generation system with editorial oversight",
      result: "Increased content output by 400% while maintaining high engagement and reducing costs by 35%"
    }
  },
  "email-campaigns": {
    title: "Automated Email Campaigns",
    icon: MailOpen,
    description: "Our automated email marketing service creates personalized email campaigns that adapt based on recipient engagement and behavior, maximizing open rates and conversions.",
    benefits: [
      "Hyper-personalized email content",
      "Behavior-triggered campaign sequences",
      "Optimal send time prediction",
      "Subject line optimization",
      "Continuous performance improvement"
    ],
    process: [
      "Audience segmentation and analysis",
      "AI-driven content personalization",
      "Campaign sequence development",
      "Automated deployment and monitoring",
      "Performance analysis and refinement"
    ],
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caseStudy: {
      client: "SaaS Provider",
      challenge: "Low email engagement and conversion rates despite large subscriber base",
      solution: "Implemented AI-personalized email campaigns with behavior-based sequencing",
      result: "245% increase in open rates, 189% increase in click-through rates, and 97% increase in conversions"
    }
  },
  "social-media": {
    title: "Social Media Intelligence",
    icon: MessageSquare,
    description: "Our social media intelligence service provides AI-driven analysis of trends and engagement patterns across all your social channels, helping you optimize your social media strategy.",
    benefits: [
      "Cross-platform trend analysis",
      "Engagement pattern recognition",
      "Content performance prediction",
      "Audience sentiment analysis",
      "Competitive intelligence"
    ],
    process: [
      "Social media account integration and audit",
      "Historical performance analysis",
      "AI trend identification and forecasting",
      "Strategy development and content planning",
      "Continuous monitoring and optimization"
    ],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caseStudy: {
      client: "Consumer Brand",
      challenge: "Inconsistent social media performance and inability to identify successful content patterns",
      solution: "Deployed AI social media analysis across all platforms with content optimization",
      result: "156% increase in engagement, 78% improvement in content performance, and 3x growth in social conversions"
    }
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const serviceData = serviceId ? serviceDetails[serviceId as keyof typeof serviceDetails] : null;
  
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
            
            <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-6 py-6 text-base shadow-lg transition-all">
              Request a Consultation
            </Button>
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
          <h3 className="text-2xl font-semibold mb-4">Ready to transform your marketing with AI?</h3>
          <p className="text-lg text-gray-700 mb-6">
            Get in touch with our team today for a free consultation and discover how {serviceData.title} can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-6 py-6 text-base shadow-lg transition-all">
              Request a Demo
            </Button>
            <Button variant="outline" className="border-gray-300 rounded-full px-6 py-6 text-base transition-all hover-card-animation">
              Learn About Pricing
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
