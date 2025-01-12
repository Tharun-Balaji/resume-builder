import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      {/*
          html2pdf.js is loaded as a script tag here so that it is available when the user clicks the download button.
          It is loaded with the "beforeInteractive" strategy, which means that it will be loaded before the component is rendered.
          This is necessary because the component renders the PDF preview, but the PDF preview relies on the html2pdf.js library
          being loaded.
      */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" async=''  ></script>
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
