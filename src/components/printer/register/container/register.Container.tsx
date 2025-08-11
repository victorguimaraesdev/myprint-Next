"use client"
import { useState } from "react"
import { RegisterInputs } from "../inputs/register.Inputs";

export const PrinterRegister = () => {
    
    const [name, setName] = useState ('');
    const [toner, setToner] = useState('');
    const [drum, setDrum] = useState('');
    const [unity,setUnity] = useState(''); 
    const [sector,setSector] = useState('');

    return (
         <div className="flex flex-row h-[90px] gap-2 p-1 w-[800px] bg-[var(--primary)] rounded-lg">
            <div className="flex flex-col w-1/2 gap-2">
                <RegisterInputs placeholder="Nome:" item={name} setProp={setName}/>
                <RegisterInputs placeholder="Toner:" item={toner} setProp={setToner}/>
                <RegisterInputs placeholder="Drum:" item={drum} setProp={setDrum}/>
            </div>
            <div className="flex flex-col w-1/2 gap-2">
                <RegisterInputs placeholder="Unidade:" item={unity} setProp={setUnity}/>
                <RegisterInputs placeholder="Setor:" item={sector} setProp={setSector}/>
                <div className="flex flex-col w-full justify-center items-center">
                    <button type="submit" 
                    className="w-full bg-[var(--supp2)] text-[#d6d6d6] font-bold rounded-lg">Registar</button>
                </div>
            </div>
        </div>
    )
}