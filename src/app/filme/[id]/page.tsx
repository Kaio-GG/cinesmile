import Header from "@/components/header";
import Image from "next/image";
import "./index.scss";
import { buscarFilmeId } from "@/service/api";

export default async function Filme(props: any) {
  const { id } = props.params;

  const filme = await buscarFilmeId(id); 
  
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
      <h3>FILME SELECIONADO</h3>

      <div className="menu">
        <Image
          src={filme.image?.original || "/assets/image/sem-imagem.svg"}
          alt={`Cartaz do filme ${filme.name}`}
          height={500}
          width={350}
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
    </main>
  );
}
