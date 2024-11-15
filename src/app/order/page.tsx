'use client'
import { useState, useEffect } from "react"
import ItemButtons from "./itemButtons"

interface OrderProps {
    price: number
    name: string
    order: []
}

interface OrderItem {
    id: number// Unique identifier
    name: string
    price: number
}
  

const Order: React.FC<OrderProps> = ({ }) => {
    const [order, setOrder] = useState<OrderItem[]>([])
    const [selectedItems, setSelectedItems] = useState<OrderItem[]>([])
    
    useEffect(() => {
        setOrder([])
    }, [])

    const calculateTotal = () => {
        return order.reduce((sum, item) => sum + item.price, 0). toFixed(2)
    }

    const addItem = (name: string, price: number) => {
        const newItem: OrderItem = { id: (!order[order.length-1]) ? 0 : order[order.length-1].id +1, name: name, price: price }
        setOrder((prevOrder) => [...prevOrder, newItem])
    }

      // Toggle item selection
    const toggleItem = (item: OrderItem) => {
        setSelectedItems((prevItems) => {
        if (prevItems.some((i) => i.id === item.id)) {
            return prevItems.filter((i) => i.id !== item.id)// Deselect if already selected
        } else {
            return [...prevItems, item]// Select if not selected
        }
        })
    }
    
      // Helper function to determine if an item is selected
      const isSelected = (item: OrderItem) =>
        selectedItems.some((selectedItem) => selectedItem.id === item.id)
    

      const deleteSelectedItems = () => {
        setOrder((prevItems) =>
          prevItems.filter((item) => !selectedItems.some((i) => i.id === item.id))
        )
        setSelectedItems([])// Clear selected items after deletion
      }

    return(
        <form className='w-full h-full flex flex-col'>
            <div className='flex-grow overflow-auto w-full h-full flex'>
            <div className="w-1/2 overflow-y-auto border flex flex-col flex-grow items-center bg-white font-medium">
                <h2 className="text-xl border-y h-12 w-full text-center p-2">Order</h2>
                <div className="w-full border">
                    {order.map((item) => {
                        return(
                            <div 
                                key={item.id}
                                onClick={() => toggleItem(item)}
                                className={`p-2 pl-6 w-full flex flex-row text-start justify-between border cursor-pointer ${isSelected(item) ? 'bg-gray-300' : ''}`} // Highlight selected item
                            >
                                <ol>{item.name}</ol>
                                <ol>${item.price.toFixed(2)}</ol>    
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="w-1/2 flex flex-col border">
                <div className="w-full h-12 border flex justify-start p-1">    
                    <button disabled={selectedItems.length === 0} onClick={deleteSelectedItems} className="w-fit border bg-red-500 text-white px-2 rounded-md">
                        Delete
                    </button>
                </div>
                <ItemButtons addItem={addItem}></ItemButtons>
            </div>
            </div>
            <div className="flex border flex-col items-end w-1/2 font-bold text-end p-1">
                <p>Total: ${calculateTotal()}</p>
            </div>
        </form>
    )
}

export default Order