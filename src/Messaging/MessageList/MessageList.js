import React , { Component } from 'react';
import User1 from '../User1/User1';
import User2 from '../User2/User2';


class MessageList extends Component {
  renderMessages = () => {
    const { messages } = this.props;

  return  messages.length > 0  ? messages.map(msg => <p> {msg.title} </p>) : <p> Not found </p>

  }


  render() {


    return(
          <div>
              { this.renderMessages() }
          </div>
    )
  }

}

export default MessageList;
