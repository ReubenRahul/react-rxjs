import React from 'react';

const ButtonComponent = ({props} ) => {
    console.log(props.children)
    return (
        <div>
           {props}
        </div>
    )
} 

export default ButtonComponent;

