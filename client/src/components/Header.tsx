import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useAuth } from '@/hooks/useAuth';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Menu, User, Settings, LogOut } from 'lucide-react';

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
  const { isAuthenticated, user } = useAuth();
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
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full opacity-90" />
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
          
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full" data-testid="button-user-menu">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user?.profileImageUrl} alt={user?.firstName || 'User'} />
                    <AvatarFallback>
                      {user?.firstName?.[0] || user?.email?.[0] || 'U'}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="flex items-center" data-testid="link-profile">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="flex items-center">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/api/logout" className="flex items-center" data-testid="link-logout">
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" asChild data-testid="button-login">
                <a href="/api/login">Login</a>
              </Button>
              <Button asChild data-testid="button-signup">
                <a href="/api/login">Sign Up</a>
              </Button>
            </div>
          )}

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
                {!isAuthenticated && (
                  <div className="pt-4 border-t border-border space-y-2">
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <a href="/api/login">Login</a>
                    </Button>
                    <Button className="w-full justify-start" asChild>
                      <a href="/api/login">Sign Up</a>
                    </Button>
                  </div>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
