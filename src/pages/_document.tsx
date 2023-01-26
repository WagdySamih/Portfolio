import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

import { preloader } from "@html";
import { GA_SRC_LINK, googleAnalyticsInit } from "@libs";

const preloaderStyles: React.CSSProperties = {
  position: "absolute",
  zIndex: 10,
  transition: "0.5s all ease-in",
};

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script strategy="lazyOnload" src={GA_SRC_LINK} />
        <Script id="google-analytics" strategy="lazyOnload">
          {googleAnalyticsInit()}
        </Script>
      </Head>
      <body style={{ overflow: "hidden", maxHeight: "100vh" }}>
        <div
          id="preloader"
          style={preloaderStyles}
          dangerouslySetInnerHTML={{
            __html: preloader,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
