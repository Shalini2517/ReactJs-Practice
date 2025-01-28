import React, { useState } from "react";
import { Create } from "./create";
import { Read } from "./read";

export const Crudmanage = () => {
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [filter, setFilter] = useState("");

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const deleteItem = (itemId) => {
    setEditItem(null);
    const aftertDeleteItems = items.filter((_, i) => i !== itemId);
    setItems(aftertDeleteItems);
  };

  const editItemBtn = (itemId) => {
    setEditItem(itemId);
  };

  const cancelBtn = () => {
    setEditItem(null);
  };

  const updateItem = (item) => {
    const afterUpdateItems = items.map((itm, index) =>
      index === editItem ? item : itm
    );
    setItems(afterUpdateItems);
    setEditItem(null);
  };

  const filterItems = items.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <div className="row">
          <Create
            addItem={addItem}
            editItem={editItem}
            items={items}
            cancelBtn={cancelBtn}
            updateItem={updateItem}
          />
          {items.length > 0 ? (
            <>
              <div className="text-end" style={{ width: "20%" }}>
                <input
                  className="form-control mt-3"
                  type="text"
                  placeholder="search..."
                  value={filter}
                  onChange={(e) => {
                    setFilter(e.target.value);
                  }}
                />
              </div>
              <Read
                items={filterItems}
                editItemBtn={editItemBtn}
                deleteItem={deleteItem}
              />
            </>
          ) : (
            <h4 className="mt-4 mbt-3">Items not found...</h4>
          )}
        </div>
      </div>
    </>
  );
};
