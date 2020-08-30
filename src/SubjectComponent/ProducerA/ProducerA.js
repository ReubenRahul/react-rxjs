import React , {Component} from 'react';
import ConsumerA from '../ConsumerA/ConsumerA';
import {messageService,
subscriber } from '../MessageService/MessageService';
import ProducerB from '../ProducerB/ProducerB';
class ProducerA extends Component {

  render() {
      return (
           <div>
             <h3> ProducerA </h3>
             <button onClick = { (e) => subscriber.next(1)} > Increment Count </button>
                <ConsumerA />

            
          </div>
     );
  }

}

export default ProducerA;
