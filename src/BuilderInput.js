import React from "react";
import Builder from "./Builder";
const BuilderInput = (props) => {
    const saveTooltipDataHandler = (enteredTooltipData) => {
      const tooltipData = {...enteredTooltipData};
      props.onAddData(tooltipData);
    };
  
    return (
      <div>
        <Builder onChangeTooltipData={saveTooltipDataHandler} />
      </div>
    );
  };
  
  export default BuilderInput;