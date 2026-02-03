import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["200", "300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Coach Accelerator",
  description:
    "Programa Done-With-You en 30 días para coaches fitness. Aprende a crear contenido estratégico que atrae clientes reales.",
  icons: {
    icon: "/images/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} font-sans antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
