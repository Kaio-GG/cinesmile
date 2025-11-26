export const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!;

export async function buscarFilmeId(id: string) {
  try {
    const res = await fetch(`${baseUrl}/api/filme/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Erro ao buscar filme:", error);
    return null;
  }
}

export async function buscarFilmesFavoritos(ids: number[]) {
  try {
    if (!Array.isArray(ids) || ids.length === 0) return [];

    const res = await fetch(`${baseUrl}/api/favorito`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids }),
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.error("Erro na API buscarFilmesFavoritos:", error);
    return [];
  }
}

export async function buscarFilmes(nome: string, genero: string) {
  try {
    const params = new URLSearchParams({ nome, genero });

    const res = await fetch(`${baseUrl}/api/movies?${params.toString()}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Erro ao buscar filmes");
    return res.json();
  } catch (error) {
    console.error("Erro na API buscarFilmes:", error);
    return [];
  }
}
