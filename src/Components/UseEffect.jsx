import React, { useState, useEffect } from 'react';

const UseEffect = () => {
  const [resourceType, setResourceType] = useState('Frontend');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(resp => {
        if (!resp.ok) {
          throw new Error('Network response was not ok');
        }
        return resp.json();
      })
      .then(json => console.log(json))
      .catch(error => console.log("Error:", error));
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType('Frontend')}>Frontend</button>
        <button onClick={() => setResourceType('Backend')}>Backend</button>
        <button onClick={() => setResourceType('Fullstack')}>Fullstack</button>

        <h2>{resourceType}</h2>
      </div>
    </>
  );
}

export default UseEffect;
