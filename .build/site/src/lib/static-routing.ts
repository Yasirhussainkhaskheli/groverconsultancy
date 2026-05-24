export function routeToStaticFile(route: string): string {
  if (!route || route === "/") {
    return "index.html";
  }

  const [pathname, hash = ""] = route.split("#");
  const normalized = pathname.replace(/^\/+|\/+$/g, "");

  let fileName = normalized
    .replace(/\//g, "-")
    .replace(/[^a-zA-Z0-9-_]/g, "-")
    .replace(/-+/g, "-")
    .toLowerCase();

  if (!fileName) {
    fileName = "index";
  }

  return `${fileName}.html${hash ? `#${hash}` : ""}`;
}

export function toStaticHref(href: string): string {
  if (!href) {
    return href;
  }

  if (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  ) {
    return href;
  }

  if (href.startsWith("#")) {
    return href;
  }

  return routeToStaticFile(href);
}

