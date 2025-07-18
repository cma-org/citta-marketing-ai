
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white rounded-lg shadow-sm border p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Cookie Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 18, 2025</p>
            
            <div className="prose prose-gray max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. What Are Cookies?</h2>
                <p className="text-foreground/90 mb-4">
                  Cookies are small text files that are stored on your computer or mobile device when you visit 
                  a website. They are widely used to make websites work more efficiently and provide information 
                  to website owners about how users interact with their sites.
                </p>
                <p className="text-foreground/90">
                  Citta Marketing Agency uses cookies to enhance your browsing experience, analyze website 
                  performance, and provide personalized content and advertisements.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Types of Cookies We Use</h2>
                
                <h3 className="text-xl font-medium text-foreground mb-3">Essential Cookies</h3>
                <p className="text-foreground/90 mb-4">
                  These cookies are necessary for the website to function properly. They enable basic functions 
                  like page navigation, form submissions, and access to secure areas. The website cannot function 
                  properly without these cookies.
                </p>
                
                <h3 className="text-xl font-medium text-foreground mb-3">Analytics Cookies</h3>
                <p className="text-foreground/90 mb-4">
                  We use Google Analytics to collect information about how visitors use our website. These cookies 
                  help us understand:
                </p>
                <ul className="list-disc pl-6 mb-4 text-foreground/90">
                  <li>Which pages are visited most often</li>
                  <li>How long users spend on different pages</li>
                  <li>Where users come from (search engines, social media, etc.)</li>
                  <li>User demographics and interests (anonymized)</li>
                  <li>Technical information like browser type and screen resolution</li>
                </ul>
                
                <h3 className="text-xl font-medium text-foreground mb-3">Performance Cookies</h3>
                <p className="text-foreground/90 mb-4">
                  These cookies collect information about how you use our website, such as which pages you 
                  visit and if you encounter any errors. This helps us improve website performance and user experience.
                </p>
                
                <h3 className="text-xl font-medium text-foreground mb-3">Functional Cookies</h3>
                <p className="text-foreground/90 mb-4">
                  These cookies remember your preferences and choices to provide a more personalized experience, 
                  such as language preferences, font size, and other customizable elements.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Third-Party Cookies</h2>
                <p className="text-foreground/90 mb-4">
                  We use several third-party services that may place cookies on your device:
                </p>
                
                <h3 className="text-xl font-medium text-foreground mb-3">Google Analytics</h3>
                <p className="text-foreground/90 mb-4">
                  Google Analytics uses cookies to track and report website traffic. The information generated 
                  by the cookie about your use of the website is transmitted to Google's servers. Google may 
                  also transfer this information to third parties as required by law.
                </p>
                
                <h3 className="text-xl font-medium text-foreground mb-3">Social Media Platforms</h3>
                <p className="text-foreground/90 mb-4">
                  Our website may include social media features (like Facebook, Twitter, Instagram, LinkedIn 
                  sharing buttons) that may set cookies to track your interaction with these features.
                </p>
                
                <h3 className="text-xl font-medium text-foreground mb-3">Advertising Partners</h3>
                <p className="text-foreground/90 mb-4">
                  We may work with advertising partners who use cookies to serve relevant advertisements 
                  based on your browsing behavior and interests.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. How We Use Cookie Information</h2>
                <p className="text-foreground/90 mb-4">The information collected through cookies helps us:</p>
                <ul className="list-disc pl-6 mb-4 text-foreground/90">
                  <li>Remember your preferences and settings</li>
                  <li>Understand how you use our website</li>
                  <li>Improve website functionality and user experience</li>
                  <li>Analyze website traffic and performance</li>
                  <li>Provide relevant content and advertisements</li>
                  <li>Measure the effectiveness of our marketing campaigns</li>
                  <li>Comply with legal and regulatory requirements</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Managing Your Cookie Preferences</h2>
                
                <h3 className="text-xl font-medium text-foreground mb-3">Browser Settings</h3>
                <p className="text-foreground/90 mb-4">
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="list-disc pl-6 mb-4 text-foreground/90">
                  <li>Block all cookies</li>
                  <li>Block third-party cookies only</li>
                  <li>Delete existing cookies</li>
                  <li>Set up notifications when cookies are being sent</li>
                </ul>
                
                <h3 className="text-xl font-medium text-foreground mb-3">Google Analytics Opt-Out</h3>
                <p className="text-foreground/90 mb-4">
                  You can opt out of Google Analytics tracking by installing the 
                  <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer"> Google Analytics opt-out browser add-on</a>.
                </p>
                
                <h3 className="text-xl font-medium text-foreground mb-3">Mobile Devices</h3>
                <p className="text-foreground/90 mb-4">
                  On mobile devices, you can typically manage cookies through your browser settings or 
                  by adjusting your device's privacy settings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Cookie Retention Period</h2>
                <p className="text-foreground/90 mb-4">
                  Different cookies have different retention periods:
                </p>
                <ul className="list-disc pl-6 mb-4 text-foreground/90">
                  <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Remain on your device for a set period (typically 1-2 years)</li>
                  <li><strong>Analytics Cookies:</strong> Usually expire after 2 years</li>
                  <li><strong>Advertising Cookies:</strong> Typically expire after 30 days to 1 year</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Impact of Disabling Cookies</h2>
                <p className="text-foreground/90 mb-4">
                  If you choose to disable cookies, some features of our website may not function properly:
                </p>
                <ul className="list-disc pl-6 mb-4 text-foreground/90">
                  <li>Contact forms may not work correctly</li>
                  <li>Your preferences will not be remembered</li>
                  <li>We cannot provide personalized content</li>
                  <li>Website performance analytics will be affected</li>
                  <li>Some interactive features may not function</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Updates to This Cookie Policy</h2>
                <p className="text-foreground/90">
                  We may update this Cookie Policy from time to time to reflect changes in our practices 
                  or for other operational, legal, or regulatory reasons. We will notify you of any 
                  material changes by posting the updated policy on our website with a new "Last updated" date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
                <p className="text-foreground/90 mb-4">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-foreground/90"><strong>Citta Marketing Agency</strong></p>
                  <p className="text-foreground/90">Email: team@influenceai.in</p>
                  <p className="text-foreground/90">Phone: +91 8919333347</p>
                  <p className="text-foreground/90">Website: cittamarketingagency.in</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
