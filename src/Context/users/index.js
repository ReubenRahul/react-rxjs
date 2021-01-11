import React, { Component } from 'react';
import PersonContextComponent from '../persons';
import IsAuthenticate from '../Context.component';
class UserContextComponent extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isAuthenticate: false,
            persons : [
                {
                    id: 1,
                    name: 'Foo'
                },
                {
                    id: 2,
                    name: 'bar'
                },
                {
                    id: 3,
                    name: 'zar'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                   {/* with  context 
                    UsersComponent.js File
                    import IsAuthenticate from '../Context.component';
                       
                   UsersComponent.js File*/}
                <IsAuthenticate.Provider value={true}>
                  <PersonContextComponent persons ={this.state.persons} isAuthenticate = {this.state.isAuthenticate}/>
                </IsAuthenticate.Provider> 

                {/* without context  UsersComponent.js File*/}
                  {/* <PersonComponent persons ={this.state.persons} isAuthenticate = {this.state.isAuthenticate}/> */}
                
            </div>
        )
    }
} 

export default UserContextComponent;