import React, { PureComponent } from 'react';
 class UserListComponent extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            isTestName: false,
            isDummyName: false,
            overAll: false
        }
     }
    //  static getDerivedStateFromProps(state, props) {
    //     if(props.overAll) {
    //         return { overAll: true}
    //     }
         
    //  }
     componentDidMount() {
        const { name} = this.props;
         
        this.setState( {
            isTestName: name === 'Test',
            isDummyName: name === 'Dummy',
         })
     }
    render() {
        const {id, name} = this.props;
        const {isTestName, isDummyName, overAll} = this.state;

        
        return (
            <div>
                {this.props.showText && 'Text is Visible'}
                <label for="checkbox"> Click here </label>
                <input type="checkbox" onClick= {this.props.clickHandler} />
                   <p> {id} ::  {name} {isTestName && 'TestName'} {isDummyName && 'Dmmm'} </p>
            </div>
        )
    }
}
export default UserListComponent