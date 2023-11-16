import React from 'react'
import Messages from './Messages'
import "@/styles/chatwrapper.scss"

const Chatwrapper = () => {
  function inputChangeHandler(){
    
  }
  return (
    <div className="chatwrapper">
      <div className="messages">
        <Messages />
      </div>
      <div className="input">
        <textarea onChange={inputChangeHandler}></textarea>
        <button>submit</button>
      </div>
    </div>
  );
}

export default Chatwrapper

//messages component input component then he gets file from backend , and this chatwrapper gets file id from parent component, installed react-textarea a context => handleMessage()=>{},message,handleInputChange()=>{},isLoading:false, chatContext,6.48
