import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { LoginModal } from "@/components/LoginModal";
import { useAuth } from "@/contexts/AuthContext";
import Home from "@/pages/home";
import ServiceDetail from "@/pages/service-detail";
import Agriculture from "@/pages/agriculture";
import CloudComputing from "@/pages/cloud";
import Cybersecurity from "@/pages/cybersecurity";
import ML from "@/pages/ml";
import DataAnalytics from "@/pages/data-analytics";
import GetStarted from "@/pages/get-started";
import Login from "@/pages/login";
import Profile from "@/pages/profile";
import NotFound from "@/pages/not-found";

function RouterWrapper() {
  const { loginModalOpen, setLoginModalOpen } = useAuth();

  // Handle GitHub Pages redirect
  if (typeof window !== 'undefined') {
    const redirect = sessionStorage.getItem('redirect');
    if (redirect) {
      sessionStorage.removeItem('redirect');
      // We don't need to do anything here as wouter will handle the route
    }
  }

  return (
    <Router base="">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/service/:serviceId" component={ServiceDetail} />
        <Route path="/agriculture" component={Agriculture} />
        <Route path="/cloud" component={CloudComputing} />
        <Route path="/cybersecurity" component={Cybersecurity} />
        <Route path="/ml" component={ML} />
        <Route path="/data-analytics" component={DataAnalytics} />
        <Route path="/get-started" component={GetStarted} />
        <Route component={NotFound} />
      </Switch>
      <LoginModal open={loginModalOpen} onOpenChange={setLoginModalOpen} />
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider>
          <TooltipProvider>
            <Toaster />
            <RouterWrapper />
          </TooltipProvider>
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;