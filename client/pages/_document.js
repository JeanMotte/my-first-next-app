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
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
