import { useState, useEffect } from 'react';
// import Header from '../components/header';

function News() {

  const [name, setName] = useState([]);

  useEffect(() => {
    names()
  },[])

  // use async/await to fetch data
  const names = async () => {
    const responce = await fetch('https://jsonplaceholder.typicode.com/albums/');

    // store data
    setName(await responce.json())
  }

  return (
    <div className="container mx-auto">
      <h1>render the data here</h1>
      <ol className="list-group list-group-numbered">
        {name.map((data) => {
          return(
            <li className="list-group-item" key={data.id}> {data.title} </li>
          )
        })}
      </ol>
    </div>
  );
}

export default News;
