import { useEffect, useState } from "react";
import { datas } from "../Datas/datas";

export default function Pastries() {
    const [pastries, setPastries] = useState([])

    useEffect(() => {
        setPastries(datas);
    })


    return(
        <div>
            <div>
                {

                }
            </div>
            <div>
                
            </div>
        </div>
    )
}   