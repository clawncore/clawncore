import React from 'react';
import { useLocation } from 'wouter';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, CheckCircle, ArrowRight, Cloud, Server, Shield, Zap, Network, Database } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { VideoPlayer } from '@/components/VideoPlayer';

export default function CloudComputing() {
  const [, navigate] = useLocation();
  const { openLoginModal, isAuthenticated } = useAuth();

  const features = [
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Scalable Infrastructure",
      description: "Auto-scaling resources to match your workload demands"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "Military-grade encryption and compliance certifications"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "High Performance",
      description: "Lightning-fast processing with global CDN integration"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Management",
      description: "Advanced analytics and real-time data processing"
    }
  ];

  const benefits = [
    "99.99% uptime guarantee",
    "Automatic scaling capabilities",
    "Reduced IT infrastructure costs",
    "Enhanced security and compliance",
    "Global accessibility and collaboration",
    "24/7 expert support"
  ];

  const handleWatchDemo = () => {
    // Open login modal for protected content
    openLoginModal();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-200">
                <Cloud className="mr-1 h-3 w-3" />
                Cloud Computing
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Enterprise Cloud Solutions
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Scalable, secure, and high-performance cloud infrastructure designed for modern businesses. Migrate, manage, and optimize your digital assets with our comprehensive cloud platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => navigate('/get-started')}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleWatchDemo}
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Cloud Computing"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Cloud Infrastructure
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our enterprise-grade cloud platform provides everything you need for modern digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Transform Your Digital Infrastructure
              </h2>
              <p className="text-lg text-muted-foreground">
                Our cloud solutions help businesses reduce costs, improve performance, and scale effortlessly with enterprise-grade security and reliability.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white mt-6"
                onClick={() => navigate('/get-started')}
              >
                Start Your Cloud Journey
              </Button>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                    alt="Data Analytics"
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                    alt="Security"
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                    alt="Networking"
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                    alt="Scalability"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Cloud Computing Platform Demo
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See our enterprise cloud solutions in action
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {isAuthenticated ? (
              <VideoPlayer
                videoSrc="/attached_assets/demo-video-4.mp4"
                thumbnailSrc="/attached_assets/video-thumbnail-4.jpg"
                title="Cloud Computing Platform"
              />
            ) : (
              <div className="relative aspect-video bg-muted rounded-xl flex items-center justify-center">
                <img
                  src="/attached_assets/video-thumbnail-4.jpg"
                  alt="Cloud Computing Platform"
                  className="w-full h-full object-cover rounded-xl opacity-50"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 rounded-xl p-4">
                  <Play className="h-12 w-12 text-white mb-4" />
                  <p className="text-white text-xl font-medium text-center px-4 mb-6">
                    Sign in to watch the full demo video
                  </p>
                  <Button
                    onClick={handleWatchDemo}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Sign In to View
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">99.99%</div>
              <div className="text-lg">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50%</div>
              <div className="text-lg">Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg">Expert Support</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
              <div className="text-lg">Enterprises Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-3xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Infrastructure?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of enterprises that have revolutionized their operations with our cloud solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => navigate('/get-started')}
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleWatchDemo}
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch Full Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}