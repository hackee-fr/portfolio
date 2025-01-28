import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Anek_Telugu } from 'next/font/google';
import "./globals.css";

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Portfolio • Trystan LEGRAND-SIMON",
  description:"Découvrez le portfolio de Trystan LEGRAND-SIMON, Administrateur Système et Réseau, Développeur Web & FiveM et Créateur 3D passionné. Explorez mes projets, compétences et plus encore.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          AnekTelugu.variable,
          "font-sans h-full bg-background text-foreground"
        )}
      >
        {children}
      </body>
    </html>
  );
}
