import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SocialSidebar from "@/components/SocialSidebar";
import EmailSidebar from "@/components/EmailSidebar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aavash Kuikel | Full Stack Engineer",
  description:
    "Aavash Kuikel is a Full Stack Engineer shipping AI-powered solutions with React/TypeScript frontend, Spring Boot APIs & MongoDB.",
  keywords: [
    "Aavash Kuikel",
    "Full Stack Engineer",
    "Software Engineer",
    "React",
    "TypeScript",
    "Spring Boot",
    "AI",
    "Machine Learning",
  ],
  authors: [{ name: "Aavash Kuikel" }],
  openGraph: {
    title: "Aavash Kuikel | Full Stack Engineer",
    description:
      "Aavash Kuikel is a Full Stack Engineer shipping AI-powered solutions with React/TypeScript frontend, Spring Boot APIs & MongoDB.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${firaCode.variable}`}>
        <Header />
        <SocialSidebar />
        <EmailSidebar />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
