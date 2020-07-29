import React from 'react';
import { fromEvent } from 'rxjs';
import {print} from '../Common/Utils/Print';
class FormEvent extends React.Component

{
  constructor(props)
  {
    super(props);

  this.state = {count:0};
  }

  componentDidMount()
  {
    // README
    // here this component only trigger once but
    // as we have source$ observable which see that if some one ask for Video
    // it always pass the strem of data
    //where later on we show that stream of data into another div as a result 
    const button = document.getElementById('fromevent_handler');
      const source$ = fromEvent(button, 'click');

      source$.subscribe(val => {
        let {count} = this.state;
        this.setState({
          count: ++count,
        })
        print("fromevent_result", `Video ${this.state.count}`)

      });

  }

  render()
  {
    return (
      <div className="container-fluid">
         <div className="row">
           <div className="col-sm-3">
              <div className="card">
                  <div className="card-header">
                      Form Event Handler on Videos
                  </div>
                 <div className="card-body">
                    <button id="fromevent_handler" className="btn btn-primary btn-sm" > Click Here </button>
                 </div>
              </div>
            </div>

            <div className="col-sm-3">
            <div className="card">
                <div className="card-header">
                  Result
                </div>
               <div className="card-body">
                  <ul id="fromevent_result">

                  </ul>
               </div>
            </div>
            </div>
          </div>
        </div>

    )
  }
}

export default FormEvent;
