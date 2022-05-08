import './App.css';
import Charts from './charts'
import React, { useState, useEffect } from 'react';

function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(false);

  return (
    <div className="App">
    <Charts />
    </div>
  );
}

export default App;
