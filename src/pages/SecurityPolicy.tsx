
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SecurityPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white rounded-lg shadow-sm border p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Security Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 18, 2025</p>
            
            <div className="prose prose-gray max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Our Commitment to Security</h2>
                <p className="text-foreground/90 mb-4">
                  At Citta Marketing Agency, we take the security of your data seriously. We have implemented 
                  comprehensive security measures to protect your personal information, business data, and 
                  digital marketing assets from unauthorized access, disclosure, alteration, or destruction.
                </p>
                <p className="text-foreground/90">
                  This Security Policy outlines the measures we have in place to ensure the confidentiality, 
                  integrity, and availability of your information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Data Protection Measures</h2>
                
                <h3 className="text-xl font-medium text-foreground mb-3">Encryption</h3>
                <ul className="list-disc pl-6 mb-4 text-foreground/90">
                  <li>All data transmission is protected using SSL/TLS encryption</li>
                  <li>Sensitive data is encrypted both in transit and at rest</li>
                  <li>We use industry-standard encryption protocols (AES-256)</li>
                  <li>Database encryption for stored client information</li>
                </ul>
                
                <h3 className="text-xl font-medium text-foreground mb-3">Access Controls</h3>
                <ul className="list-disc pl-6 mb-4 text-foreground/90">
                  <li>Multi-factor authentication for all team accounts</li>
                  <li>Role-based access control (RBAC) for internal systems</li>
                  <li>Regular access reviews and permission audits</li>
                  <li>Immediate access revocation for departed team members</li>
                </ul>
                
                <h3 className="text-xl font-medium text-foreground mb-3">Network Security</h3>
                <ul className="list-disc pl-6 mb-4 text-foreground/90">
                  <li>Firewall protection and intrusion detection systems</li>
                  <li>Regular security patches and system updates</li>
                  <li>Secure VPN access for remote work</li>
                  <li>Network segmentation and monitoring</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Physical Security</h2>
                <p className="text-foreground/90 mb-4">Our physical security measures include:</p>
                <ul className="list-disc pl-6 mb-4 text-foreground/90">
                  <li>Secure office facilities with controlled access</li>
                  <li>Locked storage for physical documents and devices</li>
                  <li>Secure disposal of sensitive documents and hardware</li>
                  <li>CCTV monitoring of office premises</li>
                  <li>Clean desk and clear screen policies</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Employee Security Training</h2>
                <p className="text-foreground/90 mb-4">We ensure our team is well-equipped to maintain security through:</p>
                <ul className="list-disc pl-6 mb-4 text-foreground/90">
                  <li>Regular security awareness training sessions</li>
                  <li>Phishing simulation and prevention training</li>
                  <li>Data handling and privacy protection protocols</li>
                  <li>Incident response training and procedures</li>
                  <li>Background checks for all employees</li>
                  <li>Confidentiality agreements and security policies</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Third-Party Security</h2>
                <p className="text-foreground/90 mb-4">
                  We carefully vet all third-party service providers and ensure they meet our security standards:
                </p>
                <ul className="list-disc pl-6 mb-4 text-foreground/90">
                  <li>Due diligence assessments for all vendors</li>
                  <li>Data processing agreements with security requirements</li>
                  <li>Regular security assessments of third-party services</li>
                  <li>Compliance verification for cloud service providers</li>
                  <li>Secure API integrations with authentication</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Incident Response</h2>
                <p className="text-foreground/90 mb-4">
                  In the event of a security incident, we have established procedures to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-foreground/90">
                  <li>Immediately contain and assess the incident</li>
                  <li>Notify affected clients within 24-72 hours</li>
                  <li>Coordinate with law enforcement if necessary</li>
                  <li>Conduct thorough investigation and remediation</li>
                  <li>Implement measures to prevent future incidents</li>
                  <li>Provide regular updates to affected parties</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Data Backup and Recovery</h2>
                <p className="text-foreground/90 mb-4">We maintain robust backup and recovery systems:</p>
                <ul className="list-disc pl-6 mb-4 text-foreground/90">
                  <li>Automated daily backups of all critical data</li>
                  <li>Multiple backup locations for redundancy</li>
                  <li>Regular backup integrity testing</li>
                  <li>Documented disaster recovery procedures</li>
                  <li>Recovery time objectives (RTO) and recovery point objectives (RPO)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Compliance and Certifications</h2>
                <p className="text-foreground/90 mb-4">We adhere to various security standards and regulations:</p>
                <ul className="list-disc pl-6 mb-4 text-foreground/90">
                  <li>Indian Personal Data Protection Act compliance</li>
                  <li>GDPR compliance for international clients</li>
                  <li>ISO 27001 security management principles</li>
                  <li>Regular security audits and assessments</li>
                  <li>Industry-specific compliance requirements</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Client Security Responsibilities</h2>
                <p className="text-foreground/90 mb-4">
                  While we implement comprehensive security measures, we also recommend that our clients:
                </p>
                <ul className="list-disc pl-6 mb-4 text-foreground/90">
                  <li>Use strong, unique passwords for all accounts</li>
                  <li>Enable two-factor authentication where available</li>
                  <li>Keep software and systems updated</li>
                  <li>Be cautious with sharing sensitive information</li>
                  <li>Report any suspicious activities immediately</li>
                  <li>Follow secure communication practices</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Reporting Security Issues</h2>
                <p className="text-foreground/90 mb-4">
                  If you discover a security vulnerability or have security concerns, please contact us immediately:
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-foreground/90"><strong>Security Team</strong></p>
                  <p className="text-foreground/90">Email: team@influenceai.in</p>
                  <p className="text-foreground/90">Phone: +91 8919333347</p>
                  <p className="text-foreground/90">Subject Line: "SECURITY ISSUE - URGENT"</p>
                </div>
                <p className="text-foreground/90 mt-4">
                  We take all security reports seriously and will investigate promptly. We appreciate 
                  responsible disclosure and will acknowledge your contribution to our security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Regular Security Reviews</h2>
                <p className="text-foreground/90">
                  We continuously monitor and improve our security posture through:
                </p>
                <ul className="list-disc pl-6 mb-4 text-foreground/90">
                  <li>Quarterly security assessments</li>
                  <li>Annual penetration testing</li>
                  <li>Regular policy and procedure updates</li>
                  <li>Security metrics monitoring and reporting</li>
                  <li>Threat intelligence monitoring</li>
                  <li>Industry best practice adoption</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">12. Updates to This Policy</h2>
                <p className="text-foreground/90">
                  This Security Policy may be updated periodically to reflect changes in our security 
                  practices, technology, or regulatory requirements. We will notify clients of any 
                  significant changes that may affect their data security.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SecurityPolicy;
