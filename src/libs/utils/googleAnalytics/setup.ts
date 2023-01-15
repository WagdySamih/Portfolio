export const GA_SRC_LINK = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`;

import { window, Event } from "./constants";

export const googleAnalyticsInit = () => {
  return `window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "${process.env.NEXT_PUBLIC_MEASUREMENT_ID}", {
    page_path: window.location.pathname,
  });`;
};

// Log pages view
// It's only one so we won't add its link :3
export const pageView = () => {
  if (!window) return;
  window.gtag("config", process.env.NEXT_PUBLIC_MEASUREMENT_ID);
};

// Log specific events happening.
export const event = ({ action, params }: Event) => {
  if (!window) return;
  window.gtag("event", action, params);
};
