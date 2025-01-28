export const Update = ({ fromData, updateItem }) => {
  return (
    <button className="btn btn-info"
      onClick={() => {
        updateItem(fromData);
      }}
    >
      Update
    </button>
  );
};
