interface OrderListProps {
    order: any[];
    onToggleItem: (id: number) => void;
    onDeleteItems: (order: any[]) => void;
  }

  const OrderList = ({ order, onToggleItem, onDeleteItems }: OrderListProps) => {
    return(
        <div className="w-full h-full overflow-y-auto flex-grow border">
            {order.map((item) => {
                return(
                    <div 
                        key={item.id}
                        onClick={() => onToggleItem(item.id)}
                        className={`p-2 pl-6 w-full flex flex-row text-start justify-between border cursor-pointer ${item.isSelected ? 'bg-gray-300' : ''}`} // Highlight selected item
                    >
                        <ol>{item.name}</ol>
                        <ol>${item.price.toFixed(2)}</ol>    
                    </div>
                )
            })}
        </div>
    )
  }

  export default OrderList