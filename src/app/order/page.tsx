'use client'
import { useState, useEffect } from "react"

interface OrderProps {
    value: string;
    order: [string];
    itemClick: (value: string) => void;
}

interface OrderItem {
    id: number; // Unique identifier
    name: string;
}
  

const Order: React.FC<OrderProps> = ({ }) => {
    const [order, setOrder] = useState<OrderItem[]>([]);
    const [selectedItem, setSelectedItem] = useState<OrderItem | null>(null);
    
    useEffect(() => {
        setOrder([])
    }, [])

    const addItem = (value: string) => {
        const newItem: OrderItem = { id: order.length + 1, name: value };
        setOrder((prevOrder) => [...prevOrder, newItem]);
    };
    
    const itemClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const target = event.target as HTMLInputElement;
        const value = target.value;
        addItem(value)
        console.log(order)
    }
    
    const selectItem = (item: OrderItem) => setSelectedItem(item);

    const deleteItem = () => {
        if (selectedItem) {
            const newOrder = order.filter(item => item !== selectedItem);
            setOrder(newOrder);
            setSelectedItem(null); // Deselect after deletion
        }
    };

    return(
        <div className='w-full h-full flex px-4'>
            <div className="w-1/2 flex flex-col items-center bg-white border">
                <h2>Order</h2>
                <div>
                    {order.map((item) => {
                        return(
                            <li 
                                key={item.id}
                                onClick={() => selectItem(item)}
                                className={`cursor-pointer ${item === selectedItem ? 'bg-gray-300' : ''}`} // Highlight selected item
                            >
                                {item.name}
                            </li>
                        );
                    })}
                </div>
                <button onClick={deleteItem} className="border bg-red-500 text-white p-2 rounded-md mt-4">
                    Delete
                </button>
            </div>
            <form className="w-1/2 flex flex-col items-center border">
                <h2>Items</h2>
                <div>
                    <h3>Makis</h3>
                    <button type="button" value='Maguro Maki' onClick={itemClick} className="border bg-white p-4 rounded-md">Maguro Maki</button>
                    <button value='Sake Maki' onClick={itemClick} className="border bg-white p-4 rounded-md">Sake Maki</button>
                    <button value='Hamachi Maki' onClick={itemClick} className="border bg-white p-4 rounded-md">Hamachi Maki</button>
                </div>
            </form>    
        </div>
    )
}

export default Order;