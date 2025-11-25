import React from "react";
import './index.scss';
import Image from "next/image";




export default function Promocao(){
    return (
        <main className="cp-promocao">
            <Image className="img" src="/assets/image/cartazPromocao.webp" alt="" width={1000} height={550}/>
            <div className="btn">Saber mais</div>
        </main>
    )
}