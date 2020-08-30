import React , { Component } from 'react';
import MessageTextAreaComponent from '../MessageTextAreaComponent.js';
import { sub, behaviouSubject } from '../MessageService';

class User2 extends Component {
  test = () => (
    // true
    document.getElementById("user_2").value = ''
  )
  render() {


    return(
          <div style = {{marginTop:'20px'}}>

              <textarea name="message" rows = "3" cols = "44" id = "user_2" >first value   </textarea>

              <button style = {{marginLeft:'10px'}}
                type="button"
                id ="add_msg"
                className="btn btn-sm btn-success"
                onClick={ () => { sub.next( document.getElementById('user_2').value );  behaviouSubject.next(document.getElementById('user_2').value ); this.test() } }
               >
               Add Message
             </button>

            </div>

    )
  }

}

export default User2;
