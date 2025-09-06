import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Clawn AI', href: '#clawn-ai' },
  { name: 'Agriculture', href: '#agriculture' },
  { name: 'Cloud', href: '#cloud' },
  { name: 'Cybersecurity', href: '#cybersecurity' },
  { name: 'Vision & Mission', href: '#vision' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src="/attached_assets/jpeg_1757144655001.jpeg" 
            alt="ClawnCore Logo" 
            className="w-12 h-12 md:w-14 md:h-14 object-contain"
            style={{ background: 'transparent' }}
            onError={(e) => {
              // Fallback to gradient logo if image fails to load
              (e.currentTarget as HTMLImageElement).style.display = 'none';
              ((e.currentTarget.nextElementSibling as HTMLElement)).style.display = 'flex';
            }}
          />
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center" style={{ display: 'none' }}>
            <div className="w-5 h-5 bg-white rounded-full opacity-90" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            ClawnCore
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium hover:text-purple-600 transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden" data-testid="button-mobile-menu">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-sm font-medium hover:text-purple-600 transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
