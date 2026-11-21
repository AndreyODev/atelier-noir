import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const editorialFont = localFont({
  src: "./fonts/cormorant-garamond-latin.woff2",
  variable: "--font-editorial",
  weight: "300 500",
  display: "swap",
});

const interfaceFont = localFont({
  src: "./fonts/dm-sans-latin.woff2",
  variable: "--font-interface",
  weight: "400 600",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ATELIER NOIR | Moda feminina autoral",
  description:
    "Peças atemporais para mulheres que encontram elegância em cada detalhe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${editorialFont.variable} ${interfaceFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
