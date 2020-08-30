import React , {Component} from 'react';
import ConsumerB from '../ConsumerB/ConsumerB';
import {messageService,
subscriber } from '../MessageService/MessageService';

class ProducerB extends Component {

  render() {
    return (
      <div>
        <h3> ProducerA </h3>
        <button onClick = { (e) => subscriber.next(-1)} > Decrement Count </button>
        <ConsumerB />
      </div>
    )
  }

}

export default ProducerB;
