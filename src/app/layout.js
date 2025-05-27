import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "NukeGuy's Handpicked Boilerplate",
  description: "A modern Next.js 15 boilerplate with Material UI, Tailwind CSS, Supabase, and Prisma",
  keywords: "Next.js, React, Material UI, Tailwind CSS, Supabase, Prisma, Boilerplate",
  authors: [{ name: "NukeGuy" }],
  creator: "NukeGuy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
