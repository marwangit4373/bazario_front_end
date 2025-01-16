import React, { useState } from "react";

const CreateCart: React.FC = () => {
    const [items, setItems] = useState<string[]>([]);

    const addItem = () => {
        setItems([...items, `Item ${items.length + 1}`]);
    };

    return (
        <div>
            <h1>Cart</h1>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default CreateCart;
