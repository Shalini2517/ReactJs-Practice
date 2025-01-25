
import React, { useState } from "react";
import { Create } from "./create";
import { Read } from "./read";
import { Delete } from "./delete";
import { Update } from "./update";

export const Crudmanage = () => {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems((prevItems) => [...prevItems, item])
    }

    return (<>
        <div className="container">
            <div className="row">
                <Create addItem={addItem} />
                {items.length > 0 ? <Read items={items} /> : <h4 className="mt-4 mbt-3">Items not found...</h4>}

            </div>
        </div>
    </>)
}