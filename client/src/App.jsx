import { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const url = "http://localhost:5000/api/product/";
    const res = await axios.get(url);

    console.log(res.data);
    setData(res.data);
  };
  return (
    <div >
      <ul>
        {data.map((item, index) => {
          return (
            <li key={index}>
              <div>Name: {item.name}</div>
              <div>Price: {item.price}</div>
              <br />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default App;
