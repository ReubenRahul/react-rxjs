import React , { Component } from 'react';
import MessageTextAreaComponent from '../MessageTextAreaComponent.js';


class User1 extends Component {

  render() {


    return(
      <div>
        User 1 Component
          <MessageTextAreaComponent textarea_id ="user_1" clickHandler = {this.props.clickEventHandler} />
        </div>
    )
  }

}

export default User1;
