"use client"
import { useState } from "react"

export const Register = () => {
    const [name, setName] = useState ('');
    const [toner, setToner] = useState('');
    const [drum, setDrum] = useState('');
    const [unidade,setUnidade] = useState(''); 
    const [setor,setSetor] = useState('');

     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value); 
    };

    return (
         <div className="flex flex-row h-[90px] gap-2 p-1 w-[800px] bg-[var(--primary)] rounded-lg">
            <div className="flex flex-col w-1/2 gap-2">
                <div className="flex flex-col w-full justify-center items-center">
                    <input 
                    type="text"
                    placeholder="Nome:" 
                    value={name}
                    onChange={handleChange}
                     className="w-full bg-[#282f47] text-white rounded-lg
                    placeholder:text-[#5f667e] text-[15px] pl-2" />
                </div>
                <div className="flex flex-col w-full justify-center items-center">
                    <input 
                    type="text"
                    placeholder="Unidade:" 
                    value={unidade}
                    onChange={handleChange}
                    className="w-full bg-[#282f47] text-white rounded-lg
                    placeholder:text-[#5f667e] text-[15px] pl-2" />
                </div>
                 <div className="flex flex-col w-full justify-center items-center">
                    <input 
                    type="text"
                    placeholder="Setor:" 
                    value={setor}
                    onChange={handleChange}
                    className="w-full bg-[#282f47] text-white rounded-lg
                    placeholder:text-[#5f667e] text-[15px] pl-2" />
                </div>
            </div>
            <div className="flex flex-col w-1/2 gap-2">
                <div className="flex flex-col w-full justify-center items-center">
                    <input 
                    type="text"
                    placeholder="Toner:" 
                    value={toner}
                    onChange={handleChange}
                    className="w-full bg-[#282f47] text-white rounded-lg
                    placeholder:text-[#5f667e] text-[15px] pl-2" />
                </div>
                <div className="flex flex-col w-full justify-center items-center">
                    <input 
                    type="text"
                    placeholder="Drum:" 
                    value={drum}
                    onChange={handleChange}
                    className="w-full bg-[#282f47] text-white rounded-lg
                    placeholder:text-[#5f667e] text-[15px] pl-2" />
                </div>
                <div className="flex flex-col w-full justify-center items-center">
                    <button type="submit" 
                    className="w-full bg-[var(--supp2)] text-[#d6d6d6] font-bold rounded-lg">Registar</button>
                </div>
            </div>
        </div>
    )
}