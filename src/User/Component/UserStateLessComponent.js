
import React, { Suspense } from 'react';
import { fetchData, fetchUser} from "../Utils/Api"
const resource = fetchData();
const users = fetchUser()


const ProfileData = ()  => {
 
    const user = resource.user.read();
    return (
        <div>
            <ul>   {user.name} </ul>
            <li> Email: {user.email} </li>
        </div>
    )
}


const UserStateLessComponent = ()  => {
    return (
        <Suspense fallback = {<h1>User Loading ...</h1>} >
            <ProfileData />
        </Suspense>
    )
}

export default UserStateLessComponent;