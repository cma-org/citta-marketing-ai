import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from './ui/button';

const FounderSection = () => {
  return (
    <section id="founder" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Meet the <span className="text-gradient">Founder</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Driven by passion, guided by expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center reveal stagger-1">
          {/* Founder Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl"></div>
              <div className="relative glass-panel rounded-2xl p-2">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop"
                  alt="Founder portrait"
                  className="w-full h-auto rounded-xl object-cover aspect-square"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Founder Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-2">John Doe</h3>
              <p className="text-xl text-primary font-medium mb-4">Founder & CEO</p>
            </div>

            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                With over 15 years of experience in the industry, I founded this company with a 
                simple mission: to deliver exceptional services that make a real difference.
              </p>
              <p>
                My journey began with a passion for innovation and a commitment to excellence. 
                Today, I'm proud to lead a team of talented professionals who share the same values 
                and dedication to our clients' success.
              </p>
              <p>
                We believe in building lasting relationships, not just delivering projects. 
                Every client is a partner, and every challenge is an opportunity to innovate.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Button variant="outline" size="icon" asChild>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Twitter profile"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a 
                  href="mailto:founder@example.com"
                  aria-label="Email founder"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
