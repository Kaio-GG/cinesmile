import Header from "@/components/header";
import Card from "@/components/card";
import { cookies } from "next/headers";
import "./index.scss";
import { buscarFilmesFavoritos } from "@/service/api";

interface FilmeFavorito {
  id: number;
  title: string;
  image: string;
}

export const dynamic = "force-dynamic";

export default async function Favoritos() {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("favoritos");
  const listaIds: number[] = cookie ? JSON.parse(cookie.value) : [];

  let filmes: FilmeFavorito[] = [];

if (listaIds.length > 0) {
  filmes = await buscarFilmesFavoritos(listaIds);
}

  return (
    <main className="pg-favoritos">
      <Header />

      <section className="conteudo">
        <h2>FAVORITOS</h2>

        {filmes.length === 0 ? (
          <p className="mensagem-vazia">Você ainda não adicionou nenhum favorito ⭐</p>
        ) : (
          <div className="lista-cards">
            {filmes.map((f) => (
              <div key={f.id} className="item-fav">
                <Card id={f.id} titulo={f.title} imagem={f.image} />
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
