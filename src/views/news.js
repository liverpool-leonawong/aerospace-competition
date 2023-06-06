import { useState, useEffect } from 'react';
import axios from 'axios';
// import Header from '../components/header';

function News() {

  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
  }, [])

  // use axios to GET Data
  const getData = () => {
    axios.get(
      "https://jsonplaceholder.typicode.com/users").then((response) => {
        console.log(response.data);
        setData(response.data);
      }).catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mx-auto">
      <h1>render the data here</h1>
      <ol className="list-group list-group-numbered">
        {data ? (
          data.map(
            (data) => {
              return (
                <div className="data" key={data.id}>
                  <h3>{data.name}</h3>
                </div>);
            })) : (<h3>No data yet</h3>)}
      </ol>
    </div>
  );
}

export default News;
