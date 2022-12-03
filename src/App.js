import React from "react";
import Tooltip from "./Tooltip";
import "./styles.css";

export default function App() {
  return (

    <div className="App">
      

      <div className="top-left-button">
        <Tooltip content="Tooltip text goes here" direction="bottom">
          
          <button type="button">Button 1</button>
          
        </Tooltip>
      </div>

      <div className="top-right-button">
        <Tooltip content="Tooltip text goes here" direction="bottom">
          
          <button  type="button">Button 2</button>
          
        </Tooltip>
      </div>

      <div className="bottom-left-button">
        <Tooltip
          content="Tooltip text goes here"
          direction="top"
        >
           
          <button type="button">Button 4</button>
          
        </Tooltip>
      </div>

      <div className="center-button">
        <Tooltip
          content="Tooltip text goes here"
          direction="bottom"
          delay="0"
        >
          
          <button type="button">Button 3</button>
          
        </Tooltip>
      </div>

      <div className="bottom-right-button">
        <Tooltip
          content="Tooltip text goes here"
          direction="top"
        >
         
          <button type="button">Button 5</button>
          
        </Tooltip>
      </div>
    </div>
  );
}
