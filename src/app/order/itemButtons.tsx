'useclient'

interface OrderProps {
    addItem: (name: string, value: number) => void;
}

const ItemButtons: React.FC<OrderProps> = ({ addItem }) => {
    
    // Helper function to determine the value of an item button
    const itemClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const target = event.target as HTMLInputElement;
        const name = target.name;
        const value = target.value;
        addItem(name, Number(value))
    }

    return(
    <form className="w-1/2 flex flex-col items-center border font-medium">
            <h2 className="border w-full text-center text-lg">ITEMS</h2>
            <div className="border w-full pt-5 p-1 flex flex-col items-start gap-2">
                <h3 className="text-gray-500">Makis</h3>
                <div>
                    <button type="button" value={10} name="Maguro Maki" onClick={itemClick} className="border bg-white p-4 rounded-md">Maguro Maki</button>
                    <button type="button" value={10} name="Sake Maki" onClick={itemClick} className="border bg-white p-4 rounded-md">Sake Maki</button>
                    <button type="button" value={10} name="Hamachi Maki" onClick={itemClick} className="border bg-white p-4 rounded-md">Hamachi Maki</button>
                </div>
            </div>
        </form>    
    );
};

export default ItemButtons;