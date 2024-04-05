
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [isclick,setClick]=useState(false);
  //const [isclosed,setclosed]=useState(true)
  function handlclick(){
    setClick(true)
  }
  function handleClose(){
    setClick(false)
    // 
  }
  return (
    <div>
        <button onClick={handlclick}>Show Modal</button>
        <div className="model-overlay">
          {isclick && <div>
            <button className="model-close" onClick={handleClose}>close</button>
           <p className="model-p">This is a content of modal.</p>
          </div>}
           
        </div>
    </div>
  )
}

export default App
