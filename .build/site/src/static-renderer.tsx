import { HelmetProvider } from "react-helmet-async";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { StaticRouteProvider } from "wouter";
import Home from "@/site-pages/home";
import SolutionPage from "@/site-pages/solution";
import ServicePage from "@/site-pages/service";
import CountryPage from "@/site-pages/country";
import InsightsPage from "@/site-pages/insights";
import InsightPage from "@/site-pages/insight";
import PrivacyPage from "@/site-pages/privacy";
import TermsPage from "@/site-pages/terms";
import NotFound from "@/site-pages/not-found";

function getParamsForRoute(route: string) {
  const solutionMatch = route.match(/^\/solutions\/([^/]+)$/);
  if (solutionMatch) {
    return { slug: solutionMatch[1] };
  }

  const serviceMatch = route.match(/^\/services\/([^/]+)$/);
  if (serviceMatch) {
    return { slug: serviceMatch[1] };
  }

  const insightMatch = route.match(/^\/insights\/([^/]+)$/);
  if (insightMatch) {
    return { slug: insightMatch[1] };
  }

  return {};
}

function RoutePage({ route }: { route: string }) {
  if (route === "/") {
    return <Home />;
  }
  if (route === "/insights") {
    return <InsightsPage />;
  }
  if (route === "/privacy") {
    return <PrivacyPage />;
  }
  if (route === "/terms") {
    return <TermsPage />;
  }
  if (route === "/philippines" || route === "/indonesia") {
    return <CountryPage />;
  }
  if (/^\/solutions\/[^/]+$/.test(route)) {
    return <SolutionPage />;
  }
  if (/^\/services\/[^/]+$/.test(route)) {
    return <ServicePage />;
  }
  if (/^\/insights\/[^/]+$/.test(route)) {
    return <InsightPage />;
  }

  return <NotFound />;
}

export function StaticRenderer({ route }: { route: string }) {
  return (
    <HelmetProvider>
      <TooltipProvider>
        <StaticRouteProvider location={route} params={getParamsForRoute(route)}>
          <RoutePage route={route} />
          <Toaster />
        </StaticRouteProvider>
      </TooltipProvider>
    </HelmetProvider>
  );
}

