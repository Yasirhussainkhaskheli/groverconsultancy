"use client";

import NextLink from "next/link";
import { useParams as useNextParams, usePathname } from "next/navigation";
import type { ComponentProps, PropsWithChildren } from "react";

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
  return [usePathname() ?? "/"];
}

export function useParams<T extends Record<string, string>>() {
  return useNextParams() as T;
}

type LinkProps = Omit<ComponentProps<typeof NextLink>, "href"> & {
  href: string;
};

export function LinkComponent({ href, children, ...props }: LinkProps) {
  return (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  );
}

export { LinkComponent as Link };
