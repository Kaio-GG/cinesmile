"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "./index.scss";

interface Cartaz {
  id: number;
  nome: string;
  imagemUrl: string;
}

interface TvMazeShow {
  score: number;
  show: {
    id: number;
    name: string;
    image?: { medium?: string; original?: string };
  };
}

interface CarrosselCartazesProps {
  nome: string;
  genero: string;
  dataLancamento: string;
}

const CarrosselCartazes: React.FC<CarrosselCartazesProps> = ({ nome, genero, dataLancamento }) => {
  const [listaCartazes, setListaCartazes] = useState<Cartaz[]>([]);
  const carrosselRef = useRef<HTMLDivElement>(null);

  function moverCarrossel(direcao: "esquerda" | "direita") {
    if (carrosselRef.current) {
      const scroll = carrosselRef.current.clientWidth;
      carrosselRef.current.scrollBy({
        left: direcao === "esquerda" ? -scroll : scroll,
        behavior: "smooth",
      });
    }
  }

  useEffect(() => {
    async function carregarFilmes() {
      try {
        let termoBusca = "filme";

        if (nome) termoBusca = nome;
        else if (genero) termoBusca = genero;
        else if (dataLancamento) termoBusca = dataLancamento;

        const res = await fetch(`/api/movies?q=${encodeURIComponent(termoBusca)}`);
        const data: TvMazeShow[] = await res.json();

        const filmes: Cartaz[] = data.map((item) => ({
          id: item.show.id,
          nome: item.show.name,
          imagemUrl: item.show.image?.medium || "/assets/image/sem-imagem.svg",
        }));

        setListaCartazes(filmes);
      } catch (error) {
        console.error("Erro ao carregar filmes:", error);
      }
    }

    carregarFilmes();
  }, [nome, genero, dataLancamento]); 
  return (
    <main className="main-carrossel">
      <div className="cp-carrossel">
        <button
          className="btn-setaEsquerda"
          onClick={() => moverCarrossel("esquerda")}
        ></button>

        <div className="carrossel-container" ref={carrosselRef}>
          {listaCartazes.map((cartaz) => (
            <section key={cartaz.id} className="card-carrossel">
              <Link href={`/filme/${cartaz.id}`}>
                <Image
                  src={cartaz.imagemUrl}
                  alt={cartaz.nome}
                  width={370}
                  height={370}
                />
              </Link>
            </section>
          ))}
        </div>

        <button
          className="btn-setaDireita"
          onClick={() => moverCarrossel("direita")}
        ></button>
      </div>
    </main>
  );
};

export default CarrosselCartazes;
