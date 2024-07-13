
import React from "react";

interface InputProps {
    value: string;
    onChange: (value: string) => void;
    code: string;
}

const LoginInput: React.FC<InputProps> = ({ code, onChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        const value = target.value;
        onChange(value);
    }

    return (
        <input readOnly id="code-input" className="w-1/3 h-1/5 text-center text-3xl border border-pinkOne" value={code} type="text" placeholder=" - - - - " onChange={handleChange}></input>
    );
}

export default LoginInput;