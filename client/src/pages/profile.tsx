import React, { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { Header } from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useTheme } from '@/contexts/ThemeContext';
import { User, Settings, Palette } from 'lucide-react';

export default function Profile() {
  const { toast } = useToast();
  const { isAuthenticated, isLoading, user } = useAuth();
  const { theme } = useTheme();

  // Redirect to home if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      toast({
        title: "Unauthorized",
        description: "You are logged out. Logging in again...",
        variant: "destructive",
      });
      setTimeout(() => {
        window.location.href = "/api/login";
      }, 500);
      return;
    }
  }, [isAuthenticated, isLoading, toast]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Profile Header */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={user.profileImageUrl} alt={user.firstName || 'User'} />
                  <AvatarFallback className="text-2xl">
                    {user.firstName?.[0] || user.email?.[0] || 'U'}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold" data-testid="text-user-name">
                    {user.firstName && user.lastName 
                      ? `${user.firstName} ${user.lastName}` 
                      : user.email
                    }
                  </h1>
                  <p className="text-muted-foreground" data-testid="text-user-email">{user.email}</p>
                  <div className="mt-2">
                    <Badge variant="secondary">Premium Member</Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Account Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Account Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">First Name</label>
                  <p className="font-medium" data-testid="text-firstName">
                    {user.firstName || 'Not provided'}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Last Name</label>
                  <p className="font-medium" data-testid="text-lastName">
                    {user.lastName || 'Not provided'}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Email</label>
                  <p className="font-medium" data-testid="text-email">{user.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Member Since</label>
                  <p className="font-medium" data-testid="text-memberSince">
                    {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Unknown'}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Palette className="h-5 w-5" />
                    <div>
                      <p className="font-medium">Theme</p>
                      <p className="text-sm text-muted-foreground">
                        Current: {theme === 'dark' ? 'Dark' : 'Light'}
                      </p>
                    </div>
                  </div>
                  <ThemeToggle />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <p>No recent activity to display.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
