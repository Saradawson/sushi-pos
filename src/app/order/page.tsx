'use client'
import { useState, useEffect } from "react"
import ItemButtons from "./itemButtons"
import OrderList from "./orderList"

interface OrderItems {
    id: number// Unique identifier
    name: string
    price: number
    isSelected: boolean
}

interface AllOrders {
    id: Date
    order: {}
    total: string
}
  

const Order = () => {
    const [orders, setOrders] = useState<AllOrders[]>([])
    const [order, setOrder] = useState<OrderItems[]>([])
    const [selctedItems, setSelectedItems] = useState(false)

    
    useEffect(() => {

        setOrder([])
        setSelectedItems(false)
    }, [])
    
    const calculateTotal = () => {
        return order.reduce((sum, item) => sum + item.price, 0). toFixed(2)
    }

    let total = calculateTotal()
    
    const addItem = (name: string, price: number) => {
        const newItem: OrderItems = { id: (!order[order.length-1]) ? 0 : order[order.length-1].id +1, name: name, price: price, isSelected: false }
        setOrder((prevOrder) => [...prevOrder, newItem])
    }

      // Toggle item selection
    const toggleItem = (id: number) => {
        setOrder(prevOrder =>
            prevOrder.map(item => 
                id === item.id ? { ...item, isSelected: !item.isSelected } : item
            )
        ) 
        setSelectedItems(true) 
    }
    

      const deleteItems = () => {
        setOrder((prevItems) =>
          prevItems.filter((item) => !item.isSelected)
        )
        setSelectedItems(false)
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
                <OrderList order={order} onDeleteItems={deleteItems} onToggleItem={toggleItem}></OrderList>
                <div className="w-full border-x flex justify-end p-2 bg-pinkFour">    
                        <button type="submit" disabled={order.length === 0} onClick={sendOrder} className="w-fit text-center border bg-slate-400 text-white px-6 p-3 rounded-md">
                            Send
                        </button>
                </div>
                <div className="bg-pinkFour flex border flex-col items-end w-full font-bold text-end p-1">
                    <p>Total: ${total}</p>
                </div>
            </div>
            <div className="w-1/2 flex flex-col border">
                <div className="w-full flex justify-start p-1"> 
                    {   selctedItems ?
                        <button onClick={deleteItems} className="w-fit border bg-red-500 text-white text-center px-6 p-3 rounded-md">
                            Delete
                        </button> :
                        <ItemButtons addItem={addItem}></ItemButtons>
                    }   
                </div>
            </div>
            </div>
        </form>
    )
}

export default Order