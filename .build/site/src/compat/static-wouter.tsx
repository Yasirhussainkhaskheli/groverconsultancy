import type { AnchorHTMLAttributes, PropsWithChildren } from "react";
import { createContext, useContext } from "react";
import { toStaticHref } from "@/lib/static-routing";

type StaticRouteValue = {
  location: string;
  params: Record<string, string>;
};

const StaticRouteContext = createContext<StaticRouteValue>({
  location: "/",
  params: {},
});

export function StaticRouteProvider({
  children,
  location,
  params,
}: PropsWithChildren<StaticRouteValue>) {
  return (
    <StaticRouteContext.Provider value={{ location, params }}>
      {children}
    </StaticRouteContext.Provider>
  );
}

export function Router({ children }: PropsWithChildren<{ base?: string }>) {
  return children;
}

export function Switch({ children }: PropsWithChildren) {
  return children;
}

export function Route({ component: Component }: { path?: string; component: React.ComponentType }) {
  return <Component />;
}

export function useLocation(): [string] {
  const { location } = useContext(StaticRouteContext);
  return [location];
}

export function useParams<T extends Record<string, string>>() {
  const { params } = useContext(StaticRouteContext);
  return params as T;
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function Link({ href, children, ...props }: LinkProps) {
  return (
    <a href={toStaticHref(href)} {...props}>
      {children}
    </a>
  );
}

