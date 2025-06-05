import Providers from "@/providers";

import type { Metadata } from "next";

import NavBar from "@/components/Nav";
import SiteWrap from "@/components/SiteWrap";

import "./globals.css";

export const metadata: Metadata = {
  title: "Eskfolio",
  description:
    "Step into a world where every scroll is a quest. I’m a frontend developer who turns interfaces into adventures.",
  keywords: [
    "Frontend Developer",
    "Portfolio",
    "Gamified Website",
    "Interactive Portfolio",
    "React Developer",
    "GSAP Animation",
    "Next.js",
    "Tailwind CSS",
    "Eskalifer",
  ],
  authors: [{ name: "Eskalifer" }],
  creator: "Eskalifer",
  openGraph: {
    title: "Eskalifer – Game-Inspired Frontend Developer Portfolio",
    description:
      "This isn’t just a website. It’s a level you explore, not just scroll through.",
    siteName: "Eskalifer Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eskalifer – Game-Inspired Frontend Portfolio",
    description:
      "Interactive. Animated. Unforgettable. Explore my frontend world.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className="antialiased">
          <SiteWrap>
            <NavBar />
            {children}
          </SiteWrap>
        </body>
      </Providers>
    </html>
  );
}
