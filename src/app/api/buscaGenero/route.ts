// /app/api/busca-genero/route.ts

import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const genero = searchParams.get("genero");

  if (!genero) {
    return NextResponse.json({ erro: "Gênero obrigatório" }, { status: 400 });
  }

  const generoLower = genero.toLowerCase();
  let resultados: any[] = [];

  try {
    for (let page = 0; page < 10; page++) {
      const res = await fetch(`https://api.tvmaze.com/shows?page=${page}`);
      const data = await res.json();

      const filtrados = data.filter(
        (show: any) =>
          show.genres?.some((g: string) => g.toLowerCase() === generoLower)
      );

      resultados = [...resultados, ...filtrados];

    }

    return NextResponse.json(resultados);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ erro: "Erro interno" }, { status: 500 });
  }
}
