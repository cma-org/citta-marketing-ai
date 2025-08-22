import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, CheckCircle, Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    content: 'info@cittaai.com',
    href: 'mailto:info@cittaai.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+91 9392655040',
    href: 'tel:+919392655040'
  },
  {
    icon: MapPin,
    title: 'Office',
    content: '3rd floor, Kanakadurga mansion, KPHB 5th phase, Hyderabad',
    href: 'https://www.google.com/search?q=CITTA+MARKETING+AGENCY&stick=H4sIAAAAAAAA_-NgU1I1qDBOSk6yNDQzM0w0NEpLMkyxMqgwMTM3NzUwS7EwNbFMSU1NXcQq5uwZEuKo4OsY5O0a4unnruDo7urnHAkAXAEPikIAAAA&hl=en&mat=CW3xXgtQNAiPElYBmzl_pVpQvmsuF_y5YYtEpXKpxsbJMFldiZ83c2LXe_4vym17rI7oBkTUVplfD_a0qR1Q7Eru_3hdUlbZ2134IM8Ul32DCI5y07zVJfNIIcFiRfbwJA&authuser=0'
  }
];

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  // Error and success state management for better UX
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Rate limiting to prevent spam submissions
  const [lastSubmission, setLastSubmission] = useState<number>(0);
  const SUBMISSION_COOLDOWN = 30000; // 30 seconds between submissions

  // Environment variable for Lambda Function URL
  // This should be configured in your deployment environment
  // Example: https://abc123def456.lambda-url.us-east-1.on.aws/
  const API_ENDPOINT = import.meta.env.VITE_LAMBDA_FUNCTION_URL || 'https://your-lambda-function-url.lambda-url.region.on.aws/';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear any previous error messages when user starts typing
    // This provides immediate feedback and improves user experience
    if (submitError) {
      setSubmitError(null);
    }

    // Clear success state if user starts editing after successful submission
    if (submitSuccess) {
      setSubmitSuccess(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Rate limiting check to prevent spam submissions
    // Users must wait 30 seconds between form submissions
    const now = Date.now();
    if (now - lastSubmission < SUBMISSION_COOLDOWN) {
      const waitTime = Math.ceil((SUBMISSION_COOLDOWN - (now - lastSubmission)) / 1000);
      toast({
        title: "Please wait",
        description: `Please wait ${waitTime} seconds before submitting again.`,
        className: "glass-panel border-yellow-100"
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Client-side validation before sending to server
      // This reduces unnecessary API calls and provides immediate feedback
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        throw new Error('Please fill in all required fields');
      }

      // Email validation using regex pattern
      // Ensures the email format is valid before sending to backend
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Message length validation to prevent extremely long messages
      if (formData.message.trim().length < 10) {
        throw new Error('Please provide a more detailed message (at least 10 characters)');
      }

      if (formData.message.trim().length > 2000) {
        throw new Error('Message is too long. Please keep it under 2000 characters');
      }

      // Prepare payload for AWS Lambda function
      // The Lambda function expects this specific structure for SES integration
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim() || 'Not provided', // Optional field with fallback
        message: formData.message.trim(),
        timestamp: new Date().toISOString(), // For tracking and logging purposes
        source: 'website_contact_form', // To identify the source in SES emails
        userAgent: navigator.userAgent, // For analytics and spam detection
        referrer: document.referrer || 'direct' // Track where the user came from
      };

      // Make API call to AWS Lambda Function URL
      // This triggers the Lambda function that processes the form and sends email via SES
      console.log('Sending contact form submission to:', API_ENDPOINT);

      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional security headers if needed
          'X-Requested-With': 'XMLHttpRequest'
        },
        body: JSON.stringify(payload)
      });

      // Parse response from Lambda function
      // The Lambda function should return JSON with success status and message
      const result = await response.json();

      if (!response.ok) {
        // Handle different types of HTTP errors from the backend
        // This provides specific error messages based on the response status
        let errorMessage = 'An error occurred while sending your message';

        switch (response.status) {
          case 400:
            errorMessage = result.message || 'Invalid form data. Please check your inputs.';
            break;
          case 429:
            errorMessage = 'Too many requests. Please try again later.';
            break;
          case 500:
            errorMessage = 'Server error. Our team has been notified.';
            break;
          default:
            errorMessage = result.message || `Server error: ${response.status}`;
        }

        throw new Error(errorMessage);
      }

      // Success: Update rate limiting timestamp and show success message
      setLastSubmission(now);
      setSubmitSuccess(true);

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours. Thank you for contacting us!",
        className: "glass-panel border-green-100"
      });

      // Reset form data after successful submission
      // This provides a clean slate for potential follow-up messages
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });

      // Log successful submission for analytics
      console.log('Contact form submitted successfully:', result);

    } catch (error) {
      // Comprehensive error handling for different failure scenarios
      console.error('Contact form submission error:', error);

      // Extract user-friendly error message
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      setSubmitError(errorMessage);

      // Show user-friendly error toast notification
      toast({
        title: "Message Failed to Send",
        description: errorMessage + ". Please try again or contact us directly at team@influenceai.in",
        className: "glass-panel border-red-100",
        variant: "destructive"
      });

      // Log error details for debugging (in production, this would go to monitoring service)
      console.error('Detailed error information:', {
        error: errorMessage,
        timestamp: new Date().toISOString(),
        formData: { ...formData, message: '[REDACTED]' }, // Don't log sensitive message content
        apiEndpoint: API_ENDPOINT
      });

    } finally {
      // Always reset loading state regardless of success or failure
      // This ensures the form doesn't get stuck in a loading state
      setIsSubmitting(false);
    }
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

  return (
    <section id="contact" className="py-20 md:py-32 overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-lg reveal">
            <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 mb-4">
              <Mail className="h-4 w-4 mr-1" />
              Get in Touch
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your <span className="text-gradient">Digital Marketing</span>?
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how our AI-powered solutions can help your business reach its full potential. Fill out the form and one of our specialists will get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className="flex items-start hover-card-animation p-4 rounded-lg hover:bg-blue-50/50 transition-colors"
                  target={method.icon === MapPin ? "_blank" : undefined}
                  rel={method.icon === MapPin ? "noopener noreferrer" : undefined}
                >
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <method.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">{method.title}</h3>
                    <p className="text-gray-600">{method.content}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="reveal">
            <div className="glass-panel rounded-2xl p-8 shadow-lg">
              {submitError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 text-sm font-medium">{submitError}</p>
                </div>
              )}

              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-700 text-sm font-medium">
                    Your message has been sent successfully! We'll respond within 24 hours.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg"
                    disabled={isSubmitting}
                    maxLength={100} // Prevent extremely long names
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg"
                    disabled={isSubmitting}
                    maxLength={254} // RFC 5321 email length limit
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Enter your company name (optional)"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-lg"
                    disabled={isSubmitting}
                    maxLength={100} // Reasonable company name length
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                    <span className="text-xs text-gray-500 ml-2">
                      ({formData.message.length}/2000 characters)
                    </span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project and goals... (Minimum 10 characters)"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-lg resize-none"
                    disabled={isSubmitting}
                    maxLength={2000} // Prevent extremely long messages
                    minLength={10} // Ensure meaningful messages
                  />
                </div>

                <Button
                  type="submit"
                  className={`w-full bg-blue-600 text-white hover:bg-blue-700 rounded-lg py-6 transition-all ${isSubmitting ? 'opacity-90 cursor-not-allowed' : ''
                    }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Send Message <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
