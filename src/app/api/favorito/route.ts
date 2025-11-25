import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const { ids } = await req.json();

    if (!Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json([]);
    }

    const resultados = await Promise.all(
      ids.map(async (id) => {
        const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
        if (!res.ok) return null;
        const dados = await res.json();

        return {
          id: dados.id,
          title: dados.name,
          image:
            dados.image?.original ||
            dados.image?.medium ||
            "/assets/image/sem-imagem.svg",
        };
      })
    );

    const filtrados = resultados.filter(Boolean);

    return NextResponse.json(filtrados);
  } catch (error) {
    console.error("Erro na busca de favoritos:", error);
    return NextResponse.json(
      { error: "Erro ao carregar filmes" },
      { status: 500 }
    );
  }
}
