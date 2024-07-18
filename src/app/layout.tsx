import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/app/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: "#FFFFFF", overflow: "hidden scroll" }}>
        <div style={{ height: "100vh", backgroundColor: "#FFFFFF" }}>
          <div style={{ height: "15vh" }}>
            <NavbarComponent />
          </div>
          <div style={{ height: "84vh" }}>{children}</div>
        </div>
      </body>
    </html>
  );
}
