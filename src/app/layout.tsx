import type { Metadata } from "next";
import "./globals.css";  

export const metadata: Metadata = {
  title: "CineFinder",
  description: "Busque filmes por nome, gênero e descubra novas produções.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
