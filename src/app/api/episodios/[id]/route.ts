import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: any }
) {
  const id = params.id;


  try {
    const res = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`);

    if (!res.ok) {
      return NextResponse.json(
        { error: "não foi possível buscar episódios" },
        { status: 500 }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (erro: any) {
    return NextResponse.json(
      { error: "Erro interno no servidor", details: String(erro) },
      { status: 500 }
    );
  }
}
