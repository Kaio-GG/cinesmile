"use client";

import { getCookie, setCookie } from "cookies-next";

export function BotaoFavorito({ id }: { id: number }) {
  function toggleFavorito() {
    const cookie = getCookie("favoritos");
    const favoritos: number[] = cookie ? JSON.parse(cookie as string) : [];

    let atualizado: number[];

    if (favoritos.includes(id)) {
      atualizado = favoritos.filter(f => f !== id);
    } else {
      atualizado = [...favoritos, id];
    }

    setCookie("favoritos", JSON.stringify(atualizado), { maxAge: 60 * 60 * 24 * 30 }); // 30 dias
  }

  return (
    <button onClick={toggleFavorito}>
      ⭐ Favoritar
    </button>
  );
}
