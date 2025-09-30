import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Languages, Eye } from 'lucide-react';

export function ClawnAI() {
  const [imageError, setImageError] = useState(false);
  const [, navigate] = useLocation();

  return (
    <section id="clawn-ai" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Clawn AI Platform
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proprietary AI platform delivers intelligent automation and insights across all industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Intelligent Automation at Scale</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot className="text-white" size={16} />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Machine Learning Models</h4>
                  <p className="text-muted-foreground text-sm">Advanced ML algorithms for predictive analytics and pattern recognition.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Languages className="text-white" size={16} />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Natural Language Processing</h4>
                  <p className="text-muted-foreground text-sm">Sophisticated text analysis and language understanding capabilities.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Eye className="text-white" size={16} />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Computer Vision</h4>
                  <p className="text-muted-foreground text-sm">Image recognition and analysis for automated visual inspection.</p>
                </div>
              </div>
            </div>

            <Button 
              className="bg-purple-600 hover:bg-purple-700 text-white"
              data-testid="button-explore-ai"
              onClick={() => navigate('/get-started')}
            >
              Explore Clawn AI
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="rounded-2xl overflow-hidden">
            {!imageError ? (
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800" 
                alt="AI dashboard interface" 
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Bot className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <p className="text-muted-foreground">AI Dashboard Visualization</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* AI Use Cases */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-card rounded-xl border border-border">
            <div className="text-purple-600 text-2xl mb-4">🏭</div>
            <h4 className="font-semibold mb-2">Industrial Automation</h4>
            <p className="text-sm text-muted-foreground">
              Optimize manufacturing processes with intelligent automation and predictive maintenance.
            </p>
          </div>
          <div className="p-6 bg-card rounded-xl border border-border">
            <div className="text-pink-600 text-2xl mb-4">🏥</div>
            <h4 className="font-semibold mb-2">Healthcare Analytics</h4>
            <p className="text-sm text-muted-foreground">
              AI-powered diagnostic tools and patient data analysis for improved healthcare outcomes.
            </p>
          </div>
          <div className="p-6 bg-card rounded-xl border border-border">
            <div className="text-blue-600 text-2xl mb-4">📈</div>
            <h4 className="font-semibold mb-2">Business Intelligence</h4>
            <p className="text-sm text-muted-foreground">
              Transform raw data into actionable insights with advanced analytics and reporting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}