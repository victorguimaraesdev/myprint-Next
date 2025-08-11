import Link from "next/link";

interface SidebarReferenceProps {
    way: string;
    name: string;
    link: string
}

export const SidebarReference = ({way, name, link}: SidebarReferenceProps) => {
    return (
        <Link href={link}>
         <div className="flex flex-row gap-2  w-[160px] cursor-pointer hover:bg-[var(--hoverSide)] ">
                    <div className="flex flex-row w-[40px] ">
                        <img src={way} alt="home" className="h-[25px] w-auto" />
                    </div>
                 <span className="font-[100] tracking-widest text-white">{name}</span>
                </div>
        </Link>
    )
}