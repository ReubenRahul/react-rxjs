import React, { PureComponent } from 'react';
import ListHoc from '../ListHoc/ListHoc.component';

class ListComponent extends PureComponent {
    render() {
        return (
            <div> 
                <h2> This is title </h2>
                <div> Content is here </div>
            </div>
        )
    }
}

export default ListHoc(ListComponent);