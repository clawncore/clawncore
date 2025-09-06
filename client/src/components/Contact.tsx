import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Github, Youtube } from 'lucide-react';
import { insertContactSchema } from '@shared/schema';

export function Contact() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof insertContactSchema>>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      serviceInterest: '',
      message: '',
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: z.infer<typeof insertContactSchema>) => {
      await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your interest. We'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (values: z.infer<typeof insertContactSchema>) => {
    contactMutation.mutate(values);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business with intelligent technology solutions? Let's start the conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                We're here to help you navigate the future of technology. Reach out to discuss your project 
                requirements or schedule a consultation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-muted-foreground">contact@clawncore.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Visit Us</p>
                  <p className="text-muted-foreground">
                    123 Innovation Drive<br />Tech City, TC 12345
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 pt-6">
              <a 
                href="#" 
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin size={16} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors"
                data-testid="link-twitter"
              >
                <Twitter size={16} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors"
                data-testid="link-github"
              >
                <Github size={16} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors"
                data-testid="link-youtube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl border border-border">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} data-testid="input-firstName" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} data-testid="input-lastName" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@company.com" {...field} data-testid="input-email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Company" {...field} data-testid="input-company" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="serviceInterest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Interest</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-serviceInterest">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="drone">Drone Technology</SelectItem>
                          <SelectItem value="agriculture">Agriculture Solutions</SelectItem>
                          <SelectItem value="cloud">Cloud Computing</SelectItem>
                          <SelectItem value="ai">Clawn AI</SelectItem>
                          <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                          <SelectItem value="mobile">Mobile Development</SelectItem>
                          <SelectItem value="analytics">Data Analytics</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={5} 
                          placeholder="Tell us about your project requirements..." 
                          {...field} 
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  disabled={contactMutation.isPending}
                  data-testid="button-submit-contact"
                >
                  {contactMutation.isPending ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
