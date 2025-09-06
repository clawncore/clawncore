import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Linkedin, Twitter, Github } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full opacity-90" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                ClawnCore
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering the future with intelligent technology solutions across multiple industries.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors text-sm"
                data-testid="footer-link-linkedin"
              >
                <Linkedin size={14} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors text-sm"
                data-testid="footer-link-twitter"
              >
                <Twitter size={14} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors text-sm"
                data-testid="footer-link-github"
              >
                <Github size={14} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <div className="space-y-2 text-sm">
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('#services'); }} className="block text-muted-foreground hover:text-purple-600 transition-colors">Drone Technology</a>
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('#services'); }} className="block text-muted-foreground hover:text-purple-600 transition-colors">Agriculture Solutions</a>
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('#services'); }} className="block text-muted-foreground hover:text-purple-600 transition-colors">Cloud Computing</a>
              <a href="#clawn-ai" onClick={(e) => { e.preventDefault(); scrollToSection('#clawn-ai'); }} className="block text-muted-foreground hover:text-purple-600 transition-colors">Clawn AI</a>
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('#services'); }} className="block text-muted-foreground hover:text-purple-600 transition-colors">Cybersecurity</a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <div className="space-y-2 text-sm">
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('#about'); }} className="block text-muted-foreground hover:text-purple-600 transition-colors">About Us</a>
              <a href="#vision" onClick={(e) => { e.preventDefault(); scrollToSection('#vision'); }} className="block text-muted-foreground hover:text-purple-600 transition-colors">Vision & Mission</a>
              <a href="#" className="block text-muted-foreground hover:text-purple-600 transition-colors">Careers</a>
              <a href="#" className="block text-muted-foreground hover:text-purple-600 transition-colors">News & Blog</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }} className="block text-muted-foreground hover:text-purple-600 transition-colors">Contact</a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold">Stay Updated</h4>
            <p className="text-muted-foreground text-sm">Subscribe to our newsletter for the latest tech insights.</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-sm"
                data-testid="input-newsletter-email"
              />
              <Button 
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium"
                data-testid="button-newsletter-subscribe"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2025 ClawnCore Multitech Company. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-purple-600 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
