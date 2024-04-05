
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [isclick,setClick]=useState(false)
  function handlclick(){
    setClick(!isclick)
  }
  return (
    <div>
        <button onClick={handlclick}>Show Modal</button>
        <div className="model-overlay">
          {isclick && <div>
            <button className="model-close" onClick={handlclick}>close</button>
           <p className="model-p">This is a content of modal.</p>
          </div>}
           
        </div>
    </div>
  )
}

export default App
