import React, { PureComponent } from 'react';
import ListHoc from '../ListHoc/ListHoc.component';
import UserListComponent from './UserListComponent';

class ListComponent extends PureComponent {
    state = {showText: false}

    buttonClickHandler = (e) => {
        // console.log(this.state.showText,  e.target.checked);
        this.setState({
            showText: e.target.checked
        });
        console.log(this.state.showText);
        
    }
    render() {
        const users = [{
            id: 1,
            name: 'Dummy'
        },
        {
            id: 2,
            name: 'Test'
        }
        ];
        return (
            
            <div>
              {console.log(users, this.state.showText)}
              {users.map(user => (
                <UserListComponent showText={this.state.showText} clickHandler={this.buttonClickHandler} id ={user.id} name ={user.name} />
              ))}
                    
            </div>
        )
    }
}

export default ListHoc(ListComponent);