import { preloader } from "html";
import { Html, Head, Main, NextScript } from "next/document";

const preloaderStyles: React.CSSProperties = {
  position: "absolute",
  zIndex: 10,
  transition: "0.5s all ease-in",
};

export default function Document() {
  return (
    <Html lang="en">
      <Head />
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
