import './App.css';
import Charts from './components/charts'
import React, { useState, useEffect } from 'react';
import response from "./data.json"

function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(false);

  useEffect(() => {
    if(show){
      setData(response)
    }
  }, [show]);

  return (
    <div className="App">
    {/* { show ?
    <span>
    <h2>Available charts</h2>
    <h5>Charts will be shown here!</h5>
    </span>
    : 
    <h2>No charts available </h2>
    }
    <button onClick={() => setShow(!show)}>
    { show ? "Hide data" : "Fetch data" }
    </button> */}

    { show ?
      <span>
      <h2>Available charts</h2>
      { show && data && data.charts.map((chartData, i) => (
        <Charts chart={chartData} key={i}/>
      ))}

      </span>
      :

      <h2>No charts available </h2>
      }
      <button onClick={() => setShow(!show)}>
      { show ? "Hide data" : "Fetch data" }
      </button>
  </div>
  );
}

export default App;
