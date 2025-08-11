import { List } from "@/components/printer/list/container/list.Container";
import { Register } from "@/components/printer/register/container/register.Container";

export default function Printer() {
    return (
    <div className="flex flex-col justify-center items-center h-full w-full gap-4">
        <Register/>
        <List/>
    </div>
    )
}