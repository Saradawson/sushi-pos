"use client"
import BtnContainer from "./btnContainer";
import LoginInput from "./loginInput";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const [code, setCode] = useState('');
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        console.log('component mounted')
        setIsMounted(true);
    }, []);

    const handlesubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Form submitted with code:", code); // Log the code before routing
        window.alert(`${code} logged in!`);
        router.push('/order')
    }

    const handleInputChange = (value: string) => {
        if(value !== "CL" && value !== "GO"){
            setCode(`${code}${value}`);    
        } else if(value === "CL"){
            setCode('');
        }
    }

    if (!isMounted) {
        return null;
    }

    return(
        <form onSubmit={handlesubmit} className="flex flex-col justify-center items-center w-full h-full p-8">
            <LoginInput code={code} value={code} onChange={handleInputChange}/>
            <BtnContainer code={code} value={code} onClick={handleInputChange}/>
        </form>
    );
};