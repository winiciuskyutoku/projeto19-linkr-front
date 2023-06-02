import { useContext } from "react";
import { GuestContext } from "../context/GuestContext.jsx";

export function GuestContextHook (){
    const context = useContext(GuestContext)

    if (context === undefined)
    throw  new Error ('Não está dentro do contexto')

    return context
}

export default GuestContextHook