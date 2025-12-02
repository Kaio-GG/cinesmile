"use client";
import React, { JSX, useState } from "react";
import "./index.scss";

type Ep = {
  id: number;
  season: number;
  number: number;
  name: string;
  [k: string]: any;
};

export default function Episodios({ episodios }: { episodios: Ep[] }): JSX.Element {

  const temporadas = episodios.reduce<Record<number, Ep[]>>((acc, ep) => {
    const s = Number(ep.season ?? 0);
    if (!acc[s]) acc[s] = [];
    acc[s].push(ep);
    return acc;
  }, {});
  
  const seasons = Object.keys(temporadas)
    .map((k) => Number(k))
    .sort((a, b) => a - b);

  const [aberta, setAberta] = useState<number | null>(null);

  return (
    <div className="episodios-container">
      {seasons.map((temporada) => (
        <div className="temporada" key={temporada}>
          <button
            className="btn-temporada"
            onClick={() => setAberta(aberta === temporada ? null : temporada)}
            aria-expanded={aberta === temporada}
            aria-controls={`temp-${temporada}`}
          >
            Temporada {temporada}
          </button>

          {aberta === temporada && (
            <ul id={`temp-${temporada}`} className="lista-episodios">
              {temporadas[temporada].map((ep) => (
                <li key={ep.id}>
                  <div className="ep-title">
                    {ep.number} — {ep.name || "Sem título"}
                  </div>

                  {ep.summary && (
                    <div
                      className="ep-summary"
                      dangerouslySetInnerHTML={{ __html: ep.summary }}
                    />
                  )}
                </li>
              ))}

            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
