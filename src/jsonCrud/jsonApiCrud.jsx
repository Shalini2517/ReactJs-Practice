import axios from "axios";
import { useState, useEffect } from "react";
export const JsonApiCrud = () => {
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

  const addUser = (e) => {
    e.preventDefault();
    if (!formData.trim()) {
      alert("Username required!");
    } else {
      setLoading(true);
      axiosPost();
      formReset();
    }
  };

  const formReset = () => {
    setFormData("");
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
        <button className="btn btn-success mt-2">Add</button>
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
                    {index + 1} - {user.name}
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
