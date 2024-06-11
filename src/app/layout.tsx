import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { AppProvider } from "./provider";
import { Header } from "./_components/_header/header/header";
import { MobileHeader } from "./_components/_header/mobileHeader/mobileHeader";
import { Navigation } from "./_components/_navigation/navigation/navigation";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Blue Mage Spell Tracker",
  description: "Locate and track your spells",
  icons: [{ rel: "icon", url: "/images/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "h-screen w-screen bg-background font-sans text-foreground",
          fontSans.variable,
        )}
      >
        <AppProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <div className="flex h-full w-full flex-col">
              <Header />
              <MobileHeader />
              <div className="h-px w-screen bg-border"></div>
              <div className="flex sm:h-[calc(100vh-6rem-1px)]">
                <div className="mx-auto flex min-w-0 max-w-7xl grow flex-col sm:flex-row sm:py-6">
                  <Navigation />
                  {children}
                </div>
              </div>
            </div>
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
