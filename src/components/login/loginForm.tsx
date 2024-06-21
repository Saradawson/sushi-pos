"use client"
import BtnContainer from "./btnContainer";
import LoginInput from "./loginInput";
import { useState } from "react";

export default function LoginForm() {
    const [code, setCode] = useState('');

    const handleInputChange = (value: string) => {
        setCode(`${code}${value}`);
        console.log(code)
    }

    return(
        <form className="flex flex-col items-center h-full">
            <LoginInput code={code} value={code} onChange={handleInputChange}/>
            <BtnContainer value={code} onClick={handleInputChange}/>
        </form>
    );
};