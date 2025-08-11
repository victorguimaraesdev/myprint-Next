import { PrinterInstruction } from "@/components/printer/instruction/printer.Instruction";
import { PrinterList } from "@/components/printer/list/container/list.Container";
import { PrinterRegister } from "@/components/printer/register/container/register.Container";

export default function Printer() {
    return (
    <div className="flex flex-col justify-center items-center h-full w-full gap-4">
        <PrinterInstruction/>
        <PrinterRegister/>
        <PrinterList/>
    </div>
    )
}