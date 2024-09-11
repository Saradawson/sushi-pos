'use client'
import { useState } from "react"

interface OrderProps {
    value: string;
    onChange: (value: string) => void;
    order: [string];
}

const Order: React.FC<OrderProps> = () => {
    const [order, setOrder] = useState<string[]>([]);

    const addItem = (event: React.MouseEvent<HTMLButtonElement>) => {
        const target = event.target as HTMLInputElement;
        const value = target.value
        setOrder((prevOrder) => [...prevOrder, value])
    }

    return(
        <div className='w-full h-full flex px-4'>
            <div className="w-1/2 flex flex-col items-center bg-white border">
                <h2>Order</h2>
                <div>
                    {order.map((item, key) => {
                        return(
                            <h3 key={key}>{item}</h3>
                        );
                    })}
                </div>
            </div>
            <div className="w-1/2 flex flex-col items-center border">
                <h2>Items</h2>
                <div>
                    <h3>Makis</h3>
                    <button value='Maguro Maki' onClick={addItem} className="border bg-white p-4 rounded-md">Maguro Maki</button>
                    <button value='Sake Maki' onClick={addItem} className="border bg-white p-4 rounded-md">Sake Maki</button>
                    <button value='Hamachi Maki' onClick={addItem} className="border bg-white p-4 rounded-md">Hamachi Maki</button>
                </div>
            </div>    
        </div>
    )
}

export default Order;