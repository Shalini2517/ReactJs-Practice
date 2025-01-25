import React, { useState } from 'react';

export const Create = ({ addItem }) => {

    const [fromData, setFormData] = useState('');

    const addBtnClick = () => {
        if (fromData.trim()) {
            addItem(fromData);
            setFormData('')
        } else {
            alert("Empty value not allowed");
        }
    }

    return (<>
        <h1 className='mt-3 mb-2'>Hello this is Create component</h1>
        <br />
        <label htmlFor="itemName">Enter your item name : </label>
        <div>
            <input type="text" name="itemName" id='itemName' placeholder='Type here...'
                value={fromData} onChange={(e) => setFormData(e.target.value)} />
            <button onClick={addBtnClick} className='btn btn-info'>Add Item</button>
        </div>
    </>)
} 