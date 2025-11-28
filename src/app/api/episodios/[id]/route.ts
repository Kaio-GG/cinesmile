import { NextResponse } from "next/server";



export async function GET(
    _request: Request,
    {params}: {params: {id: string}}
    ) {
    try{
        console.log(params.id);
        const res =  await fetch(`https://api.tvmaze.com/shows/${params.id}/episodes`);

        if(!res.ok) {
            return NextResponse.json(
                {erro: "nao foi possivel buscar"},
                {status: 500}
            )
        }

        const data = await res.json();
        return NextResponse.json(data);
    }catch(erro){
        return NextResponse.json(
      { error: "Erro interno no servidor", details: String(erro) },
      { status: 500 }
    );
    }
}