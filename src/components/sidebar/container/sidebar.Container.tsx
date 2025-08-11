import {SidebarReference} from "../reference/sidebar.Reference";

export const  Sidebar = () => {
    return (
        
        <div className="flex flex-col h-full gap-15 justify-center items-center w-[300px] bg-[#1b2135] text-[var(--supp1)]">
            <div className="flex flex-col items-center gap-1 ">
                <img src="assets/logo/logo.png" alt="logo" className="h-[60px] w-auto" />
                <h1 className="font-bold text-[12px]">MyPrint.project</h1>
                <h1 className="font-[100] text-[7px]  text-white">Create by: Victor Guimarães</h1>
            </div>

            <nav className="flex flex-col gap-4 h-40 w-full items-center text-[14px] " >
                <SidebarReference way="assets/icons/dashboard.png" name="Dashboard" link="/dashboard" />
                <SidebarReference way="assets/icons/printer.png" name="Impressoras" link="/printer" />
                <SidebarReference way="assets/icons/toner.png" name="Toners" link="/toner"/>
                <SidebarReference way="assets/icons/cylinder.png" name="Drums" link="/drum" />
            </nav>

            <div className="flex flex-row gap-2 w-[160px] cursor-pointer hover:bg-[var(--hoverSide)] ">
                <div className="flex flex-row w-[40px]">
                        <img src="assets/icons/out.png" alt="home" className="h-[25px] w-auto" />
                </div>
                    <span className="font-[100] tracking-widest text-white text-[14px]">Sair</span>
            </div>

            <div className="h-[1px] w-full mt-15"></div>

        </div> 
    )
}
