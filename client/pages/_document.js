import { Html, Head, Main, NextScript } from "next/document";
import NavbarPerso from "@/components/NavbarPerso";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="bg-neutral-400">
          <NavbarPerso />
        </div>
        <div className="mt-8">
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
