import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from './ui/button';

const FounderSection = () => {
  return (
    <section id="founder" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Meet the <span className="text-gradient">Founders</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Driven by passion, guided by expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 reveal stagger-1">
          {/* Founder 1 */}
          <div className="glass-panel rounded-2xl p-6 lg:p-8 space-y-6">
            {/* Founder Image */}
            <div className="flex justify-center">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl"></div>
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
                    alt="Co-Founder portrait"
                    className="w-48 h-48 rounded-xl object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Founder Info */}
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-1">John Doe</h3>
                <p className="text-lg text-primary font-medium">Co-Founder & CEO</p>
              </div>

              <p className="text-muted-foreground text-center">
                With over 15 years of experience in the industry, I co-founded this company with a 
                simple mission: to deliver exceptional services that make a real difference.
              </p>

              {/* Social Links */}
              <div className="flex gap-3 justify-center">
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
                    href="mailto:john@example.com"
                    aria-label="Email founder"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-xs text-muted-foreground">Years Exp.</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-xs text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Founder 2 */}
          <div className="glass-panel rounded-2xl p-6 lg:p-8 space-y-6">
            {/* Founder Image */}
            <div className="flex justify-center">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl"></div>
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
                    alt="Co-Founder portrait"
                    className="w-48 h-48 rounded-xl object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Founder Info */}
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-1">Jane Smith</h3>
                <p className="text-lg text-primary font-medium">Co-Founder & CTO</p>
              </div>

              <p className="text-muted-foreground text-center">
                Bringing 12 years of technical expertise and innovation, I'm passionate about 
                creating cutting-edge solutions that drive business growth and customer satisfaction.
              </p>

              {/* Social Links */}
              <div className="flex gap-3 justify-center">
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
                    href="mailto:jane@example.com"
                    aria-label="Email founder"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">12+</div>
                  <div className="text-xs text-muted-foreground">Years Exp.</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">400+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">99%</div>
                  <div className="text-xs text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
