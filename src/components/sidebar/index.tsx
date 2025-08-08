
export const  SideBar = () => {
    return (
        <div className="flex flex-col h-full gap-10 justify-center items-center w-[300px] bg-[#1b2135] text-[var(--supp1)]">
            <div className="flex flex-col items-center gap-1 ">
                <img src="assets/logo/logo.png" alt="logo" className="h-[60px] w-auto" />
                <h1 className="font-bold text-[12px]">MyPrint.project</h1>
                <h1 className="font-bold text-[7px]  text-white">Create by: Victor Guimarães</h1>
            </div>
            <nav className="flex flex-col gap-4 h-40 w-full items-center " >
                <div className="flex flex-row gap-2  w-[160px] cursor-pointer hover:bg-[var(--hoverSide)] ">
                    <div className="flex flex-row w-[40px] ">
                        <img src="assets/icons/dashboard.png" alt="home" className="h-[25px] w-auto" />
                    </div>
                    <span className="font-bold">Dashboard</span>
                </div>
                 <div className="flex flex-row gap-2 w-[160px] cursor-pointer hover:bg-[var(--hoverSide)]">
                    <div className="flex flex-row w-[40px] ">
                     <img src="assets/icons/printer.png" alt="home" className="h-[25px] w-auto" />
                    </div>
                    <span className="font-bold">Impressoras</span>
                </div>
                 <div className="flex flex-row gap-2 w-[160px] cursor-pointer hover:bg-[var(--hoverSide)] ">
                    <div className="flex flex-row w-[40px] ">
                    <img src="assets/icons/toner.png" alt="home" className="h-[25px] w-auto" />
                    </div>
                    <span className="font-bold">Toners</span>
                </div>
                 <div className="flex flex-row gap-2 w-[160px] cursor-pointer hover:bg-[var(--hoverSide)]">
                    <div className="flex flex-row w-[40px]">
                        <img src="assets/icons/cylinder.png" alt="home" className="h-[25px] w-auto" />
                    </div>
                    <span className="font-bold">Drums</span>
                </div>
            </nav>
            <div className="flex flex-row gap-2 w-[160px] cursor-pointer hover:bg-[var(--hoverSide)] ">
                <div className="flex flex-row w-[40px]">
                        <img src="assets/icons/out.png" alt="home" className="h-[25px] w-auto" />
                </div>
                    <span className="font-bold">Sair</span>
            </div>
            <div className="h-[1px] w-full mt-15"></div>
        </div> 
    )
}
