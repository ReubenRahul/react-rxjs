import React , { Component } from 'react';
import { sub } from '../MessageService';

class Group extends Component {
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
 styleCss = () => (
   { padding: "9px 14px",
    marginBottom: "14px",
    backgroundColor: "#f7f7f9",
    border: "1px solid #e1e1e8",
    borderRadius: "4px",}
 );
    

  render() {


    return(
          <div>
            <div className="card card-body col-sm-4">
              <h3> Group 1 </h3>
                {
                  this.state.messages.length > 0 && this.state.messages.map(msg => (
                    <p style={this.styleCss()}> {msg.title } </p>
                  )  )
              }
             </div>
          </div>
    )
  }

}

export default Group;
