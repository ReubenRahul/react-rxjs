import React, { PureComponent, Suspense } from 'react';
import UserProfileComponent from './UserProfile/UserProfileComponent';

class UserComponent extends PureComponent {
    constructor(props) {
      super(props);
      this.state = { user:'' };
    }
    static getDerivedStateFromProps(state, props) {
        // console.log(state);
    }
    
    componentDidMount()  {
        this.fetchUserProfile();
    }
fetchUserProfile = () =>   {
        return fetch('https://jsonplaceholder.typicode.com/users/3')
        .then(response => response.json())
        .then(json => {
            this.setState( {
                user: json
            })
          })
    }
    render() {
        const {user} = this.state;
        const resourse = this.fetchUserProfile();
       const renderUserProfile = () => {
          return (  <Suspense fallback={<h1>Loading profile...</h1>}>
                <UserProfileComponent user = {user} resourse ={resourse} /> 
          </Suspense> )
       }
      return (
            <div>
                <p> User Compoent</p>
                {renderUserProfile()}
            </div>
      )
    }
  }
export default UserComponent;