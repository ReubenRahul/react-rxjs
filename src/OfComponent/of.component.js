import React, { useState, useEffect } from 'react';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { print } from '../Common/Utils/Print';

/**
 *  of ==> create an observable from string type data or object 
 * type data
 * 
 * here are used functional component of react
 *  == Hook are used here
 * useState used to create state and update State
 * 
 * useEffect -: used for create life cycle in functional component
 * 
*/



const OfComponent = () => {
    // useState
   let [ ofData, setOfData ] = useState( [] );
    /**
     * 
     * componentDidMount
     * 
     */
    useEffect(() => {
       const of$ = of('India', 'South Africa', 'Australia');
       of$.subscribe( val => {
           print( "elContainer", val );
       } );
    },[]);

//===
    useEffect( ( ) => {
        const of$ = of( {a: 'India', b: 'South Africa', c:  'Australia'} );
        of$.subscribe( data => {
            setOfData(data);
        })
    }, []);


    return (
        <div className="row">
            <div className="col-sm-6">
                <p className="border rounded bg-light py-2 px-3"> of(India, South Africa, Australia) </p>
                <hr />
                <ul id="elContainer"></ul>
            </div>


            <div className="col-sm-6">
                <p className="border rounded bg-light py-2 px-3"> of(&#123;India, South Africa, Australia &#125;) </p>
                <hr />
               
                <ul id="elContainer2">
                   <li> {ofData.a} </li>
                   <li> {ofData.b} </li>
                   <li> {ofData.c} </li>
                </ul>
            </div>
            
        </div>
    )
}

export default OfComponent;