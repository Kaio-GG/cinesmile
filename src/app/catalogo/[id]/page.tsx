import Header from "@/components/header";
import Image from "next/image";
import "./index.scss";
import { buscarFilmeId, buscarEpisodios } from "@/service/api";
import Episodios from "@/components/episodios/[id]";
import Icones from "@/components/footer";


export default async function Filme({ params }: any) {
  const { id } = await params;
  const filme = await buscarFilmeId(id);
  const episodios = await buscarEpisodios(id);

  if (!filme) {
    return (
      <main className="pg-ingressos">
        <Header />
        <h3>Filme não encontrado</h3>
      </main>
    );
  }

  
  return (
    <main className="pg-ingressos">
      <Header />

      <div className="menu">
        <Image
          src={filme.image?.original || "/assets/image/sem-imagem.svg"}
          alt={`Cartaz do filme ${filme.name}`}
          height={540}
          width={400}
          className="cartaz"
        />

        <div className="horarios">
          <h4>INFORMAÇÕES:</h4>

          <div className="info">
            <div className="detalhes">
              <p><strong>Título:</strong> {filme.name}</p>
              <p><strong>Gênero:</strong> {filme.genres?.join(", ") || "—"}</p>
              <p><strong>Duração:</strong> {filme.runtime || "—"} min</p>
              <p><strong>Idioma:</strong> {filme.language || "—"}</p>
              <p><strong>Lançamento:</strong> {filme.premiered || "—"}</p>
              <p><strong>Nota IMDb:</strong> {filme.rating?.average || "—"}</p>
              <p><strong>Canal:</strong> {filme.network?.name || "—"}</p>
            </div>

            <div className="sinopse">
              <h4>SINOPSE:</h4>
              <p>{filme.summary?.replace(/<[^>]+>/g, "") || "Sinopse não disponível."}</p>
            </div>
          </div>

        </div>
      </div>
          {!!episodios?.length && (
            <div className="episodios">
              <Episodios episodios={episodios} />
            </div>
          )}
          <Icones/>
    </main>
  );
}
