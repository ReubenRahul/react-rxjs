import React, { useEffect, useState } from 'react';
import { of } from 'rxjs';
import { toArray } from 'rxjs/operators';

/**
 * Description: collect all source of emission and emit
 * them to array when source is completed
 * 
 */
const ToArrayComponent = () => {
    //componentDidMount
    let [toArrayState, setToArrayState] = useState( [] );

    useEffect(() => {
        const of$ = of('a ','b ', 'd ');
        const finalData$ = of$.pipe( toArray() );
        finalData$.subscribe(data => toArrayState.push(data) );
        setToArrayState(Object.values(toArrayState));
      
    }, [])
    
    return (
        <div className="row">
            <div className="col-sm-6">
            <div className="card">
                <div className="card-header">
                    To Array Component
                </div>
                <div className="card-body">
                    {toArrayState.map(data => (
                        <p key = {new Date()}> {data} </p>
                    )
                    )}
                   <ul id="elContainer"></ul>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ToArrayComponent;