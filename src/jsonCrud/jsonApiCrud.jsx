import axios from "axios";
import { useState, useEffect } from "react";
export const JsonApiCrud = () => {
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [catchErr, setCatchErr] = useState(null);
  const apiUrl = "http://localhost:5000/users";

  useEffect(() => {
    axiosGet();
  }, []);

  // axiosGet methode for users data read

  const axiosGet = async () => {
    try {
      const response = await axios.get(apiUrl);
      console.log(response);
      setUsers(response.data);
    } catch (error) {
      console.error("Error : " + error);
      setCatchErr("Error : " + error);
    } finally {
      setLoading(false);
    }
  };

  const axiosPost = async () => {
    try {
      const newUser = { name: formData };
      const response = await axios.post(apiUrl, newUser);
      console.log(response);
      setUsers([...users, response.data]);
    } catch (error) {
      console.error("Error : " + error);
      setCatchErr("Error : " + error);
    } finally {
      setLoading(false);
    }
  };

  const axiosPut = async () => {
    try {
      const updateUser = { name: formData };
      const response = await axios.put(`${apiUrl}/${editId}`, updateUser);
      console.log(response);
      const afterUpdateUsers = users.map((user) =>
        user.id === editId ? response.data : user
      );
      setUsers(afterUpdateUsers);
    } catch (error) {
      console.error("Error : " + error);
      setCatchErr("Error : " + error);
    } finally {
      setLoading(false);
    }
  };

  const addUser = (e) => {
    e.preventDefault();
    if (!formData.trim()) {
      alert("Username required!");
    } else {
      setLoading(true);
      editId ? axiosPut() : axiosPost();
      formReset();
    }
  };

  const formReset = () => {
    setFormData("");
    setEditId(null);
  };

  const deleteUser = async (userId) => {
    try {
      const deleteResponse = await axios.delete(`${apiUrl}/${userId}`);
      console.log(deleteResponse);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error : " + error);
      setCatchErr("Error : " + error);
    } finally {
      setLoading(false);
    }
  };

  const editUser = (userId) => {
    setEditId(userId);
    setFormData(users.find((user) => user.id === userId).name);
  };

  return (
    <>
      <h5 className="mb-3">
        Hello I am CRUD using Json-server api Integration{" "}
      </h5>

      <form onSubmit={addUser}>
        <div className="form-group">
          <label htmlFor="uName">User Name : </label>
          <input
            type="text"
            id="uName"
            className="form-control w-50"
            placeholder="Type here..."
            value={formData}
            onChange={(e) => setFormData(e.target.value)}
          />
        </div>
        {editId == null ? (
          <button className="btn btn-success mt-2">Add</button>
        ) : (
          <>
            <button className="btn btn-outline-info  mt-2">Update</button>
            <button
              className="btn btn-outline-secondary  mt-2"
              onClick={formReset}
            >
              Cancel
            </button>
          </>
        )}
      </form>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {catchErr && <p className="text-danger">{catchErr}</p>}
          {users.length > 0 ? (
            <>
              <h6 className="text-success mt-3">User List</h6>
              <ul>
                {users.map((user, index) => (
                  <li key={user.id} className="userLi">
                    {index + 1} - {user.name} &nbsp;
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => editUser(user.id)}
                    >
                      Edit
                    </button>
                    &nbsp;
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => {
                        deleteUser(user.id);
                      }}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p>No Data Found</p>
          )}
        </>
      )}
    </>
  );
};
