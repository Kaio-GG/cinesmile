"use client";

import React from "react";
import './index.scss'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header(){
  const path = usePathname(); 

  return (
    <main className="cp-header">    
      <div className="pt-cima">
        <Link href="/">
          <Image src="/assets/image/CineSmile.svg" alt="" width={120} height={50}/>
        </Link>
      </div>

      <div className="pt-baixo">
        <div className="org">
          <Link href="/" className={path === "/" ? "active" : ""}>Home</Link>
          <Link href="/favoritos" className={path === "/favoritos" ? "active" : ""}>Favoritos</Link>
        </div>
      </div>
    </main>
  );
}
