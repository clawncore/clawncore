import React from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 'drone',
    icon: '🚁',
    title: 'Drone Technology',
    description: 'Advanced UAV solutions for surveillance, agriculture, and commercial applications with AI-powered automation.',
    color: 'from-purple-600 to-purple-800',
    hoverColor: 'hover:border-purple-600/50',
    textColor: 'text-purple-600'
  },
  {
    id: 'agriculture',
    icon: '🌱',
    title: 'Agriculture Solutions',
    description: 'Smart farming technologies including precision agriculture, crop monitoring, and yield optimization systems.',
    color: 'from-pink-600 to-pink-800',
    hoverColor: 'hover:border-pink-600/50',
    textColor: 'text-pink-600'
  },
  {
    id: 'cloud',
    icon: '☁️',
    title: 'Cloud Computing',
    description: 'Scalable cloud infrastructure, migration services, and multi-cloud management solutions.',
    color: 'from-blue-600 to-blue-800',
    hoverColor: 'hover:border-blue-600/50',
    textColor: 'text-blue-600'
  },
  {
    id: 'ai',
    icon: '🧠',
    title: 'Clawn AI',
    description: 'Proprietary AI platform for machine learning, natural language processing, and predictive analytics.',
    color: 'from-purple-600 via-pink-600 to-blue-600',
    hoverColor: 'hover:border-purple-600/50',
    textColor: 'text-purple-600'
  },
  {
    id: 'cybersecurity',
    icon: '🛡️',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions including threat detection, risk assessment, and compliance management.',
    color: 'from-pink-600 to-pink-800',
    hoverColor: 'hover:border-pink-600/50',
    textColor: 'text-pink-600'
  },
  {
    id: 'mobile',
    icon: '📱',
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications with native performance and intuitive user experiences.',
    color: 'from-blue-600 to-blue-800',
    hoverColor: 'hover:border-blue-600/50',
    textColor: 'text-blue-600'
  },
  {
    id: 'analytics',
    icon: '📊',
    title: 'Data Analytics',
    description: 'Business intelligence solutions, data visualization, and advanced analytics for informed decision-making.',
    color: 'from-purple-600 to-purple-800',
    hoverColor: 'hover:border-purple-600/50',
    textColor: 'text-purple-600'
  },
  {
    id: 'iot',
    icon: '🌐',
    title: 'IoT Solutions',
    description: 'Connected device ecosystems and smart automation for industrial and commercial applications.',
    color: 'from-pink-600 to-pink-800',
    hoverColor: 'hover:border-pink-600/50',
    textColor: 'text-pink-600'
  },
];

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group p-6 bg-card rounded-2xl border border-border ${service.hoverColor} transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <span className="text-white text-xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
              <Button
                variant="ghost"
                size="sm"
                className={`${service.textColor} hover:${service.textColor}/80 font-medium text-sm p-0 h-auto`}
                asChild
              >
                <Link href={`/service/${service.id}`} data-testid={`link-service-${service.id}`}>
                  Learn More <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
