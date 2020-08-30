import React , { Component } from 'react';
import User1 from '../User1/User1';
import User2 from '../User2/User2';
import MessageList from '../MessageList/MessageList';
import { sub } from '../MessageService';

class SubjectComponent extends Component {
 state = {
   messages:  [],
 }

 componentDidMount() {
   sub.subscribe({
      next : (msg) => {
        let { messages } = this.state;

        messages.push( {
          title: msg,

        })

         this.setState( {
           messages
         })
      }
   })
 }

 clickEventHandler = (val)  => {
   let { messages } = this.state;
   messages.push( {
     title: val
   })
this.setState( {
  messages
})
 }
  render() {


    return(
          <div>
            <p> Message Subject Component </p>
            <User2 />
            <MessageList messages = {this.state.messages} />
          </div>
    )
  }

}

export default SubjectComponent;
