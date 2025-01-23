
import React, { useState } from "react"
export const Simplecrud = () => {

    const [input, setInput] = useState('');
    const [items, setItems] = useState([]);
    const [editItemId, setEditItemId] = useState(null);

    const addItem = () => {
        if (input.trim()) {
            setItems((prevItem) => [...prevItem, input]);
            setInput("");
        } else {
            alert("Empty not allowed!..")
        }
    };

    const deleteItem = (itemId) => {
        const afterDeleteItems = items.filter((_, i) => i !== itemId);
        setItems(afterDeleteItems);

    }

    const editItem = (itemId) => {
        setEditItemId(itemId);
        setInput(items[itemId]);

    }

    const updateItem = () => {
        if (input.trim()) {
            const afterUpdateItems = items.map((item, index) => index === editItemId ? input : item);
            setItems(afterUpdateItems);
            setInput('');
            setEditItemId(null);
        } else {
            alert("Empty not allowed!..")
        }
    }

    const cancelEdit = () => {
        setInput('');
        setEditItemId(null);
    }

    return (
        <>
            <h1>Simple Crud with single componenet</h1>
            <div>
                <label htmlFor="itemName">Enter your Item Name : </label>&nbsp;
                <input type="text" name="itemName" className="itemName" id="itemName" value={input} onChange={(e) => setInput(e.target.value)} />
                {editItemId == null ?
                    <button onClick={addItem} >Add Item</button>
                    :
                    <>
                        <button onClick={updateItem}>Update</button>
                        <button onClick={cancelEdit}>Cancel</button>
                    </>
                }
            </div>
            <div>
                {items.length === 0 ? <p>No Data Found</p> : <>
                    <h3>Item List</h3>
                    <ul>
                        {items.map((item, index) =>
                            <li key={index}>{item}
                                <button onClick={() => { editItem(index) }}>Edit</button>
                                <button onClick={() => { deleteItem(index) }}>Delete</button></li>
                        )}</ul></>}
            </div>
        </>
    )
}