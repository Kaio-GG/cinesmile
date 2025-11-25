import { NextResponse } from "next/server";

type TvMazeShowBase = {
  id: number;
  name: string;
  image?: { medium?: string; original?: string };
  genres: string[];
  premiered?: string;
};

type TvMazeSearchResult = {
  score: number;
  show: TvMazeShowBase;
};

const normalizar = (valor: string): string =>
  valor
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[aeiou]/g, "");

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const nome = searchParams.get("nome") ?? "";
  const genero = searchParams.get("genero") ?? "";

  let shows: TvMazeShowBase[] = [];

  try {

    if (nome) {
      const res = await fetch(
        `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(nome)}`
      );
      const dataApi: TvMazeSearchResult[] = await res.json();
      shows = dataApi.map((item) => item.show);

      const allRes = await fetch("https://api.tvmaze.com/shows");
      const todos: TvMazeShowBase[] = await allRes.json();
      const alvo = normalizar(nome);

      const extras = todos.filter((show) =>
        normalizar(show.name).includes(alvo)
      );

      const ids = new Set(shows.map((s) => s.id));
      extras.forEach((s) => !ids.has(s.id) && shows.push(s));
    }

    else {
      const allRes = await fetch("https://api.tvmaze.com/shows");
      shows = await allRes.json();
    }

    const filtrados = shows.filter((show) => {
      const generoOk = genero
        ? show.genres.some((g) =>
            g.toLowerCase().includes(genero.toLowerCase())
          )
        : true;

      return generoOk;
    });

    return NextResponse.json(filtrados);
  } catch (error) {
    console.error("Erro na API:", error);
    return NextResponse.json(
      { error: "Erro ao buscar dados" },
      { status: 500 }
    );
  }
}
