import React from 'react';
import { useLocation } from 'wouter';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, CheckCircle, ArrowRight, Cpu, Network, BarChart, Zap, TrendingUp, Database } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { VideoPlayer } from '@/components/VideoPlayer';

export default function ML() {
    const [, navigate] = useLocation();
    const { openLoginModal, isAuthenticated } = useAuth();

    const features = [
        {
            icon: <Cpu className="h-6 w-6" />,
            title: "Deep Learning",
            description: "Neural networks for complex pattern recognition and prediction"
        },
        {
            icon: <Database className="h-6 w-6" />,
            title: "Big Data Processing",
            description: "Scalable solutions for handling massive datasets efficiently"
        },
        {
            icon: <BarChart className="h-6 w-6" />,
            title: "Predictive Modeling",
            description: "Advanced algorithms for forecasting and trend analysis"
        },
        {
            icon: <Zap className="h-6 w-6" />,
            title: "Real-time Analytics",
            description: "Instant insights from streaming data sources"
        }
    ];

    const benefits = [
        "Automated pattern recognition",
        "Enhanced decision-making capabilities",
        "Scalable machine learning models",
        "Reduced time-to-insight",
        "Improved accuracy and precision",
        "Continuous model optimization"
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
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950 dark:to-blue-950"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-200">
                                <Cpu className="mr-1 h-3 w-3" />
                                Machine Learning
                            </Badge>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                    Advanced Machine Learning
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                                Leverage the power of machine learning to uncover hidden patterns, predict trends, and automate complex decision-making processes with our enterprise-grade ML platform.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="bg-indigo-600 hover:bg-indigo-700 text-white"
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
                                    src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                                    alt="Machine Learning"
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-400 rounded-full opacity-20"></div>
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Demo Video Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                Machine Learning Platform Demo
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            See our enterprise machine learning solutions in action
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {isAuthenticated ? (
                            <VideoPlayer
                                videoSrc="/attached_assets/demo-video-6.mp4"
                                thumbnailSrc="/attached_assets/video-thumbnail-6.jpg"
                                title="Machine Learning Platform"
                            />
                        ) : (
                            <div className="relative aspect-video bg-muted rounded-xl flex items-center justify-center">
                                <img
                                    src="/attached_assets/video-thumbnail-6.jpg"
                                    alt="Machine Learning Platform"
                                    className="w-full h-full object-cover rounded-xl opacity-50"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 rounded-xl p-4">
                                    <Play className="h-12 w-12 text-white mb-4" />
                                    <p className="text-white text-xl font-medium text-center px-4 mb-6">
                                        Sign in to watch the full demo video
                                    </p>
                                    <Button
                                        onClick={handleWatchDemo}
                                        className="bg-indigo-600 hover:bg-indigo-700"
                                    >
                                        Sign In to View
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Cutting-Edge ML Capabilities
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Our comprehensive machine learning platform provides everything you need for advanced analytics and intelligent automation
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
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
                                Transform Data into Intelligence
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Our machine learning solutions help businesses extract valuable insights from data, automate processes, and make smarter decisions with predictive analytics and advanced modeling.
                            </p>
                            <ul className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-indigo-500 mt-0.5 mr-3 flex-shrink-0" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button
                                size="lg"
                                className="bg-indigo-600 hover:bg-indigo-700 text-white mt-6"
                                onClick={() => navigate('/get-started')}
                            >
                                Start Your ML Journey
                            </Button>
                        </div>
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="rounded-2xl overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                                        alt="Deep Learning"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div className="rounded-2xl overflow-hidden mt-8">
                                    <img
                                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                                        alt="Predictive Modeling"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div className="rounded-2xl overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                                        alt="Big Data"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div className="rounded-2xl overflow-hidden mt-8">
                                    <img
                                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                                        alt="Real-time Analytics"
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-500 rounded-full opacity-20"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">90%</div>
                            <div className="text-lg">Model Accuracy</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">40%</div>
                            <div className="text-lg">Time Reduction</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                            <div className="text-lg">Model Monitoring</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                            <div className="text-lg">Models Deployed</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950 dark:to-blue-950 rounded-3xl p-8 md:p-12">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Ready to Leverage Machine Learning?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Join hundreds of enterprises that have transformed their data into actionable intelligence with our machine learning solutions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="bg-indigo-600 hover:bg-indigo-700 text-white"
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