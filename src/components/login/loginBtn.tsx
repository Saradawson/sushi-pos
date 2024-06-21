"use client"
import React from "react";
import { MouseEvent } from "react";

type ButtonProps = {
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    value: string;
}

const LoginBtn: React.FC<ButtonProps> = ({ value, onClick }) => {
    return (
        <button
            type={(value === "GO" ? "submit" : value === "CL" ? "reset" : "button")}
            value={value}
            onClick={onClick}
            className="rounded-sm w-1/3 h-full text-3xl border border-pinkOne"
        >{value}
        </button>
    );
};

export default LoginBtn;