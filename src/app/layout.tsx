// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import CarregarPagina from "@/components/carregamentoPagina";

export const metadata: Metadata = {
  title: "CineSmile",
  icons: {
    icon: "/CS.svg",
  },
  description: "Busque filmes por nome, gênero e descubra novas produções.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>

        <CarregarPagina />

        {/* Conteúdo da página */}
        {children}
      </body>
    </html>
  );
}
