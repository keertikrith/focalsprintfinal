import type { Metadata } from "next";
import {  Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { siteConfig } from "./page";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mdTaquiImam.vercel.app"),
  title: {
    default: siteConfig.name,
    template: `%s - Software Engineer`,
  },
  description: siteConfig.description,

  // added new keywords for seo
  keywords: [
    "Focal Sprint",
    "focalsprint",
    "IT consulting",
    "IT training",
    "professional training",
    "tech consulting",
    "technology solutions",
    "business solutions",
    "innovation",
    "growth",
    "education",
    "customized solutions",
    "thought leadership",
    "business transformation",
    "solution architecture",
    "design",
    "Agile training",
    "Project Management training",
    "Scrum",
    "Kanban",
    "SAFe certifications",
    "leadership training",
    "Java",
    "Spring Boot",
    "Data Science",
    "AI",
    "ML",
    "Python",
    "DevOps",
    "AWS",
    "Azure",
    "cloud certifications",
    "online training",
    "classroom training",
    "Bangalore",
    "Chavin IT Solution Pvt Ltd",
    "IT solutions",
    "tech education",
    "consulting services",
    "business consulting",
    "expert guidance",
    "industry expertise",
    "client-centric",
    "cutting-edge solutions",
    "empower businesses",
    "empower individuals",
  ],
  authors: [
    {
      name: "Phani Prasad",
      url: "https://github.com/phanit.prasad",
    },
  ],
  creator: "Phani Prasad",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: "@Taquiimam14",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${rubik.variable}`}>
        <main
          className={cn(
            "flex  relative  break-words h-dvh min-h-screen items-center justify-center pt-10 pb-4 px-40 max-md:p-4 bg-transparent max-sm:pt-20 bg-[radial-gradient(#2f7df4_1px,transparent_1px)] [background-size:16px_16px]",
            { "bg-white": "#E6E7EB" }
          )}
        >
          {/* NAVBAR ->  */}
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
