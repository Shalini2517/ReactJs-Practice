
import React from "react";
import { Create } from "./create";
import { Read } from "./read";
import { Delete } from "./delete";
import { Update } from "./update";

export const Crudmanage = () => {
    return (<>
        <h1>This is crudmanage main component</h1>
        <Create />
        <Read />
    </>)
}