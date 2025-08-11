interface IRegisterInputs {
    placeholder: string;
    item: string;
    setProp: React.Dispatch<React.SetStateAction<string>>
}

export const RegisterInputs = ({placeholder, item, setProp}: IRegisterInputs) => {
    return (
        <div className="flex flex-col w-full justify-center items-center">
            <input 
                type="text"
                placeholder={placeholder} 
                value={item}
                onChange={(e) => setProp(e.target.value)}
                className="w-full bg-[#282f47] text-white rounded-lg
                placeholder:text-[#5f667e] text-[15px] pl-2" />
        </div>
    )
}