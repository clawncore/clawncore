import React from 'react';
import { Header } from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ThemeToggle } from '../components/ui/theme-toggle';
import { useTheme } from '../contexts/ThemeContext';
import { Settings, Palette } from 'lucide-react';

export default function Profile() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
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
      </div>
    </div>
  );
}
