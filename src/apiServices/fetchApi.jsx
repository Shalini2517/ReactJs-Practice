import React, { useState, useEffect } from "react";
export const FetchApi = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [userFilter, setUserFilter] = useState("");

  useEffect(() => {
    fetchApiMethod();
  }, []);

  const fetchApiMethod = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  const filteredData = data.filter((value) =>
    value.name.toLowerCase().includes(userFilter.toLocaleLowerCase())
  );

  return (
    <>
      <h5>Fetch Api</h5>
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-danger">Error: {error}</p>}
      {data.length > 0 ? (
        <>
          <input
            type="text"
            placeholder="Search..."
            value={userFilter}
            onChange={(e) => {
              setUserFilter(e.target.value);
            }}
          />
          <ul>
            {filteredData.length > 0 ? (
              filteredData.map((value) => (
                <li key={value.id}>User Name: {value.name}</li>
              ))
            ) : (
              <p>No users found</p>
            )}
          </ul>
        </>
      ) : (
        <p>No data found</p>
      )}
    </>
  );
};
