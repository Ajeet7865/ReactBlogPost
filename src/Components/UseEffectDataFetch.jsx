import React, { useEffect, useState } from 'react'

const UseEffectDataFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        setTimeout(() => {
          setData(json);
          setLoading(false);
        }, 1000);
      });
  }, []);


  return (
    <>
      {
        loading
          ? (<h1 style={{ color: 'blue' }}>Loading...</h1>)
          : (
            <ul>
              {data.map(post => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          )
      }
    </>
  )
}

export default UseEffectDataFetch