import React, { Component } from 'react';
import PersonContext from '../person';

class PersonContextComponent extends Component {



    render() {
        return (
            // PersonComponent.js file 
            // we are not passing isAutenticate props anymore
            this.props.persons.map(person => (
               <PersonContext
                key = {person.id} 
                person ={person} 
               />
            ))
        )
    }
} 

export default PersonContextComponent;