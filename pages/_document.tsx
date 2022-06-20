import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* google font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* custom font */}
        <link
          rel="preload"
          href="/fonts/NewYorkExtraLargeRegular.otf"
          as="font"
          type="font/opentype"
          crossOrigin="anonymous"
        />
      </Head>
      <body className="bg-white font-Inter text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
