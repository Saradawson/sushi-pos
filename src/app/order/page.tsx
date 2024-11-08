'use client'
import { useState, useEffect } from "react"
import ItemButtons from "./itemButtons";

interface OrderProps {
    value: string;
    order: [];
}

interface OrderItem {
    id: number; // Unique identifier
    name: string;
}
  

const Order: React.FC<OrderProps> = ({ }) => {
    const [order, setOrder] = useState<OrderItem[]>([]);
    const [selectedItems, setSelectedItems] = useState<OrderItem[]>([]);
    
    useEffect(() => {
        setOrder([])
    }, [])

    const addItem = (value: string) => {
        const newItem: OrderItem = { id: order.length + 1, name: value };
        setOrder((prevOrder) => [...prevOrder, newItem]);
    };

      // Toggle item selection
    const toggleItem = (item: OrderItem) => {
        setSelectedItems((prevItems) => {
        if (prevItems.some((i) => i.id === item.id)) {
            return prevItems.filter((i) => i.id !== item.id); // Deselect if already selected
        } else {
            return [...prevItems, item]; // Select if not selected
        }
        });
    };
    
      // Helper function to determine if an item is selected
      const isSelected = (item: OrderItem) =>
        selectedItems.some((selectedItem) => selectedItem.id === item.id);
    

      const deleteSelectedItems = () => {
        setOrder((prevItems) =>
          prevItems.filter((item) => !selectedItems.some((i) => i.id === item.id))
        );
        setSelectedItems([]); // Clear selected items after deletion
      };

    return(
        <div className='w-full h-full flex px-4'>
            <div className="w-1/2 flex flex-col items-center bg-white border">
                <h2>Order</h2>
                <div>
                    {order.map((item) => {
                        return(
                            <ol 
                                key={item.id}
                                onClick={() => toggleItem(item)}
                                className={`cursor-pointer ${isSelected(item) ? 'bg-gray-300' : ''}`} // Highlight selected item
                            >
                                {item.name}
                            </ol>
                        );
                    })}
                </div>
                <button disabled={selectedItems.length === 0} onClick={deleteSelectedItems} className="border bg-red-500 text-white p-2 rounded-md mt-4">
                    Delete
                </button>
            </div>
            <ItemButtons addItem={addItem}></ItemButtons>
        </div>
    )
}

export default Order;