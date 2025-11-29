"use client";
import React, { useState, useEffect } from "react";
import "./index.scss";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  titulo: string;
  imagem: string;
  id: number;
}

export default function Card({ titulo, imagem, id }: CardProps) {
  const [favorito, setFavorito] = useState(false);

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((c) => c.startsWith("favoritos="));

    if (cookie) {
      const lista = JSON.parse(cookie.split("=")[1]);
      setFavorito(lista.includes(id));
    }
  }, [id]);

  function alternarFavorito(e: React.MouseEvent) {
    e.preventDefault();

    const cookie = document.cookie
      .split("; ")
      .find((c) => c.startsWith("favoritos="));

    let lista = cookie ? JSON.parse(cookie.split("=")[1]) : [];

    if (lista.includes(id)) {
      lista = lista.filter((item: number) => item !== id);
      setFavorito(false);
    } else {
      lista.push(id);
      setFavorito(true);
    }

    document.cookie = `favoritos=${JSON.stringify(lista)}; path=/; max-age=2592000`;
  }

  return (
    <Link href={`/filme/${id}`} className="cp-card-opcoes">
      <div className="img-container">
        <Image
          src={imagem}
          alt={titulo}  
          width={272}
          height={370}
          className="poster"
        />

        <Image
          src={
            favorito
              ? "/assets/image/Star-cheio.svg"
              : "/assets/image/Star-vazia.svg"
          }
          height={50}
          width={50}
          alt="Favorito"
          className="icone-favorito"
          onClick={alternarFavorito}
        />
      </div>
    </Link>
  );
}
