import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sprout, Droplets, Zap, BarChart3, Satellite, Shield, Cpu, Cloud } from 'lucide-react';

export default function Agriculture() {
  const solutions = [
    {
      icon: <Sprout className="h-8 w-8" />,
      title: "Smart Crop Monitoring",
      description: "AI-powered crop health analysis using drone imaging and satellite data",
      features: ["Disease detection", "Growth tracking", "Yield prediction", "Pest identification"]
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Precision Irrigation",
      description: "Automated water management systems optimized for crop needs",
      features: ["Soil moisture monitoring", "Weather integration", "Water conservation", "Remote control"]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Farm Analytics",
      description: "Comprehensive data analytics for informed decision making",
      features: ["Production analytics", "Cost optimization", "Market insights", "Trend analysis"]
    },
    {
      icon: <Satellite className="h-8 w-8" />,
      title: "Drone Surveillance",
      description: "Advanced aerial monitoring for large-scale farm operations",
      features: ["Real-time monitoring", "GPS mapping", "Automated patrols", "Thermal imaging"]
    }
  ];

  const benefits = [
    { label: "Crop Yield Increase", value: "35%" },
    { label: "Water Conservation", value: "40%" },
    { label: "Cost Reduction", value: "25%" },
    { label: "Time Savings", value: "60%" }
  ];

  const technologies = [
    "IoT Sensors", "Machine Learning", "Computer Vision", "Satellite Imagery",
    "Weather Analytics", "Soil Science", "Hydroponic Systems", "Automation"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950 dark:via-emerald-950 dark:to-teal-950" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                Agriculture Technology
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Smart Agriculture
                </span>
                <br />
                Solutions
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Transform your farming operations with cutting-edge technology. Our comprehensive 
                agriculture solutions combine AI, IoT, and drone technology to maximize yields, 
                reduce costs, and promote sustainable farming practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  View Demo
                </Button>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800" 
                alt="Smart agriculture technology" 
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Agriculture Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our integrated platform provides everything you need to modernize your farming operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 rounded-xl flex items-center justify-center mb-4 text-green-600 dark:text-green-400">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proven Results
            </h2>
            <p className="text-lg text-muted-foreground">
              See the impact our agriculture technology has on farm operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  {benefit.value}
                </div>
                <p className="text-muted-foreground">{benefit.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Technologies
            </h2>
            <p className="text-lg text-muted-foreground">
              Powered by the latest innovations in agriculture technology
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join thousands of farmers who have revolutionized their operations with our smart agriculture solutions
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-green-50">
            Start Your Journey
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}