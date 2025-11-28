import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json({ error: "API TVMaze falhou" }, { status: 500 });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Erro interno", details: String(err) },
      { status: 500 }
    );
  }
}
