import React from 'react';
import { messageService,  subject } from './MessageService/MessageService';
import { fromEvent } from 'rxjs';
import { pluck, map, debounceTime } from 'rxjs/operators';

import ChildComponent from './ChildComponent/Child.component';

import ProducerA from './ProducerA/ProducerA';
import ConsumerB from './ConsumerB/ConsumerB';
class SubjectComponent extends React.Component {
  //
  // state = {
  //   inputVal: ''
  // }
  // // feature of subject
  // // subject is observable and observer and its multicast means gives to many platgfomr
  // componentDidMount() {
  //
  //   const $obs =  fromEvent(document.getElementById('subject_name'), 'input');
  //   $obs.pipe(
  //       debounceTime(300),
  //       pluck( 'target', 'value'),
  //       map(val => val)
  //   ).subscribe(val => subject . subscribe());
  //
  // }


  render() {
    return (
      <div className="row">
          <div className="col-sm-4">
              <strong> Subject </strong>
              <hr />
              <div className="">
              <ProducerA />
              <hr />
              <ConsumerB />

              </div>
          </div>


      </div>
    )
  }

}

export default SubjectComponent;
