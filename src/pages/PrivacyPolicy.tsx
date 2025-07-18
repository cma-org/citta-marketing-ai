
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white rounded-lg shadow-sm border p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 18, 2025</p>
            
            <div className="prose prose-gray max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
                <p className="text-foreground/90 mb-4">
                  Citta Marketing Agency ("we," "our," or "us") operates the website cittamarketingagency.in. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you visit our website or use our digital marketing services.
                </p>
                <p className="text-foreground/90">
                  By using our website, you consent to the data practices described in this statement. 
                  We are committed to protecting your privacy in accordance with applicable Indian data protection laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
                
                <h3 className="text-xl font-medium text-foreground mb-3">Personal Information</h3>
                <p className="text-foreground/90 mb-4">We may collect personal information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 mb-4 text-foreground/90">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Company name and business details</li>
                  <li>Information submitted through contact forms</li>
                  <li>Communication preferences</li>
                  <li>Project requirements and specifications</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3">Automatically Collected Information</h3>
                <ul className="list-disc pl-6 mb-4 text-foreground/90">
                  <li>IP address and browser information</li>
                  <li>Device and operating system details</li>
                  <li>Website usage data through Google Analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Pages visited and time spent on our website</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="text-foreground/90 mb-4">We use the collected information for the following purposes:</p>
                <ul className="list-disc pl-6 mb-4 text-foreground/90">
                  <li>Providing and improving our digital marketing services</li>
                  <li>Responding to inquiries and customer support requests</li>
                  <li>Sending marketing communications (with your consent)</li>
                  <li>Analyzing website performance and user behavior</li>
                  <li>Complying with legal obligations</li>
                  <li>Preventing fraud and ensuring website security</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-foreground/90 mb-4">We may share your information in the following circumstances:</p>
                <ul className="list-disc pl-6 mb-4 text-foreground/90">
                  <li><strong>Service Providers:</strong> With third-party vendors who assist in our operations</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                  <li><strong>Consent:</strong> When you have given explicit consent to share information</li>
                </ul>
                <p className="text-foreground/90">We do not sell, trade, or rent your personal information to third parties for marketing purposes.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Storage and Security</h2>
                <p className="text-foreground/90 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. Your data is stored on secure 
                  servers and may be processed both within and outside India.
                </p>
                <p className="text-foreground/90">
                  We retain your personal information only for as long as necessary to fulfill the purposes 
                  outlined in this Privacy Policy or as required by applicable law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights Under Indian Law</h2>
                <p className="text-foreground/90 mb-4">Under applicable Indian data protection laws, you have the following rights:</p>
                <ul className="list-disc pl-6 mb-4 text-foreground/90">
                  <li><strong>Access:</strong> Request information about your personal data we process</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate personal data</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                  <li><strong>Portability:</strong> Request transfer of your data in a structured format</li>
                  <li><strong>Withdrawal:</strong> Withdraw consent for data processing</li>
                  <li><strong>Objection:</strong> Object to processing of your personal data</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Google Analytics</h2>
                <p className="text-foreground/90 mb-4">
                  We use Google Analytics to analyze website traffic and usage patterns. Google Analytics 
                  collects information anonymously and reports website trends without identifying individual visitors. 
                  You can opt out of Google Analytics by installing the Google Analytics opt-out browser add-on.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Changes to This Privacy Policy</h2>
                <p className="text-foreground/90">
                  We may update this Privacy Policy from time to time. We will notify you of any changes 
                  by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Information</h2>
                <p className="text-foreground/90 mb-4">
                  If you have any questions about this Privacy Policy or wish to exercise your rights, 
                  please contact us at:
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

export default PrivacyPolicy;
