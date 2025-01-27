import React, { useState, useEffect } from "react";

export const Create = ({ addItem, items, editItem, cancelBtn, updateItem }) => {
  const [fromData, setFormData] = useState("");

  const addBtnClick = () => {
    if (fromData.trim()) {
      addItem(fromData);
      setFormData("");
    } else {
      alert("Empty value not allowed");
    }
  };

  useEffect(() => {
    if (editItem != null) {
      setFormData(items[editItem]);
    } else {
      setFormData("");
    }
  }, [editItem, items]);

  return (
    <>
      <h1 className="mt-3 mb-2">Hello this is Create component</h1>
      <br />
      <label htmlFor="itemName">Enter your item name : </label>
      <div className="d-flex">
        <div style={{ width: "50%" }}>
          <input
            type="text"
            name="itemName"
            className="form-control"
            id="itemName"
            placeholder="Type here..."
            value={fromData}
            onChange={(e) => setFormData(e.target.value)}
          />
        </div>
        {editItem == null ? (
          <button onClick={addBtnClick} className="btn btn-info">
            Add Item
          </button>
        ) : (
          <>
            <button
              className="btn btn-info"
              onClick={() => {
                updateItem(fromData);
              }}
            >
              Update
            </button>
            <button className="btn btn-secondary" onClick={cancelBtn}>
              Cancel
            </button>
          </>
        )}
      </div>
    </>
  );
};
