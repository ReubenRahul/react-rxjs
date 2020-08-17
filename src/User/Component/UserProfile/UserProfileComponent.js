import React from 'react';

const UserProfileComponent = (props) => {
    const {  user}  =  props;
    return (
        <div>
           name : {user.name }
        </div>
    )
}

export default UserProfileComponent;