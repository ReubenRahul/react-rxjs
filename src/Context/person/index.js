import React, { Component, Fragment, useContext } from 'react';
import IsAuthenticate from '../Context.component';

const PersonContext = ({ person }) => {
    // nothing strict rule here just need to use useContext hook as this is functional component
    const isAuthenticateContext = useContext(IsAuthenticate);
    return (
        <Fragment>
            {/* instead of doing consumenr which can follow the below coding */}
            <IsAuthenticate.Consumer>
                {(isAuth) => (<div key={person.id}>
                    {isAuth ? <p> you are  autenticate</p> : <p> Please login</p>}
                    <p>{person.id} -- {person.name} </p>
                </div>)
                }
            </IsAuthenticate.Consumer>

            {/* this can be better approach */}
            <div key={person.id}>
                {isAuthenticateContext ? <p> you are  logged In </p> : <p> Please login</p>}
                <p>{person.id} -- {person.name} </p>
            </div>
        </Fragment>
    );
}

export default PersonContext;