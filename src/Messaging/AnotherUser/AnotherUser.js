import React, { useEffect, useState } from 'react';
import { behaviouSubject, sub }  from '../MessageService';

class AnotherUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groupChat: false,
            groupMessages: []
        }
    }
//    const [ groupChat , setGroupChat ] = useState(false);
//    const [groupMessages, setGroupMessages] = useState( [] );
subscribeToGroup = () => {
        behaviouSubject.subscribe(res => this.setState({
            groupChat: 'Start Chatting'
        }))
 
        behaviouSubject.subscribe( {
            next : (msg) => {
                const messages =this.state.groupMessages;
                messages.push(msg);
                this.setState( {
                    groupMessages: messages,
                });
            }
        } )
    } 
    render () {
        const {groupChat, groupMessages} = this.state
        return (
            <div className="col-sm-offset-2 " style={{marginLeft: '80px'}}> 
                <button  className="btn btn-sm btn-primary" onClick= {() => this.subscribeToGroup()}>
                    Join Group
                </button>
        
                <div>
                    <h4> Group </h4>
                    <p> {groupChat}- {groupMessages.length} </p>
                </div>
                {
                     groupMessages.length > 0 && groupMessages.map(msg => (
                            <p > {msg } </p>
                          )  )
                      }
            
            </div>
            )
    }
   
}
export default AnotherUser;