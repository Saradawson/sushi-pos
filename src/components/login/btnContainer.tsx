'use client'
import React from 'react';

type ValueProps = {
    onClick: (value: string) => void;
    value: string;
    code: string;
}


const BtnContainer: React.FC<ValueProps> = ({ onClick, code }) => {
    const btnValues = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], ["CL", "0", "GO"]]

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const target = event.target as HTMLInputElement;
        const value = target.value;
        onClick(value);
    }


    return (
        <div className='w-1/3 h-4/5'>
            {btnValues.map((row, index) => {
                return (
                    <div className='h-1/4' key={index}>
                        {row.map((value) => {
                            if(value === "GO"){
                                return (
                                    <button
                                        key={value}
                                        type="submit"
                                        value={value}
                                        disabled={(code.length < 4 ? true : false)}
                                        onClick={handleClick}
                                        className="rounded-sm w-1/3 h-full text-3xl border border-pinkOne">{value}
                                    </button>    
                                ); 
                            } else{
                                return (
                                    <button
                                        key={value}
                                        type={(value === "CL" ? "reset" : "button")}
                                        value={value}
                                        disabled={(value === "CL" && code.length === 0 ? true : false || 
                                                   value !== "CL" && code.length === 4 ? true : false
                                                )}
                                        onClick={handleClick}
                                        className="rounded-sm w-1/3 h-full text-3xl border border-pinkOne">{value}
                                    </button>    
                                ); 
                            }
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default BtnContainer;