import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);

    if (!res.ok) {
      return NextResponse.json(
        { error: "Erro ao buscar dados na API externa" },
        { status: 500 }
      );
    }

    const data = await res.json();
    return NextResponse.json(data, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      { error: "Erro interno no servidor", details: String(error) },
      { status: 500 }
    );
  }
}
