import React, { Component } from 'react';

const MessageTextAreaComponent = ( {textarea_id, clickHandler } ) => {
  return (
    <div>
      <textarea name="message" rows = "3" cols = "44" id ={textarea_id} />
      <button type="button" id ="add_msg" onClick={() => clickHandler( document.getElementById(textarea_id).value )}> Add Message </button>
    </div>
  )
}
export default MessageTextAreaComponent;
