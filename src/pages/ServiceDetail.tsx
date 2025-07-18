import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import { Instagram, Target, Bot, Users, Smartphone, Code, FileText, ChartBar, TrendingUp, Globe, Mail } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useToast } from '@/components/ui/use-toast';

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

const successStories = {
  "branding-strategy": [
    {
      clientName: "TechVision Corp",
      industry: "Technology",
      challenge: "Entering a saturated market with unclear brand positioning",
      solution: "AI-driven brand identity strategy with market penetration plan",
      results: "178% growth in brand recognition within 3 months",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      clientName: "Health Plus",
      industry: "Healthcare",
      challenge: "Traditional brand struggling to connect with younger demographics",
      solution: "Complete brand refresh with AI-optimized messaging",
      results: "214% increase in engagement from target demographic",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ],
  "social-media-management": [
    {
      clientName: "FashionForward",
      industry: "Retail",
      challenge: "Low engagement rates across multiple social platforms",
      solution: "AI-powered content strategy with platform-specific optimization",
      results: "312% increase in engagement and 127% growth in followers",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      clientName: "Foodie Delights",
      industry: "Food & Beverage",
      challenge: "Inconsistent brand voice and content strategy",
      solution: "Unified AI content calendar with scheduled posts",
      results: "245% growth in profile visits and 89% increase in website traffic",
      image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ],
  "ppc-advertising": [
    {
      clientName: "PropertyPro",
      industry: "Real Estate",
      challenge: "High cost per acquisition with minimal qualified leads",
      solution: "AI-optimized ad targeting with dynamic budget allocation",
      results: "68% reduction in CPA and 147% increase in qualified leads",
      image: "https://images.unsplash.com/photo-1556742031-c6961e8560f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      clientName: "EduLearn",
      industry: "Education",
      challenge: "Low conversion rates from ad campaigns",
      solution: "AI-driven audience segmentation with personalized ad content",
      results: "192% improvement in conversion rate and 43% lower ad spend",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ],
  "business-automation": [
    {
      clientName: "LogisticsPro",
      industry: "Supply Chain",
      challenge: "Manual processes consuming team resources",
      solution: "End-to-end workflow automation with AI optimization",
      results: "76% reduction in manual tasks and 34% increase in efficiency",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      clientName: "FinancePlus",
      industry: "Financial Services",
      challenge: "Time-consuming customer onboarding process",
      solution: "Automated customer journey with AI verification",
      results: "89% faster onboarding and 47% higher completion rate",
      image: "https://images.unsplash.com/photo-1589666564459-93cdd3ab856e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ],
  "seo-services": [
    {
      clientName: "HealthWellness",
      industry: "Healthcare",
      challenge: "Poor search visibility despite quality content",
      solution: "Technical SEO overhaul with AI content optimization",
      results: "246% increase in organic traffic and 183% improvement in conversions",
      image: "https://images.unsplash.com/photo-1572573980696-3cdbdd9f4609?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      clientName: "Travel Explorer",
      industry: "Travel",
      challenge: "Unable to compete with larger sites for key terms",
      solution: "AI-driven long-tail keyword strategy with content gap analysis",
      results: "312% growth in search traffic and 64% higher booking rate",
      image: "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ],
  "email-marketing": [
    {
      clientName: "RetailGiant",
      industry: "E-commerce",
      challenge: "Low open rates and poor campaign performance",
      solution: "AI personalization with send-time optimization",
      results: "217% higher open rates and 136% increase in click-through rates",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      clientName: "MembershipClub",
      industry: "Fitness",
      challenge: "High unsubscribe rates and low engagement",
      solution: "Behavioral segmentation with AI content personalization",
      results: "91% reduction in unsubscribes and 167% improvement in retention",
      image: "https://images.unsplash.com/photo-1616469829941-afb3a03c7133?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ],
  "influencer-marketing": [
    {
      clientName: "BeautyBrand",
      industry: "Cosmetics",
      challenge: "Working with misaligned influencers with poor ROI",
      solution: "AI-powered influencer matching and performance prediction",
      results: "215% increase in campaign ROI and 178% higher engagement",
      image: "https://images.unsplash.com/photo-1590510311830-76b7c327c5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      clientName: "GadgetTech",
      industry: "Consumer Electronics",
      challenge: "Limited budget for influencer partnerships",
      solution: "Micro-influencer strategy with AI audience analysis",
      results: "346% more efficient spend and 127% better conversion rates",
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ],
  "whatsapp-marketing": [
    {
      clientName: "LocalService",
      industry: "Home Services",
      challenge: "Low customer response rates to traditional outreach",
      solution: "Personalized WhatsApp campaign with AI-driven timing",
      results: "289% higher engagement and 94% faster response times",
      image: "https://images.unsplash.com/photo-1544535830-9df3f56801d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      clientName: "FastFood",
      industry: "Restaurant",
      challenge: "Ineffective promotional campaigns",
      solution: "WhatsApp automation with location-based offers",
      results: "167% increase in promotion redemption and 53% higher repeat orders",
      image: "https://images.unsplash.com/photo-1610438250910-01ca3c46836d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ],
  "website-development": [
    {
      clientName: "InvestGroup",
      industry: "Financial Services",
      challenge: "Outdated website with poor conversion rates",
      solution: "AI-optimized UX design with personalized user journeys",
      results: "178% increase in lead generation and 63% lower bounce rate",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      clientName: "MedicalCenter",
      industry: "Healthcare",
      challenge: "Complex appointment booking system confusing users",
      solution: "Streamlined UI with AI-powered appointment recommendations",
      results: "214% increase in online bookings and 76% reduction in booking time",
      image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ],
  "content-creation": [
    {
      clientName: "LegalFirm",
      industry: "Legal Services",
      challenge: "Technical content difficult for clients to understand",
      solution: "AI-assisted content simplification with enhanced readability",
      results: "189% increase in content engagement and 73% higher conversion rate",
      image: "https://images.unsplash.com/photo-1516383274235-5f42d5c0927b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      clientName: "TechBlog",
      industry: "Technology Media",
      challenge: "Inability to produce enough quality content",
      solution: "AI content generation with editorial refinement",
      results: "276% increase in content production and 128% growth in readership",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ],
  "lead-generation": [
    {
      clientName: "B2BSolutions",
      industry: "Industrial",
      challenge: "High volume of unqualified leads draining resources",
      solution: "AI-powered lead scoring and qualification",
      results: "163% improvement in lead quality and 41% higher close rate",
      image: "https://images.unsplash.com/photo-1580328881293-257e3f55d0dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      clientName: "InsurancePro",
      industry: "Insurance",
      challenge: "High customer acquisition costs",
      solution: "Predictive analytics for targeted lead generation",
      results: "237% increase in qualified leads and 52% reduction in acquisition cost",
      image: "https://images.unsplash.com/photo-1556742031-c6961e8560f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]
};

const aiApproachData = {
  "branding-strategy": {
    title: "AI-Powered Branding Insights",
    description: "Our proprietary AI analysis delivers deeper market understanding and brand positioning opportunities.",
    metrics: [
      { label: "Faster Market Analysis", value: "12x" },
      { label: "Competitive Insights", value: "86%" },
      { label: "Brand Consistency", value: "94%" },
      { label: "Conversion Improvement", value: "67%" }
    ]
  },
  "social-media-management": {
    title: "Social AI Performance",
    description: "Our AI algorithms optimize your social presence across platforms for maximum engagement.",
    metrics: [
      { label: "Posting Efficiency", value: "8x" },
      { label: "Engagement Increase", value: "143%" },
      { label: "Content Relevance", value: "91%" },
      { label: "Audience Growth", value: "76%" }
    ]
  },
  "ppc-advertising": {
    title: "AI Ad Optimization",
    description: "Machine learning continuously refines your campaigns for optimal performance and ROI.",
    metrics: [
      { label: "CPC Reduction", value: "42%" },
      { label: "Conversion Increase", value: "87%" },
      { label: "Wasted Spend Decrease", value: "63%" },
      { label: "ROAS Improvement", value: "119%" }
    ]
  },
  "business-automation": {
    title: "Workflow Intelligence",
    description: "AI automation transforms manual processes into streamlined, error-free workflows.",
    metrics: [
      { label: "Time Savings", value: "72%" },
      { label: "Error Reduction", value: "94%" },
      { label: "Staff Productivity", value: "58%" },
      { label: "Cost Reduction", value: "37%" }
    ]
  },
  "seo-services": {
    title: "Search Intelligence",
    description: "Our AI analyzes search patterns to identify opportunities others miss.",
    metrics: [
      { label: "Ranking Improvement", value: "132%" },
      { label: "Traffic Increase", value: "187%" },
      { label: "Conversion Growth", value: "76%" },
      { label: "Competitive Edge", value: "83%" }
    ]
  },
  "email-marketing": {
    title: "Email AI Performance",
    description: "Smart algorithms personalize every aspect of your email campaigns for peak performance.",
    metrics: [
      { label: "Open Rate Increase", value: "112%" },
      { label: "Click Rate Growth", value: "87%" },
      { label: "Conversion Boost", value: "63%" },
      { label: "List Health Improvement", value: "47%" }
    ]
  },
  "influencer-marketing": {
    title: "Influencer AI Matching",
    description: "Our algorithms identify the perfect influencer partnerships for authentic engagement.",
    metrics: [
      { label: "Match Accuracy", value: "91%" },
      { label: "Engagement Increase", value: "156%" },
      { label: "ROI Improvement", value: "78%" },
      { label: "Time-to-Launch", value: "5x faster" }
    ]
  },
  "whatsapp-marketing": {
    title: "Messaging Intelligence",
    description: "AI-powered WhatsApp marketing delivers personalized conversations at scale.",
    metrics: [
      { label: "Response Rate Increase", value: "187%" },
      { label: "Conversation Completion", value: "83%" },
      { label: "Conversion Growth", value: "62%" },
      { label: "Customer Satisfaction", value: "94%" }
    ]
  },
  "website-development": {
    title: "Web Intelligence",
    description: "AI-enhanced websites that adapt to visitor behavior for optimal conversion.",
    metrics: [
      { label: "Conversion Rate Boost", value: "97%" },
      { label: "Bounce Rate Reduction", value: "58%" },
      { label: "Page Load Speed", value: "3.2x" },
      { label: "User Satisfaction", value: "92%" }
    ]
  },
  "content-creation": {
    title: "Content AI Insights",
    description: "Our AI creates and optimizes content that resonates with your specific audience.",
    metrics: [
      { label: "Production Speed", value: "15x" },
      { label: "Engagement Increase", value: "127%" },
      { label: "SEO Performance", value: "86%" },
      { label: "Content Consistency", value: "98%" }
    ]
  },
  "lead-generation": {
    title: "Lead Intelligence",
    description: "AI algorithms identify and prioritize your highest-value prospects.",
    metrics: [
      { label: "Lead Quality", value: "146%" },
      { label: "Conversion Rate", value: "78%" },
      { label: "Cost Reduction", value: "52%" },
      { label: "Sales Cycle", value: "36% shorter" }
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const serviceData = serviceId ? serviceDetails[serviceId as keyof typeof serviceDetails] : null;
  const successData = serviceId ? successStories[serviceId as keyof typeof successStories] : [];
  const aiApproach = serviceId ? aiApproachData[serviceId as keyof typeof aiApproachData] : null;
  const { toast } = useToast();
  const [showApproach, setShowApproach] = useState(false);
  
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
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
          <p className="mb-8">Sorry, the service you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </>
    );
  }

  const IconComponent = serviceData.icon;
  
  const handleConsultationRequest = () => {
    toast({
      title: "Consultation Request Received!",
      description: "Our team will contact you within 24 hours to schedule your consultation.",
      className: "glass-panel border-blue-100"
    });
  };

  const handleDemoRequest = () => {
    toast({
      title: "Demo Request Received!",
      description: "We'll reach out shortly to arrange a personalized demo for you.",
      className: "glass-panel border-blue-100"
    });
  };

  return (
    <>
      <Navbar />
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
            
            <Button 
              className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-6 py-6 text-base shadow-lg transition-all"
              onClick={handleConsultationRequest}
            >
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
        
        <div className="mb-16 reveal">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold">Client Success Stories</h2>
            <Link to="/showcase" className="text-blue-600 font-medium hover:underline">
              View all case studies
            </Link>
          </div>
          
          <Carousel className="w-full">
            <CarouselContent>
              {successData.map((story, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="rounded-xl overflow-hidden shadow-md bg-white h-full">
                    <div className="h-44 overflow-hidden">
                      <img 
                        src={story.image} 
                        alt={story.clientName} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-4">
                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                          {story.industry}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{story.clientName}</h3>
                      <p className="text-sm text-gray-500 mb-4">{story.challenge}</p>
                      <div className="flex items-center text-green-600 font-semibold mb-4">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        <span>{story.results}</span>
                      </div>
                      {/* <Button variant="outline" className="w-full mt-2 border-gray-200">
                        Read Full Case Study
                      </Button> */}
                    </div>
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
        
        <div className="mb-16 reveal">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-4">{aiApproach?.title}</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">{aiApproach?.description}</p>
              
              <Button 
                className="mt-6 bg-white text-blue-600 hover:bg-blue-50 border border-blue-200 rounded-full px-6 py-2 text-base shadow-sm transition-all"
                onClick={() => setShowApproach(!showApproach)}
              >
                {showApproach ? "Hide Details" : "Discover Our AI-Driven Approach"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            {showApproach && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {aiApproach?.metrics.map((metric, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-sm text-gray-500 mb-2">{metric.label}</p>
                    <p className="text-3xl font-bold text-blue-600">{metric.value}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-xl p-8 text-center max-w-3xl mx-auto reveal">
          <h3 className="text-2xl font-semibold mb-4">Ready to transform your marketing with AI?</h3>
          <p className="text-lg text-gray-700 mb-6">
            Get in touch with our team today for a free consultation and discover how {serviceData.title} can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-6 py-6 text-base shadow-lg transition-all"
              onClick={handleDemoRequest}
            >
              Request a Demo
            </Button>
            <Link to="/#contact">
              <Button variant="outline" className="border-gray-300 rounded-full px-6 py-6 text-base transition-all hover-card-animation">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ServiceDetail;
