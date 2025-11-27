
export async function buscarFilmes(nome: string, genero: string) {
  try {
    const params = new URLSearchParams({ nome, genero });

    const res = await fetch(`/api/movies?${params.toString()}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error(`Erro ao buscar filmes: ${res.status}`);
    return res.json();
  } catch (error) {
    console.error("Erro na API buscarFilmes:", error);
    return [];
  }
}

export async function buscarFilmeId(id: string) {
  try {
    const res = await fetch(`/api/filme/${id}`, { cache: "no-store" });
    if (!res.ok) throw new Error(`Filme não encontrado: ${res.status}`);
    return res.json();
  } catch (error) {
    console.error("Erro ao buscar filme por ID:", error);
    return null;
  }
}

export async function buscarFilmesFavoritos(ids: number[]) {
  try {
    if (!Array.isArray(ids) || ids.length === 0) return [];

    const res = await fetch(`/api/favorito`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids }),
      cache: "no-store",
    });

    if (!res.ok) throw new Error(`Erro ao buscar favoritos: ${res.status}`);
    return res.json();
  } catch (error) {
    console.error("Erro na API buscarFilmesFavoritos:", error);
    return [];
  }
}
