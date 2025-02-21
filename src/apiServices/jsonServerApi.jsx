import axios from "axios";
import { useEffect, useState } from "react";
export const JsonServerApi = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "http://localhost:5000/users";

  useEffect(() => {
    restApi();
  }, []);

  // to run the CLI in terminal "json-server --watch db.json --port 5000" after only url work!

  const restApi = async () => {
    try {
      const response = await axios.get(url);
      console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.error("Error Message : " + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h5>JsonServer Api</h5>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.length > 0 ? (
            users.map((user) => <li key={user.id}>{user.name}</li>)
          ) : (
            <p>No Users Found</p>
          )}
        </ul>
      )}
    </>
  );
};
