import { List } from "@/components/printer/list";
import { Register } from "@/components/printer/register";

export default function Printer() {
    return (
    <div className="flex flex-col justify-center items-center h-full w-full gap-4">
        <Register/>
        <List/>
    </div>
    )
}