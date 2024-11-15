'use client'
import { useState, useEffect } from "react"
import ItemButtons from "./itemButtons"

interface OrderProps {
    order: []
    orders: []
}

interface OrderItems {
    id: number// Unique identifier
    name: string
    price: number
}

interface AllOrders {
    id: Date
    order: {}
    total: string
}
  

const Order: React.FC<OrderProps> = () => {
    const [orders, setOrders] = useState<AllOrders[]>([])
    const [order, setOrder] = useState<OrderItems[]>([])
    const [selectedItems, setSelectedItems] = useState<OrderItems[]>([])

    
    useEffect(() => {
        setOrder([])
    }, [])
    
    const calculateTotal = () => {
        return order.reduce((sum, item) => sum + item.price, 0). toFixed(2)
    }

    let total = calculateTotal()
    
    const addItem = (name: string, price: number) => {
        const newItem: OrderItems = { id: (!order[order.length-1]) ? 0 : order[order.length-1].id +1, name: name, price: price }
        setOrder((prevOrder) => [...prevOrder, newItem])
    }

      // Toggle item selection
    const toggleItem = (item: OrderItems) => {
        setSelectedItems((prevItems) => {
        if (prevItems.some((i) => i.id === item.id)) {
            return prevItems.filter((i) => i.id !== item.id)// Deselect if already selected
        } else {
            return [...prevItems, item]// Select if not selected
        }
        })
    }
    
      // Helper function to determine if an item is selected
      const isSelected = (item: OrderItems) =>
        selectedItems.some((selectedItem) => selectedItem.id === item.id)
    

      const deleteSelectedItems = () => {
        setOrder((prevItems) =>
          prevItems.filter((item) => !selectedItems.some((i) => i.id === item.id))
        )
        setSelectedItems([])// Clear selected items after deletion
      }

      const sendOrder = () => {
        const newOrder: AllOrders = { id: new Date(), order: order, total: total }
        setOrders((prevOrders) => [...prevOrders, newOrder])
        setOrder([])
        console.log(orders)
      }

    return(
        <form onSubmit={sendOrder} className='w-full h-full flex flex-col'>
            <div className='w-full h-full flex'>
            <div className="w-1/2 h-full border flex flex-col items-center bg-white font-medium">
                <h2 className="text-xl border-y h-12 w-full text-center p-2">Order</h2>
                <div className="w-full h-full overflow-y-auto flex-grow border">
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
                <div className="flex border flex-col items-end w-full font-bold text-end p-1">
                    <p>Total: ${total}</p>
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
            <div className="w-1/2 h-12 border-x flex justify-end p-1">    
                    <button type="submit" disabled={order.length === 0} onClick={sendOrder} className="w-fit border bg-slate-400 text-white px-4 rounded-md">
                        Send
                    </button>
            </div>
        </form>
    )
}

export default Order