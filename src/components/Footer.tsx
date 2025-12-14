import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold">AS</span>
              </div>
              <span className="font-semibold text-xl">Aastha Srivastava</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Associate Product Designer focused on building intuitive, scalable products for fintech, SaaS, and marketplace startups.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/case-studies" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                Case Studies
              </Link>
              <Link to="/ai-recruiter" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                AI Recruiter View
              </Link>
              <Link to="/resume" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                Resume
              </Link>
              <Link to="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                About Me
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:aasthasrivastav627@gmail.com" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                <Mail className="w-4 h-4" />
                aasthasrivastav627@gmail.com
              </a>
              <a href="tel:+919151596421" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                <Phone className="w-4 h-4" />
                +91 9151596421
              </a>
              <div className="flex items-center gap-4 mt-2">
                <a href="https://github.com/Aastha-a216" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/aastha-srivastava-b85314219/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © 2024 Aastha Srivastava. Designed & built with purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
