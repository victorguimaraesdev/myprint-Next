
interface SidebarReferenceProps {
    way: string;
    name: string;
}

export const SidebarReference = ({way, name}: SidebarReferenceProps) => {
    return (
         <div className="flex flex-row gap-2  w-[160px] cursor-pointer hover:bg-[var(--hoverSide)] ">
                    <div className="flex flex-row w-[40px] ">
                        <img src={way} alt="home" className="h-[25px] w-auto" />
                    </div>
                 <span className="font-normal text-white">{name}</span>
                </div>
    )
}

//  <div className="flex flex-row gap-2  w-[160px] cursor-pointer hover:bg-[var(--hoverSide)] ">
//                     <div className="flex flex-row w-[40px] ">
//                         <img src="assets/icons/dashboard.png" alt="home" className="h-[25px] w-auto" />
//                     </div>
//                  <span className="font-normal text-white">Dashboard</span>
//                 </div>