import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, Lock, Eye, AlertTriangle, Network, Fingerprint, Server, Zap } from 'lucide-react';

export default function Cybersecurity() {
  const solutions = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Threat Protection",
      description: "Advanced threat detection and real-time response systems",
      features: ["AI-powered detection", "Real-time monitoring", "Automated response", "Zero-day protection"]
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Data Encryption",
      description: "End-to-end encryption for all your sensitive data",
      features: ["AES-256 encryption", "Key management", "Secure transmission", "Compliance ready"]
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Security Monitoring",
      description: "24/7 security operations center monitoring",
      features: ["Continuous monitoring", "Incident response", "Forensic analysis", "Compliance reporting"]
    },
    {
      icon: <Fingerprint className="h-8 w-8" />,
      title: "Identity Management",
      description: "Comprehensive identity and access management solutions",
      features: ["Multi-factor auth", "Single sign-on", "Role-based access", "Identity governance"]
    }
  ];

  const threats = [
    { name: "Malware", percentage: "95%" },
    { name: "Phishing", percentage: "92%" },
    { name: "Ransomware", percentage: "89%" },
    { name: "DDoS Attacks", percentage: "98%" }
  ];

  const certifications = [
    "ISO 27001", "SOC 2 Type II", "PCI DSS", "HIPAA", 
    "GDPR Compliant", "FedRAMP", "NIST Framework", "CIS Controls"
  ];

  const services = [
    {
      icon: <Network className="h-6 w-6" />,
      title: "Network Security",
      description: "Firewall management, intrusion detection, and network monitoring"
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Endpoint Protection",
      description: "Comprehensive endpoint security for all devices and platforms"
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Vulnerability Assessment",
      description: "Regular security audits and penetration testing services"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Incident Response",
      description: "Rapid response team for security incidents and breaches"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-red-950 dark:via-orange-950 dark:to-yellow-950" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                Cybersecurity
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
                  Advanced Cyber
                </span>
                <br />
                Protection
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Protect your business from evolving cyber threats with our comprehensive 
                security solutions. From threat detection to incident response, we provide 
                enterprise-grade security that adapts to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
                  Get Protected
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Security Assessment
                </Button>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800" 
                alt="Cybersecurity operations center" 
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
              Comprehensive Security Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Multi-layered security approach to protect your business from all angles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900 dark:to-orange-900 rounded-xl flex items-center justify-center mb-4 text-red-600 dark:text-red-400">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2" />
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

      {/* Threat Protection Stats */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Threat Protection Effectiveness
            </h2>
            <p className="text-lg text-muted-foreground">
              Our security solutions block the most common cyber threats
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {threats.map((threat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-2">
                  {threat.percentage}
                </div>
                <p className="text-muted-foreground">{threat.name} Blocked</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Security Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive security services tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900 dark:to-orange-900 rounded-lg flex items-center justify-center mb-4 mx-auto text-red-600 dark:text-red-400">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Security Certifications
            </h2>
            <p className="text-lg text-muted-foreground">
              Certified and compliant with industry security standards
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Secure Your Business Today
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Don't wait for a security breach. Protect your business with our comprehensive cybersecurity solutions
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-red-50">
            Start Security Assessment
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}