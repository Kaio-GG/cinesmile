export const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ||
  (typeof window !== "undefined"
    ? window.location.origin
    : `https://${process.env.VERCEL_URL}`);




export async function buscarFilmeId(id: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/filme/${id}`, {
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

    const res = await fetch(`http://localhost:3000/api/favorito`, {
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

export async function buscarTodosFilmes() {
  try {
    const res = await fetch(`${baseUrl}/api/movies`, {
      cache: "no-store",
    });
    
    if (!res.ok) throw new Error("Erro ao buscar filmes");
    return res.json();
  } catch (error) {
    console.error("Erro na API buscarTodosFilmes:", error);
    return [];
  }
}


export async function buscarEpisodios(id: string) {
  try {
    const res = await fetch(`${baseUrl}/api/episodios/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export async function buscarNome(nome: string) {
  try {
    const res = await fetch(`${baseUrl}/api/busca?nome=${nome}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.log("Erro na resposta da API:", res.status);
      return [];
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error("Erro no fetch:", err);
    return [];
  }
}

export async function buscarGenero(genero: string) {
  const res = await fetch(`/api/buscaGenero?genero=${genero}`,
     { cache: "no-store" });
  return res.json();
}

