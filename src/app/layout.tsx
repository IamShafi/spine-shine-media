import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Initialize poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], // choose weights you need
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Spine Shine Media",
  description: "Advanced DC & Medical Clinics looking for high quality patients...",
  authors: [{ name: "Spine Shine Media", url: "https://spineshinemedia.com" }],
  openGraph: {
    type: "website",
    title: "Spine Shine Media",
    description: "Advanced DC & Medical Clinics looking for high quality patients...",
    url: "https://spineshinemedia.com",
    siteName: "Spine Shine Media",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
