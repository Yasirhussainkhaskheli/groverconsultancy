"use client";

import type { PropsWithChildren } from "react";

export function HelmetProvider({ children }: PropsWithChildren) {
  return children;
}

export function Helmet({ children }: PropsWithChildren) {
  return <>{children}</>;
}
