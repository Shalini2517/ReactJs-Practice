import { useEffect, useState } from "react";
import axios from "axios";

export const AxiosApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    apiIntegration();
  }, []);

  const apiIntegration = () => {
    axios
      .get(url)
      .then((data) => {
        console.log(data);
        if (data.status == 200) {
          setData(data.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("ERROR :" + error);
        setLoading(false);
      });
  };

  return (
    <>
      <h5>Axios Api</h5>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {data.length === 0 ? (
            <p>No Data Found</p>
          ) : (
            <ul>
              {data.map((value) => (
                <li key={value.id}>User-name is {value.name}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </>
  );
};
