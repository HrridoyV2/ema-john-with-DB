import React from 'react';
import fakeData from '../../fakeData';
const Inventory = () => {
    const handleAddProducts = () => {
        const product = {};
        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
    }
    return (
        <div>
            <form action="">
                <p><span>Name: </span><input type="text" name="" id=""/></p>
                <p><span>price</span><input type="text" name="" id=""/></p>
                <p><span>Quantity</span><input type="text" name="" id=""/></p>
                <p><span>Product Image</span><input type="file" name="" id=""/></p>
            </form>
            <button onClick={handleAddProducts}>Add Products</button>
        </div>
    );
};

export default Inventory;