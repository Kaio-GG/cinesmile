"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/header";
import "./index.scss";
import Card from "@/components/card";
import { buscarFilmes } from "@/service/api";
import Loader from "@/components/loader";

interface Filme {
  id: number;
  nome: string;
  imagemUrl: string;
}

export default function Busca() {
  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [filmes, setFilmes] = useState<Filme[]>([]);
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    async function carregarFilmes() {
      setCarregando(true);

      const data = await buscarFilmes(nome, genero);

      const lista: Filme[] = data.map((s: any) => ({
        id: s.id,
        nome: s.name,
        imagemUrl: s.image?.medium || "/assets/image/sem-imagem.svg",
      }));

      setFilmes(lista);
      setCarregando(false);
    }

    carregarFilmes();
  }, [nome, genero]);

  return (
    <main className="pg-landing">
      <Header />

      <section className="fltros">
        <h2>FILTRO</h2>
        <div className="fillinput">
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
          />
          <input
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            placeholder="Gênero"
          />
        </div>
      </section>

      <section className="filmes">
        <h2>FILMES</h2>
        <div className="cards-container">
          {carregando ? (
            <Loader/>
          ) : filmes.length > 0 ? (
            filmes.map((f) => (
              <Card key={f.id} id={f.id} titulo={f.nome} imagem={f.imagemUrl} />
            ))
          ) : (
            <p>
              <br />
              <br />
              Nenhum resultado encontrado.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
