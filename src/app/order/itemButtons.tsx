'useclient'
// dummy data
const items = [
    {
        category: "Makis",
        items: [
            {name: "Sake Maki", price: 10.00},
            {name: "Hamachi Maki", price: 10.00},
            {name: "Maguro Maki", price: 10.00},
        ],
    }
]

interface OrderProps {
    addItem: (name: string, price: number) => void
}

const ItemButtons: React.FC<OrderProps> = ({ addItem }) => {
    
    // Helper function to determine the value of an item button
    const itemClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        const target = event.target as HTMLInputElement
        const name = target.name
        const price = target.getAttribute('data-price')
        addItem(name, Number(price))
    }

    return(
        <div className="w-1/2 flex flex-col items-center border font-medium">
            <h2 className="border w-full text-center text-lg">ITEMS</h2>
            {
                items.map((category, categoryIndex) => {
                    return(
                        <div key={categoryIndex} className="border w-full pt-5 p-1 flex flex-col items-start gap-2">
                            <h3 className="text-gray-500">{category.category}</h3>
                            <div>
                                {category.items.map((item, itemIndex) => {
                                    return(
                                        <button key={itemIndex} data-price={item.price} type="button" value={10} name="Maguro Maki" onClick={itemClick} className="border bg-white p-4 rounded-md">{item.name}</button>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })
            }
        </div>    
    )
}

export default ItemButtons