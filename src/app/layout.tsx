import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
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
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
