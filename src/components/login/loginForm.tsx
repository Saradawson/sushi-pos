"use client"
import BtnContainer from "./btnContainer";
import LoginInput from "./loginInput";
import React, { useState } from "react";

export default function LoginForm() {
    const [code, setCode] = useState('');

    const handlesubmit = (event: React.FormEvent) => {
        event.preventDefault();
        window.alert(`${code} logged in!`);
        setCode('');
    }

    const handleInputChange = (value: string) => {
        if(value !== "CL" && value !== "GO"){
            setCode(`${code}${value}`);    
        } else if(value === "CL"){
            setCode('');
        }
    }

    return(
        <form onSubmit={handlesubmit} className="flex flex-col items-center h-full">
            <LoginInput code={code} value={code} onChange={handleInputChange}/>
            <BtnContainer code={code} value={code} onClick={handleInputChange}/>
        </form>
    );
};