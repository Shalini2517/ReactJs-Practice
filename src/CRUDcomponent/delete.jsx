export const Delete = ({ deleteItem, deleteIndex }) => {
  return (
    <button
      className="btn btn-danger"
      onClick={() => {
        deleteItem(deleteIndex);
      }}
    >
      Delete
    </button>
  ); 
};
