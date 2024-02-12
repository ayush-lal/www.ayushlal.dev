import type { Metadata } from "next";
import { cn } from "../lib/utils";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Ayush Lal | Full Stack Developer",
  description:
    "Ayush Lal is an innovative Full Stack Developer based in Gold Coast, Australia, specializing in creating dynamic, high-performance web applications using the latest technologies. With a passion for coding and a commitment to excellence, Ayush delivers exceptional solutions that drive business success.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isProd = process.env.NODE_ENV === "production";

  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>

        {isProd && (
          <script
            async
            src="https://analytics.intracode.com.au/script.js"
            data-website-id="8bd5e72f-46e0-41c2-a105-26fec6da2021"
          ></script>
        )}
      </body>
    </html>
  );
}
