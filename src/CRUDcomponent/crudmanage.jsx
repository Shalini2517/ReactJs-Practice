import React, { useState } from "react";
import { Create } from "./create";
import { Read } from "./read";
import { Delete } from "./delete";
import { Update } from "./update";

export const Crudmanage = () => {
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);

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
            <Read
              items={items}
              editItemBtn={editItemBtn}
              deleteItem={deleteItem}
            />
          ) : (
            <h4 className="mt-4 mbt-3">Items not found...</h4>
          )}
        </div>
      </div>
    </>
  );
};
