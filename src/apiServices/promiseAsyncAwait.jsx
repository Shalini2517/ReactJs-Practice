import { useState, useEffect, useLayoutEffect } from "react";

export const PromiseApi = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    restApiWithAsync();
  }, []);

  const restApiWithAsync = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      setUsers(result);
    } catch (error) {
      console.error("Error : " + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h5>Promise Api</h5>
      {loading ? (
        <p>Loading...</p>
      ) : users.length === 0 ? (
        <p>No Users found</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>User Name : {user.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};
