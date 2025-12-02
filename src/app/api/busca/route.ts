export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const nome = searchParams.get("nome");

  if (!nome) {
    return Response.json({ erro: "Nome não informado" }, { status: 400 });
  }

  const res = await fetch(`https://api.tvmaze.com/search/shows?q=${nome}`);
  if (!res.ok) {
    return Response.json({ erro: "Erro externo" }, { status: 500 });
  }

  const data = await res.json();

  const filmes = data.map((item: any) => item.show);

  return Response.json(filmes);
}
