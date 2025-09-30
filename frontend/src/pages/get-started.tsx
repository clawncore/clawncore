import { useState } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '@/hooks/useAuth';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, CheckCircle, User as UserIcon, Mail, Phone, Building, MessageSquare, Shield } from 'lucide-react';
import { ProtectedRoute } from '@/components/ProtectedRoute';

// Define the user type
interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  profileImageUrl?: string;
  theme?: string;
  createdAt?: string;
  updatedAt?: string;
}

export default function GetStarted() {
  const [, navigate] = useLocation();
  const { user, isAuthenticated, openLoginModal } = useAuth();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    serviceInterest: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = [
    {
      title: "Choose Your Service",
      description: "Select the technology solution that fits your business needs",
      icon: "1"
    },
    {
      title: "Schedule Consultation",
      description: "Our experts will contact you to discuss your requirements",
      icon: "2"
    },
    {
      title: "Implementation",
      description: "We'll deploy and configure the solution for your business",
      icon: "3"
    },
    {
      title: "Ongoing Support",
      description: "Receive continuous support and updates",
      icon: "4"
    }
  ];

  const services = [
    "Drone Technology",
    "Agriculture Solutions",
    "Cloud Computing",
    "Cybersecurity",
    "AI & Machine Learning",
    "Data Analytics"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simple validation
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
        toast({
          title: "Error",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Create a clean data object without empty optional fields
      const cleanData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        message: formData.message,
        ...(formData.company && { company: formData.company }),
        ...(formData.phone && { phone: formData.phone }),
        ...(formData.serviceInterest && { serviceInterest: formData.serviceInterest }),
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cleanData),
      });

      // Check if response has content before parsing
      let responseData;
      const responseText = await response.text();

      if (responseText) {
        try {
          responseData = JSON.parse(responseText);
        } catch (parseError) {
          console.error('Failed to parse JSON response:', responseText);
          throw new Error('Invalid response format from server');
        }
      } else {
        responseData = {};
      }

      if (response.ok) {
        toast({
          title: "Inquiry Submitted!",
          description: "Thank you for your interest. We'll get back to you soon.",
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: '',
          serviceInterest: '',
          message: '',
        });
      } else {
        throw new Error(responseData.message || 'Failed to submit inquiry');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignIn = () => {
    // Open login modal instead of redirecting
    openLoginModal();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Get Started with ClawnCore
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Transform your business with our cutting-edge technology solutions.
            Our experts are ready to help you succeed.
          </p>

          {!isAuthenticated ? (
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white"
              onClick={handleSignIn}
            >
              <UserIcon className="mr-2 h-4 w-4" />
              Sign In to Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <div className="flex flex-col items-center">
              <p className="text-lg mb-4">
                Welcome, <span className="font-semibold">{(user as User | undefined)?.firstName || (user as User | undefined)?.email}</span>!
              </p>
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => navigate('/profile')}
              >
                Go to Your Profile
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple Process to Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Getting started with our services is straightforward and efficient
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form - Protected with modal login */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                Submit Your Inquiry
              </CardTitle>
              <CardDescription>
                Fill out this form and our team will contact you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ProtectedRoute>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="get-started-first-name">First Name *</Label>
                      <Input
                        id="get-started-first-name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="get-started-last-name">Last Name *</Label>
                      <Input
                        id="get-started-last-name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="get-started-email">Email *</Label>
                    <Input
                      id="get-started-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="get-started-company">Company</Label>
                      <Input
                        id="get-started-company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <Label htmlFor="get-started-phone">Phone</Label>
                      <Input
                        id="get-started-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 8790813536"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="get-started-service-interest">Service Interest</Label>
                    <select
                      id="get-started-service-interest"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      className="w-full p-2 border rounded bg-background"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="get-started-message">Message *</Label>
                    <Textarea
                      id="get-started-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your project requirements..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </ProtectedRoute>

              {!isAuthenticated && (
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">
                    Please sign in to submit your inquiry
                  </p>
                  <Button onClick={handleSignIn}>
                    Sign In to Continue
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Information Panel */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  Why Choose ClawnCore?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Enterprise-Grade Security</h4>
                    <p className="text-sm text-muted-foreground">Military-grade encryption and compliance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">24/7 Support</h4>
                    <p className="text-sm text-muted-foreground">Round-the-clock technical assistance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Scalable Solutions</h4>
                    <p className="text-sm text-muted-foreground">Grow with your business needs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Expert Team</h4>
                    <p className="text-sm text-muted-foreground">Industry veterans with deep expertise</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span>clawncore@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <span>+91 8790813536</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="h-5 w-5 text-muted-foreground" />
                  <span>Andhra Pradesh, India</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}