import React from 'react';
const ListHoc = (Component) => 
    class ListHocComponent extends React.Component {
      
        constructor(props) {
            super(props);
            this.state =  {
                technology: 'Dummy',
            }; 
        }
        render() {
            return (
                <div className="testing">
                    Welcome in {this.state.technology}
                    <Component />
                </div>
            )
        }
    }   

    export default ListHoc;