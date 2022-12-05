import React, { useState,useRef } from 'react';
import { updateState } from './App';
import {
  useStateMachine,
} from 'little-state-machine';
import './Builder.css';

const Builder = (props) => {
  const { actions, state } = useStateMachine({ updateState});
 // const [buttontext, setButtonText] = useState('enter');
  const btnText = useRef();
  //const [bgcolor, setbgColor] = useState('');
  //const bgclr = useRef();
  //const [txtcolor, setTextColor] = useState('');
  //const txtclr =useRef();
  //const [poschange, setPos] = useState('');
  const pos = useRef();
  const btnchos=useRef();

  


  const submitHandler = (event) => {
    event.preventDefault();
    actions.updateState({ 
    content:btnText.current.value,
    position:pos.current.value,
    btnNum:btnchos.current.value
    
  })
  };

  console.log('state', state)

  return (
    <div className='boxed2'>
    <form onSubmit={submitHandler}>
      <div className='dropdown-controls'>
      <div className='dropdown-control'>
        <label>Select Button</label>
        <select ref={btnchos} >
          <option value='1'>Button 1</option>
          <option  value='2'>Button 2</option>
          <option  value='3'>Button 3</option>
          <option  value='4'>Button 4</option>
          <option  value='5'>Button 5</option>
        </select>
      </div>
        <div className='new-expense__control'>
          <label>Button Text</label>
          <input
            type='text'
            name='buttontext'
            ref={btnText}
           
          />
        </div>
        
        
        
        <div className='new-expense__control'>
          <label>Position Of Tooltip</label>
          <input
            type='text'
            
            ref={pos}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Fields</button>
      </div>
    </form>
    </div>
  );
};

export default Builder;