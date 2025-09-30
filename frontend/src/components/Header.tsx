import { useState } from 'react';
import { useLocation } from 'wouter';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/contexts/AuthContext';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { AccountDropdown } from '@/components/AccountDropdown';
import {
  FaBars,
  FaSun,
  FaMoon,
  FaInfoCircle,
  FaCogs,
  FaMobileAlt,
  FaDownload
} from 'react-icons/fa';

const navigation = [
  { name: 'Home', href: '#home', type: 'scroll' },
  { name: 'About', href: '#about', type: 'scroll' },
  { name: 'Agriculture', href: '/agriculture', type: 'route' },
  { name: 'Cloud', href: '/cloud', type: 'route' },
  { name: 'Cybersecurity', href: '/cybersecurity', type: 'route' },
  { name: 'ML', href: '/ml', type: 'route' },
  { name: 'Data Analytics', href: '/data-analytics', type: 'route' },
  { name: 'Clawn AI', href: '#clawn-ai', type: 'scroll' },
  { name: 'Contact', href: '#contact', type: 'scroll' },
];

export function Header() {
  const [] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, openLoginModal } = useAuth();

  const handleNavigation = (item: any) => {
    if (item.type === 'scroll') {
      // Add a small delay to ensure the page has loaded
      setTimeout(() => {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
    setIsOpen(false);
  };

  const settingsItems = [
    { name: 'About', href: '/#about', icon: FaInfoCircle },
    { name: 'Services', href: '/#services', icon: FaCogs },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 md:h-16 lg:h-20 items-center justify-between px-4">
        {/* Mobile Menu - Moved to the left side */}
        <div className="flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden" data-testid="button-mobile-menu">
                <FaBars className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[320px]">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="/attached_assets/logo.jpeg"
                  alt="ClawnCore Logo"
                  className="w-8 h-8 object-contain"
                  style={{ background: 'transparent' }}
                />
                <span className="text-lg font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  ClawnCore
                </span>
              </div>

              {/* Main Navigation */}
              <nav className="flex flex-col space-y-4 mb-6">
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

              {/* Settings Section */}
              <div className="border-t border-border pt-6">
                <h3 className="text-sm font-semibold mb-4 text-muted-foreground">SETTINGS</h3>

                {/* Theme Toggle */}
                <div className="mb-4 p-3 bg-muted rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {theme === 'light' ? (
                        <FaSun className="h-4 w-4" />
                      ) : (
                        <FaMoon className="h-4 w-4" />
                      )}
                      <span className="text-sm">Theme</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={toggleTheme}
                      className="h-8"
                    >
                      {theme === 'light' ? 'Dark' : 'Light'}
                    </Button>
                  </div>
                </div>

                {/* User Profile */}
                {isAuthenticated ? (
                  <div className="mb-4 p-3 bg-muted rounded-lg">
                    <Link href="/profile">
                      <button
                        onClick={() => setIsOpen(false)}
                        className="flex items-center text-left text-sm font-medium hover:text-purple-600 transition-colors w-full"
                      >
                        <div className="h-4 w-4 mr-2 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                        </div>
                        My Profile
                      </button>
                    </Link>
                  </div>
                ) : (
                  <div className="mb-4 p-3 bg-muted rounded-lg">
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        openLoginModal();
                      }}
                      className="flex items-center text-left text-sm font-medium hover:text-purple-600 transition-colors w-full"
                    >
                      <div className="h-4 w-4 mr-2 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                      </div>
                      Login
                    </button>
                  </div>
                )}

                {/* Language Selector */}
                <div className="mb-4 p-3 bg-muted rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <FaMobileAlt className="h-4 w-4" />
                    <span className="text-sm">Download our App</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1 text-xs">
                      <FaDownload className="h-3 w-3 mr-1" />
                      iOS
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 text-xs">
                      <FaDownload className="h-3 w-3 mr-1" />
                      Android
                    </Button>
                  </div>
                </div>

                {/* Settings Navigation */}
                <nav className="flex flex-col space-y-3 mb-4">
                  {settingsItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link key={item.name} href={item.href}>
                        <button
                          onClick={() => setIsOpen(false)}
                          className="flex items-center text-left text-sm font-medium hover:text-purple-600 transition-colors w-full"
                        >
                          <Icon className="h-4 w-4 mr-2" />
                          {item.name}
                        </button>
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2 md:space-x-3 cursor-pointer">
            <img
              src="/attached_assets/logo.jpeg"
              alt="ClawnCore Logo"
              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
              style={{ background: 'transparent' }}
            />
            <span className="text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              ClawnCore
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navigation.map((item) => (
            item.type === 'route' ? (
              <Link key={item.name} href={item.href}>
                <button className="text-xs md:text-sm lg:text-base font-medium hover:text-purple-600 transition-colors">
                  {item.name}
                </button>
              </Link>
            ) : (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className="text-xs md:text-sm lg:text-base font-medium hover:text-purple-600 transition-colors"
              >
                {item.name}
              </button>
            )
          ))}
        </nav>

        {/* Actions - Theme Toggle and User Menu */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
          <ThemeToggle />
          {isAuthenticated ? (
            <AccountDropdown />
          ) : (
            <Button variant="ghost" size="sm" onClick={openLoginModal} className="h-9 px-3">
              Sign In
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}