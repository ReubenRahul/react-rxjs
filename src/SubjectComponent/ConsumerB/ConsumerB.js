import React , { Component } from 'react';
import { subscriber , messageService } from '../MessageService/MessageService';
class ConsumerB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
      subscriber.subscribe ( (v) => {
        let {counter} = this.state;
        counter = counter + v;
        this.setState( {
          counter
        })
      })
  }

  render() {
    let { counter } = this.state;

    return(
      <div>
        <hr />

        <h3> Counter For Consumer B </h3>
        <div> Counter  {counter} </div>
          <button onClick = { (e) => subscriber.next(-1)} > Decrement Count </button>
      </div>
    )
  }

}

export default ConsumerB;
