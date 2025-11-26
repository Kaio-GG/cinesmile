import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  context: { params: { id: string } }
) {
  const id = context.params.id;

  try {
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);

    if (!res.ok) {
      return NextResponse.json(
        { error: "Erro ao buscar dados na API externa" },
        { status: 500 }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro interno no servidor", details: String(error) },
      { status: 500 }
    );
  }
}
