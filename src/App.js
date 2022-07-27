import React, { useState, useEffect } from 'react';
import { FLOORS } from './constants';

function Elevator({ floor }) {
  return <span>I am an elevator on floor {floor}</span>
}

function Buttons ({setFloor}) {
  return new Array(FLOORS).fill(0).map((_, i) => {
    const floor = FLOORS - i;
    return (
      <button
        onClick={() => setFloor(floor)}
        key={i}
        href="#"
        role="button">{ floor }</button>
    )
  });
}

function App() {
  const [floor, setFloor] = useState(5);

  return (
    <div className="grid">
      <div>
        <Elevator floor={floor}/>
      </div>
      <div>
        <Buttons setFloor={setFloor}/>
      </div>
    </div>
  );
}


export default App;
