import { ThemeProvider } from "@/app/context/themeContext";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/app/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://usama-dev-portfolio.vercel.app"),
  title: "Usama Patel - Web Developer PortFolio",
  description:
    "Usama Patel's portfolio showcasing web development projects, skills in HTML, CSS, JavaScript, React, NextJs, Typescript and more. Available for freelance and full-time opportunities.",
  keywords:
    "web developer, front-end developer, HTML, CSS, JavaScript, React, portfolio, freelance web developer, full-stack developer, web development projects",
  openGraph: {
    title: "Usama Patel - Web Developer PortFolio",
    description:
      "Professional web development and IT services provider in Bharuch, Gujarat.",
    url: "https://usama-dev-portfolio.vercel.app",
    siteName: "Usama's PortFolio",
    images: [
      {
        url: "https://usama-dev-portfolio.vercel.app/public/PortFolio-Logo.svg",
        width: 800,
        height: 600,
        alt: "Usama's PortFolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@YourTwitterHandle",
    title: "Usama Patel's Twitter",
    description: "Expert Web Development and IT solutions in Bharuch, Gujarat.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Usama Patel" />
        <link rel="icon" href="/src/app/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Taj Consultancy Services",
              url: "usama-dev-portfolio.vercel.app",
              logo: "https://usama-dev-portfolio.vercel.app/public/PortFolio-Logo.svg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-XXXXXXXXXX",
                contactType: "Customer Service",
                areaServed: "IN",
                availableLanguage: "English",
              },
            }),
          }}
        />
      </Head>
      <body className={`${inter.className} MainBody`}>
        <ThemeProvider>
          <div style={{ minHeight: "100%" }}>
            <NavbarComponent />
            <div style={{ height: "calc(100% - 15vh)" }}>
              {children}
              <SpeedInsights />
              <Analytics />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
