import React, { useState, useEffect } from "react";
export const FetchApi = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

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

  return (
    <>
      <h5>Fetch Api</h5>
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-danger">Error: {error}</p>}
      {data !== null ? (
        <ul>
          {data.map((value) => (
            <li key={value.id}>User Name : {value.name}</li>
          ))}
        </ul>
      ) : (
        <p>No data found</p>
      )}
    </>
  );
};
