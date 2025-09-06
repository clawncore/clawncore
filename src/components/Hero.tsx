import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const slideImages = [
  'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
  'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
  'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Floating Background Icons */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-20 left-10 text-purple-600/20 text-2xl animate-float" style={{ animationDelay: '0s' }}>
          🚁
        </div>
        <div className="absolute top-40 right-20 text-pink-600/20 text-xl animate-float" style={{ animationDelay: '1s' }}>
          🧠
        </div>
        <div className="absolute bottom-40 left-20 text-blue-600/20 text-3xl animate-float" style={{ animationDelay: '2s' }}>
          ☁️
        </div>
        <div className="absolute bottom-20 right-10 text-purple-600/20 text-2xl animate-float" style={{ animationDelay: '3s' }}>
          🛡️
        </div>
        <div className="absolute top-60 left-1/3 text-pink-600/20 text-xl animate-float" style={{ animationDelay: '4s' }}>
          📱
        </div>
        <div className="absolute bottom-60 right-1/3 text-blue-600/20 text-2xl animate-float" style={{ animationDelay: '5s' }}>
          📊
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Slideshow */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] rounded-2xl overflow-hidden">
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

          {/* Right Side: Content */}
          <div className="space-y-8">
            {/* Logo Display */}
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="/attached_assets/jpeg (1)_1757147457432.jpeg" 
                alt="ClawnCore Logo" 
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
                style={{ background: 'transparent' }}
                onError={(e) => {
                  // Fallback to gradient logo if image fails to load
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                  ((e.currentTarget.nextElementSibling as HTMLElement)).style.display = 'flex';
                }}
              />
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center" style={{ display: 'none' }}>
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full opacity-90" />
              </div>
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                ClawnCore
              </span>
            </div>

            {/* Animated Title */}
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                Empowering the Future
              </span>
              <br />
              <span className="text-foreground">with Intelligent Solutions</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              ClawnCore Multitech Company delivers cutting-edge technology solutions across drone technology, 
              agriculture, AI, cloud computing, cybersecurity, and data analytics to transform businesses and 
              drive innovation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white transform hover:scale-105 transition-all duration-300"
                onClick={scrollToServices}
                data-testid="button-learn-more"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="hover:bg-muted transition-all duration-300"
                data-testid="button-watch-demo"
              >
                Watch Demo
                <Play className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  2025
                </div>
                <div className="text-sm text-muted-foreground">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  7
                </div>
                <div className="text-sm text-muted-foreground">Core Services</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
