import React from 'react'
import Tooltip from './Tooltip'
import { updateState } from './App';
import {
    useStateMachine,
  } from 'little-state-machine';
  import './styles.css';

export const Output = () => {
    const { actions, state } = useStateMachine({ updateState});
    return(
        <div className="boxed1">
      <div className="top-left-button">
        <Tooltip content={`${state.btnNum==='1'?`${state.content}`:'default'}`} direction={`${state.btnNum==='1'?`${state.position}`:'top'}`}>
          <button type="button">Button 1</button>
        </Tooltip>
      </div>
      <div className="top-right-button">
        <Tooltip content={`${state.btnNum==='2'?`${state.content}`:'default'}`} direction={`${state.btnNum==='2'?`${state.position}`:'top'}`}>
          <button  type="button">Button 2</button>
        </Tooltip>
      </div>

      <div className="bottom-left-button">
        <Tooltip
          content={`${state.btnNum==='4'?`${state.content}`:'default'}`} direction={`${state.btnNum==='4'?`${state.position}`:'top'}`}
        >
           
          <button type="button">Button 4</button>
          
        </Tooltip>
      </div>
      <div className="center-button">
        <Tooltip
          content={`${state.btnNum==='3'?`${state.content}`:'default'}`} direction={`${state.btnNum==='3'?`${state.position}`:'top'}`}
        >
          <button type="button">Button 3</button>
        </Tooltip>
      </div>

      <div className="bottom-right-button">
        <Tooltip
          content={`${state.btnNum==='5'?`${state.content}`:'default'}`} direction={`${state.btnNum==='5'?`${state.position}`:'top'}`}
        >
         
          <button type="button">Button 5</button>
          
        </Tooltip>
      </div>
    </div>
    )
}