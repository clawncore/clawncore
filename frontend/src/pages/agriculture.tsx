import { useLocation } from 'wouter';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, CheckCircle, ArrowRight, Leaf, Droplets, Sun, Wind } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export default function Agriculture() {
  const [, navigate] = useLocation();
  const { openLoginModal, isAuthenticated } = useAuth();

  const features = [
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Precision Farming",
      description: "Advanced sensors and data analytics for optimal crop management"
    },
    {
      icon: <Droplets className="h-6 w-6" />,
      title: "Smart Irrigation",
      description: "Automated water management systems for efficient resource usage"
    },
    {
      icon: <Sun className="h-6 w-6" />,
      title: "Climate Monitoring",
      description: "Real-time weather data integration for informed decisions"
    },
    {
      icon: <Wind className="h-6 w-6" />,
      title: "Drone Surveillance",
      description: "Aerial monitoring for crop health and field analysis"
    }
  ];

  const benefits = [
    "Increased crop yield by up to 30%",
    "Reduced water consumption by 25%",
    "Lower operational costs",
    "Enhanced sustainability practices",
    "Real-time monitoring and alerts",
    "Data-driven decision making"
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
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-200">
                <Leaf className="mr-1 h-3 w-3" />
                Agriculture Technology
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Smart Agriculture Solutions
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Revolutionize your farming operations with our cutting-edge drone technology, precision agriculture tools, and AI-powered analytics for maximum yield and sustainability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white"
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
                  src="https://images.unsplash.com/photo-1627425771097-00b6d7a4c8d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Precision Agriculture Technology"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transform Your Farming Operations
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive agriculture technology suite provides everything you need for modern, efficient farming
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
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
                Maximize Yield, Minimize Waste
              </h2>
              <p className="text-lg text-muted-foreground">
                Our smart agriculture solutions help farmers increase productivity while reducing environmental impact through precision technology and data analytics.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white mt-6"
                onClick={() => navigate('/get-started')}
              >
                Start Your Agricultural Transformation
              </Button>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1597571513540-7c6180c2e9f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                    alt="Crop Monitoring"
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1597571513550-9d1a1f0f1d3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                    alt="Drone Surveillance"
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1597571513560-0d9a2f1c8e3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                    alt="Data Analytics"
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                    alt="Agricultural Technology"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Agriculture Technology Demo
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See our smart agriculture solutions in action
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {isAuthenticated ? (
              <div className="relative aspect-video bg-muted rounded-xl flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1597571513540-7c6180c2e9f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Smart Agriculture Platform"
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 rounded-xl p-4">
                  <Play className="h-12 w-12 text-white mb-4" />
                  <p className="text-white text-xl font-medium text-center px-4">
                    Smart Agriculture Demo
                  </p>
                </div>
              </div>
            ) : (
              <div className="relative aspect-video bg-muted rounded-xl flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1597571513540-7c6180c2e9f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Smart Agriculture Platform"
                  className="w-full h-full object-cover rounded-xl opacity-50"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 rounded-xl p-4">
                  <Play className="h-12 w-12 text-white mb-4" />
                  <p className="text-white text-xl font-medium text-center px-4 mb-6">
                    Sign in to watch the full demo
                  </p>
                  <Button
                    onClick={handleWatchDemo}
                    className="bg-green-600 hover:bg-green-700"
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
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">30%</div>
              <div className="text-lg">Increase in Yield</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">25%</div>
              <div className="text-lg">Water Savings</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">40%</div>
              <div className="text-lg">Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-lg">Farms Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 rounded-3xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Agricultural Operations?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of farmers who have already revolutionized their farming with our smart agriculture solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white"
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