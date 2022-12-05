import React, { useState } from "react";
import {
  StateMachineProvider,
  createStore,
  useStateMachine,
} from 'little-state-machine';
//import Tooltip from "./Tooltip";
import BuilderInput from "./BuilderInput";
import "./styles.css";
import { Output } from "./Output";
    
export function updateState(state, payload) {
  return {
    ...state,
    ...payload
  };
}




  createStore({
   content:'Default Content',
   position:'top',
   bgcolor:'',
   textcolor:'',
   btnNum:''
  });



export default function App() {

  return (
  <StateMachineProvider>
    <div>
    <BuilderInput />
    <Output />
    </div>
  </StateMachineProvider>
  );
}
