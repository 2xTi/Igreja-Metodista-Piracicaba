import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata: Metadata = {
  title: "Catedral Metodista de Piracicaba",
  description: "Igreja Metodista de Piracicaba - Um lugar de fé e comunhão.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`${inter.variable} ${lora.variable} font-sans antialiased bg-stone-50 text-stone-900 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
