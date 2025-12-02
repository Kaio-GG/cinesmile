



export async function GET() {
  try {
    const res = await fetch("https://api.tvmaze.com/shows?page=0");
    const shows = await res.json();
    return Response.json(shows);
  } catch (error) {
    return Response.json({ error: "Erro ao buscar dados" }, { status: 500 });
  }
}