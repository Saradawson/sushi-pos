'use client'
import React, { ChangeEvent } from 'react';
import LoginBtn from './loginBtn';

type ValueProps = {
    onClick: (value: string) => void;
    value: string;
}


const BtnContainer: React.FC<ValueProps> = ({ onClick }) => {
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
                            return (
                                <LoginBtn onClick={handleClick} key={value} value={value}></LoginBtn>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default BtnContainer;