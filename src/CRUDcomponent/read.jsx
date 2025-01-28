import { Delete } from "./delete";

export const Read = ({ items, editItemBtn, deleteItem }) => {
  return (
    <>
      <h1 className="mt-3 mb-2">Hello this is Read component</h1>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>#</th>
            <th>Item Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    editItemBtn(index);
                  }}
                >
                  Edit
                </button>
                <Delete deleteItem={deleteItem} deleteIndex={index} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
