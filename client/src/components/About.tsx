import React from 'react';
import { Rocket, Users } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              About ClawnCore
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Founded in 2025, ClawnCore Multitech Company is at the forefront of technological innovation, 
            delivering intelligent solutions that shape the future.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Tech-Driven Approach</h3>
            <p className="text-muted-foreground leading-relaxed">
              We leverage cutting-edge technologies including artificial intelligence, machine learning, 
              IoT, and cloud computing to create solutions that drive digital transformation across industries.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-card rounded-lg border border-border">
                <Rocket className="text-purple-600 text-2xl mb-2" size={24} />
                <h4 className="font-semibold mb-1">Innovation First</h4>
                <p className="text-sm text-muted-foreground">Pioneering tomorrow's technology today</p>
              </div>
              <div className="p-4 bg-card rounded-lg border border-border">
                <Users className="text-pink-600 text-2xl mb-2" size={24} />
                <h4 className="font-semibold mb-1">Client-Centric</h4>
                <p className="text-sm text-muted-foreground">Tailored solutions for every business</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
              alt="Technology innovation lab" 
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Leadership Team */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Leadership Team</h3>
          <p className="text-muted-foreground">Meet the visionaries behind ClawnCore</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="group p-6 bg-card rounded-2xl border border-border hover:border-purple-600/50 transition-all duration-300 transform hover:scale-105">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" 
                alt="Simbisai Chinhema" 
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xl font-bold text-center mb-2">Simbisai Chinhema</h4>
            <p className="text-purple-600 text-center mb-3">Co-Founder & CEO</p>
            <p className="text-sm text-muted-foreground text-center">
              Visionary leader with expertise in AI and emerging technologies, driving ClawnCore's 
              strategic direction and innovation initiatives.
            </p>
          </div>

          <div className="group p-6 bg-card rounded-2xl border border-border hover:border-pink-600/50 transition-all duration-300 transform hover:scale-105">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" 
                alt="Craig Marowa" 
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xl font-bold text-center mb-2">Craig Marowa</h4>
            <p className="text-pink-600 text-center mb-3">Co-Founder & CEO</p>
            <p className="text-sm text-muted-foreground text-center">
              Technology strategist with deep expertise in cybersecurity and cloud infrastructure, 
              ensuring robust and scalable solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
