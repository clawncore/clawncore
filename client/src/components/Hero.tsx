import React, { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const slideImages = [
  'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800',
  'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800',
  'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800',
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800',
];

const slideAlts = [
  'Agricultural drone technology',
  'AI interface technology',
  'Cloud computing technology',
  'Cybersecurity network',
  'Mobile app development',
  'Data analytics visualization',
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [, navigate] = useLocation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Floating Background Icons */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-16 left-4 text-purple-600/20 text-xl animate-float md:top-20 md:left-10 md:text-2xl" style={{ animationDelay: '0s' }}>
          🚁
        </div>
        <div className="absolute top-32 right-4 text-pink-600/20 text-lg animate-float md:top-40 md:right-20 md:text-xl" style={{ animationDelay: '1s' }}>
          🧠
        </div>
        <div className="absolute bottom-32 left-4 text-blue-600/20 text-xl animate-float md:bottom-40 md:left-20 md:text-3xl" style={{ animationDelay: '2s' }}>
          ☁️
        </div>
        <div className="absolute bottom-16 right-4 text-purple-600/20 text-xl animate-float md:bottom-20 md:right-10 md:text-2xl" style={{ animationDelay: '3s' }}>
          🛡️
        </div>
        <div className="absolute top-48 left-1/4 text-pink-600/20 text-lg animate-float md:top-60 md:left-1/3 md:text-xl" style={{ animationDelay: '4s' }}>
          📱
        </div>
        <div className="absolute bottom-48 right-1/4 text-blue-600/20 text-xl animate-float md:bottom-60 md:right-1/3 md:text-2xl" style={{ animationDelay: '5s' }}>
          📊
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Centered Content */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex justify-center items-center space-x-3 mb-6 md:mb-8 md:space-x-4">
            <img 
              src="/attached_assets/jpeg (1)_1757147457432.jpeg" 
              alt="ClawnCore Logo" 
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
              style={{ background: 'transparent' }}
              onError={(e) => {
                // Fallback to gradient logo if image fails to load
                (e.currentTarget as HTMLImageElement).style.display = 'none';
                ((e.currentTarget.nextElementSibling as HTMLElement)).style.display = 'flex';
              }}
            />
            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center" style={{ display: 'none' }}>
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white rounded-full opacity-90" />
            </div>
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              ClawnCore
            </span>
          </div>

          {/* Animated Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
              Empowering the Future
            </span>
            <br />
            <span className="text-foreground">with Intelligent Solutions</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6 md:mb-8">
            ClawnCore Multitech Company delivers cutting-edge technology solutions across drone technology, 
            agriculture, AI, cloud computing, cybersecurity, and data analytics to transform businesses and 
            drive innovation.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white transform hover:scale-105 transition-all duration-300 text-sm md:text-base"
              onClick={handleGetStarted}
              data-testid="button-get-started"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Full Width Slideshow */}
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden">
          {slideImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={slideAlts[index]}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 pt-8 md:pt-12">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              50+
            </div>
            <div className="text-xs md:text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              2025
            </div>
            <div className="text-xs md:text-sm text-muted-foreground">Founded</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              7
            </div>
            <div className="text-xs md:text-sm text-muted-foreground">Core Services</div>
          </div>
        </div>
      </div>
    </section>
  );
}