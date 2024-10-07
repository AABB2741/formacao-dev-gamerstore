import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const font = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gam3r.store",
  description: "Versão completa da loja Gam3r.store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="overflow-x-hidden">
      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
