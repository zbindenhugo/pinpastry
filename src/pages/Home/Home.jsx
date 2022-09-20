import { useEffect, useState } from "react";
import { datas } from "../Datas/datas";

export default function Home (){
    return(
        <div className="container p-5 text-center mx-auto">
            <header className="p-5 border-b border-slate-200 w-1/2 mx-auto">
                <div className="home-title text-6xl text-center">
                    Pin'Pastry
                </div>
                <div className="home-subtitle text-sm text-center italic text-gray-400 mt-2">
                    L'amour de la pâtisserie maison
                </div>
            </header>
            <main className="grid md:grid-cols-2 grid-cols-1 mx-auto mt-10">
                <section className="text-center">
                    <div className="">
                        Mon Titre
                    </div>
                    <div>
                    </div>
                </section>
                <section>
                    
                </section>
            </main>
            
        </div>
    )
};