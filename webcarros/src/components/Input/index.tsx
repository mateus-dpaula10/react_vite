import { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface InputProps {
    name: string,
    placeholder: string;
    type: string;
    register: UseFormRegister<any>;
    error?: string;
    rules?: RegisterOptions
}

export function Input({ name, placeholder, type, register, rules, error }: InputProps){
    return (
        <div>
            <input 
                className="w-full border-2 rounded-md h-11 px-2 outline-none"
                placeholder={placeholder}
                type={type}
                {...register(name, rules)}
                id={name}
            />
            {error && <p className="my-1 text-red-500">{error}</p>}
        </div>
    )
}