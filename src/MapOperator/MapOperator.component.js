// MapOperator.component.js

import React from 'react';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { print } from '../Common/Utils/Print';

class MapOperatorComponent extends React.Component{
    componentDidMount()
    {
        console.log('didmint')
        const members = [
            {
                id:1, name:'Rahul'
            },
            {
                id:2, name:'Reuben'
            }
        ];
        const obs$ = from(members).pipe( map(member => member.name));
        obs$.subscribe(data => print('elContainer', data));
    }

    render()
    {
        
        return (
            <div className="row">
            <div className="col-sm-4">
                <strong> Map Operator Observable </strong>
                <hr />
                <div className="">
                    <p className="border rounded bg-light py-2 px-3"> 
                        <strong> Data: </strong> [ test data] </p>
                        <hr />
                    <ul id="elContainer" >
                    </ul>
                </div>
            </div>


           

        </div>
        )
    }
}

export default MapOperatorComponent;