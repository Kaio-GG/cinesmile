"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "./loading.scss";

export default function CarregarPagina() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="loading-container">
      <Image src="/assets/image/CineSmile.svg" alt="Logo" width={300} height={200} />
      <div className="signature">Created by Kaio GG</div>
    </div>
  );
}
