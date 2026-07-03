import type { Metadata } from "next";
import "./globals.css";
import { WEBINAR_CONFIG } from "@/config/webinar";

export const metadata: Metadata = {
  title: WEBINAR_CONFIG.meta.title,
  description: WEBINAR_CONFIG.meta.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
