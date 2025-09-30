import { useLocation } from 'wouter';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, CheckCircle, ArrowRight, Shield, Lock, Eye, AlertTriangle } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export default function Cybersecurity() {
  const [, navigate] = useLocation();
  const { openLoginModal, isAuthenticated } = useAuth();

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Threat Detection",
      description: "AI-powered real-time monitoring and threat identification"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Data Encryption",
      description: "Military-grade encryption for all data at rest and in transit"
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "24/7 Monitoring",
      description: "Continuous surveillance with expert security analysts"
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Incident Response",
      description: "Rapid response protocols for security breaches"
    }
  ];

  const benefits = [
    "Proactive threat prevention",
    "Compliance with industry standards",
    "Reduced risk of data breaches",
    "24/7 expert security monitoring",
    "Automated vulnerability assessments",
    "Incident response and recovery"
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
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900 dark:text-red-200">
                <Shield className="mr-1 h-3 w-3" />
                Cybersecurity
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
                  Enterprise Security Solutions
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Comprehensive cybersecurity protection for your business. Advanced threat detection, real-time monitoring, and expert incident response to keep your data safe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white"
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
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Cybersecurity"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-400 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Security Protection
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive cybersecurity platform provides multi-layered protection for your digital assets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center text-red-600 dark:text-red-400 mb-4">
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
                Protect Your Business from Cyber Threats
              </h2>
              <p className="text-lg text-muted-foreground">
                Our cybersecurity solutions help businesses prevent data breaches, maintain compliance, and ensure business continuity with proactive threat prevention and rapid incident response.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white mt-6"
                onClick={() => navigate('/get-started')}
              >
                Secure Your Business Today
              </Button>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1563014959-24900909fb01?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                    alt="Threat Detection"
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                    alt="Data Encryption"
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1589487210473-ec49e038559b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                    alt="Monitoring"
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1589487210473-ec49e038559b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                    alt="Incident Response"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-red-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
                Cybersecurity Platform Demo
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See our enterprise security solutions in action
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {isAuthenticated ? (
              <div className="relative aspect-video bg-muted rounded-xl flex items-center justify-center">
                <img
                  src="/jpeg (1)_1757147457432.jpeg"
                  alt="Cybersecurity Platform"
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 rounded-xl p-4">
                  <Play className="h-12 w-12 text-white mb-4" />
                  <p className="text-white text-xl font-medium text-center px-4">
                    Cybersecurity Demo
                  </p>
                </div>
              </div>
            ) : (
              <div className="relative aspect-video bg-muted rounded-xl flex items-center justify-center">
                <img
                  src="/jpeg (1)_1757147457432.jpeg"
                  alt="Cybersecurity Platform"
                  className="w-full h-full object-cover rounded-xl opacity-50"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 rounded-xl p-4">
                  <Play className="h-12 w-12 text-white mb-4" />
                  <p className="text-white text-xl font-medium text-center px-4 mb-6">
                    Sign in to watch the full demo
                  </p>
                  <Button
                    onClick={handleWatchDemo}
                    className="bg-red-600 hover:bg-red-700"
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
      <section className="py-20 bg-gradient-to-r from-red-500 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
              <div className="text-lg">Threat Detection Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg">Monitoring Coverage</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-lg">Compliance Guarantee</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-lg">Enterprises Protected</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950 rounded-3xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Secure Your Business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of enterprises that trust our cybersecurity solutions to protect their most valuable assets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => navigate('/get-started')}
                >
                  Get Protected Today
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