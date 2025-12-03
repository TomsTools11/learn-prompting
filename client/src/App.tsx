import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ModuleListing from "@/pages/ModuleListing";
import ModuleDetail from "@/pages/ModuleDetail";
import LessonViewer from "@/pages/LessonViewer";
import TechniquesBrowser from "@/pages/TechniquesBrowser";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/modules" component={ModuleListing} />
      <Route path="/modules/:moduleId" component={ModuleDetail} />
      <Route path="/modules/:moduleId/lessons/:lessonId" component={LessonViewer} />
      <Route path="/techniques" component={TechniquesBrowser} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
