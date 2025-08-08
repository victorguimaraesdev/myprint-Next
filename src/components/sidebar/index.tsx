
export default function SideBar () {
    return (
        <div className="flex flex-col h-full justify-around items-center w-[300px] bg-[#1b2135] text-[var(--supp1)]">
            <div className="flex flex-col items-center gap-1">
                <img src="assets/logo/logo.png" alt="logo" className="h-[60px] w-auto" />
                <h1 className="font-bold text-2xl">MyPrint</h1>
            </div>
            <nav className="flex flex-col gap-4 h-50 w-full items-center" >
                <div className="flex flex-row gap-2  w-[170px]">
                    <div className="flex flex-row w-[40px] ">
                        <img src="assets/icons/dashboard.png" alt="home" className="h-[25px] w-auto" />
                    </div>
                    <span className="font-bold">Dashboard</span>
                </div>
                 <div className="flex flex-row gap-2 w-[170px]">
                    <div className="flex flex-row w-[40px] ">
                     <img src="assets/icons/printer.png" alt="home" className="h-[25px] w-auto" />
                    </div>
                    <span className="font-bold">Impressoras</span>
                </div>
                 <div className="flex flex-row gap-2 w-[170px]">
                    <div className="flex flex-row w-[40px] ">
                    <img src="assets/icons/toner.png" alt="home" className="h-[25px] w-auto" />
                    </div>
                    <span className="font-bold">Toners</span>
                </div>
                 <div className="flex flex-row gap-2 w-[170px] ">
                    <div className="flex flex-row w-[40px]">
                        <img src="assets/icons/cylinder.png" alt="home" className="h-[25px] w-auto" />
                    </div>
                    <span className="font-bold">Drums</span>
                </div>
            </nav>
            <div className="h-[50px] flex flex-row items-center gap-2">
                <div className="flex flex-row w-[40px]">
                        <img src="assets/icons/out.png" alt="home" className="h-[25px] w-auto" />
                </div>
                    <span className="font-bold">Sair</span>
            </div>
        </div> 
    )
}
