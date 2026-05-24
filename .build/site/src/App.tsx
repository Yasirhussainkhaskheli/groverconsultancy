"use client";

import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/site-pages/home";
import SolutionPage from "@/site-pages/solution";
import ServicePage from "@/site-pages/service";
import CountryPage from "@/site-pages/country";
import InsightsPage from "@/site-pages/insights";
import InsightPage from "@/site-pages/insight";
import PrivacyPage from "@/site-pages/privacy";
import TermsPage from "@/site-pages/terms";
import NotFound from "@/site-pages/not-found";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/solutions/:slug" component={SolutionPage} />
        <Route path="/services/:slug" component={ServicePage} />
        <Route path="/philippines" component={CountryPage} />
        <Route path="/indonesia" component={CountryPage} />
        <Route path="/insights" component={InsightsPage} />
        <Route path="/insights/:slug" component={InsightPage} />
        <Route path="/privacy" component={PrivacyPage} />
        <Route path="/terms" component={TermsPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base="">
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
