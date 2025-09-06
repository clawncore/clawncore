import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Home from "@/pages/home";
import ServiceDetail from "@/pages/service-detail";
import Agriculture from "@/pages/agriculture";
import CloudComputing from "@/pages/cloud";
import Cybersecurity from "@/pages/cybersecurity";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/service/:serviceId" component={ServiceDetail} />
      <Route path="/agriculture" component={Agriculture} />
      <Route path="/cloud" component={CloudComputing} />
      <Route path="/cybersecurity" component={Cybersecurity} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
