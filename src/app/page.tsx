"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/header";
import "./index.scss";
import Card from "@/components/card";
import { buscarNome, buscarTodosFilmes, buscarGenero } from "@/service/api";
import Loader from "@/components/loader";
import Icones from "@/components/footer";
import Image from "next/image";

interface Filme {
  image: { original: string };
  genres?: string[];
  id: number;
  name: string;
}

export default function Busca() {
  const [filmesBase, setFilmesBase] = useState<Filme[]>([]);
  const [carregando, setCarregando] = useState(false);
  const [pagina, setPagina] = useState(1);
  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");

  const limite = 30;

  useEffect(() => {
    async function carregarInicial() {
      setCarregando(true);
      try {
        const data = await buscarTodosFilmes();
        setFilmesBase(Array.isArray(data) ? data : [data]);
      } finally {
        setCarregando(false);
      }
    }
    carregarInicial();
  }, []);

  async function carregarFilmesNome() {
    if (!nome.trim()) return;
    setCarregando(true);
    try {
      const data = await buscarNome(nome);
      const filmes = Array.isArray(data)
        ? data.map((i: any) => (i.show ? i.show : i))
        : [data];
      setFilmesBase(filmes);
      setPagina(1);
    } finally {
      setCarregando(false);
    }
  }

  async function carregarFilmesGenero() {
    if (!genero.trim()) return;
    setCarregando(true);
    try {
      const data = await buscarGenero(genero);
      setFilmesBase(Array.isArray(data) ? data : [data]);
      setPagina(1);
    } finally {
      setCarregando(false);
    }
  }

  const totalPaginas = Math.max(1, Math.ceil(filmesBase.length / limite));
  const filmesPaginados = filmesBase.slice((pagina - 1) * limite, pagina * limite);

  return (
    <main className="pg-landing">
      <Header />

      <section className="series">
        <h2>BUSCAR</h2>

        <div className="org-input">
          <div className="caixa-input">
            <input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome"
            />
            <button className="btn-buscar" onClick={carregarFilmesNome}>
              <Image className="buscar" src="/assets/image/busca-branco.svg" alt="" height={20} width={50} />
            </button>
          </div>

          <div className="caixa-input">
            <input
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
              placeholder="Gênero"
            />
            <button className="btn-buscar" onClick={carregarFilmesGenero}>
              <Image className="buscar" src="/assets/image/busca-branco.svg" alt="" height={20} width={50} />
            </button>
          </div>
        </div>

        <h2>SÉRIES</h2>

        <div className="cards-container">
          {carregando ? (
              <Loader />
          ) : filmesPaginados.length > 0 ? (
            filmesPaginados.map((f) => (
              <Card key={f.id} id={f.id} titulo={f.name} imagem={f.image?.original || ""} />
            ))
          ) : (
            <p>Nenhum resultado encontrado.</p>
          )}
        </div>
      </section>

      <div className="nav">
        <button className="btn" disabled={pagina === 1} onClick={() => setPagina(pagina - 1)}>
          <Image src="/assets/image/seta-esquerda.svg" alt="" height={20} width={50} />
        </button>
        <span>{pagina}</span>
        <button className="btn" disabled={pagina === totalPaginas} onClick={() => setPagina(pagina + 1)}>
          <Image src="/assets/image/seta-direita.svg" alt="" height={20} width={50} />
        </button>
      </div>
      <Icones />
    </main>
  );
}
