import type { Metadata } from "next";
import { montserrat300 } from "./fonts/montserrat";
import "./globals.css";
import { ThemeProvider } from "./provider";
import logo from "./assets/logo-no-bg.png"


export const metadata: Metadata = {
  title: "Karthik | Portfolio",
  description: "Modern Minimalistic portfolio - Karthik J",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="./assets/logo-no-bg.png" sizes="any" />
      </head>
      <body className={montserrat300.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
