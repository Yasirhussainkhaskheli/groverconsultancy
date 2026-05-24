const shortDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

const longDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

export function formatShortDate(value: string) {
  return shortDateFormatter.format(new Date(value));
}

export function formatLongDate(value: string) {
  return longDateFormatter.format(new Date(value));
}
