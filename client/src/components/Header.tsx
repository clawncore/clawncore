import React, { useState } from 'react';
import { useLocation, Link } from 'wouter';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '#home', type: 'scroll' },
  { name: 'About', href: '#about', type: 'scroll' },
  { name: 'Services', href: '#services', type: 'scroll' },
  { name: 'Agriculture', href: '/agriculture', type: 'route' },
  { name: 'Cloud', href: '/cloud', type: 'route' },
  { name: 'Cybersecurity', href: '/cybersecurity', type: 'route' },
  { name: 'Clawn AI', href: '#clawn-ai', type: 'scroll' },
  { name: 'Contact', href: '#contact', type: 'scroll' },
];

export function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (item: any) => {
    if (item.type === 'scroll') {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-3 cursor-pointer">
          <img 
            src="/attached_assets/jpeg (1)_1757147128009.jpeg" 
            alt="ClawnCore Logo" 
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain"
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
          <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            ClawnCore
          </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navigation.map((item) => (
            item.type === 'route' ? (
              <Link key={item.name} href={item.href}>
                <button className="text-sm font-medium hover:text-purple-600 transition-colors">
                  {item.name}
                </button>
              </Link>
            ) : (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className="text-sm xl:text-base font-medium hover:text-purple-600 transition-colors"
              >
                {item.name}
              </button>
            )
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="lg:hidden" data-testid="button-mobile-menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px] md:w-[400px]">
              <div className="flex items-center space-x-3 mb-8">
                <img 
                  src="/attached_assets/jpeg (1)_1757147128009.jpeg" 
                  alt="ClawnCore Logo" 
                  className="w-8 h-8 object-contain"
                  style={{ background: 'transparent' }}
                />
                <span className="text-lg font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  ClawnCore
                </span>
              </div>
              <nav className="flex flex-col space-y-6">
                {navigation.map((item) => (
                  item.type === 'route' ? (
                    <Link key={item.name} href={item.href}>
                      <button 
                        onClick={() => setIsOpen(false)}
                        className="text-left text-sm font-medium hover:text-purple-600 transition-colors w-full"
                      >
                        {item.name}
                      </button>
                    </Link>
                  ) : (
                    <button
                      key={item.name}
                      onClick={() => handleNavigation(item)}
                      className="text-left text-sm font-medium hover:text-purple-600 transition-colors"
                    >
                      {item.name}
                    </button>
                  )
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
