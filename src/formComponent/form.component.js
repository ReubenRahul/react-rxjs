import React, { useState, useEffect } from 'react';
import { from } from 'rxjs';
import { print } from '../Common/Utils/Print';
/**
 * Here we will get example of 3 types
 *  from -: create observable from 3 types
 * 1: array 2: iterabale(generator) 3: promise
 */
 
const FormComponent = () => {
    
    const formArray$ = from([ 'React','Vue', 'Angular'] );
    useEffect( () => {
        formArray$.subscribe(obj =>  print('elContainer', obj));
        } , []);

    //from- promise
    
    useEffect( () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() =>  {
            resolve( ['Laravel', 'Zend','CodeIgniter', 'Symfony'] );
            reject('some error occue')
        }, 1000)
       
    });
    const promise$ = from(promise);
    promise$.subscribe( data => {
console.log(data);
print('elContainer2', data)
    }  )
}, [])
           
  


    return (
        <div className="row">
            <div className="col-sm-4">
                <strong> Array </strong>
                <hr />
                <div className="">
                    <p className="border rounded bg-light py-2 px-3"> <strong> Data: </strong> [ 'React','Vue', 'Angular'] </p>
                         <hr />
                     <ul id="elContainer"></ul>
                </div>
            </div>


            <div className="col-sm-4">
                <strong> Promise </strong>
                <hr />
                <div className="">
                    <p className="border rounded bg-light py-2 px-3"> <strong> Data: </strong> &#123;'Laravel', 'Zend','CodeIgniter', 'Symfony' &#125; </p>
                         <hr />
                     <ul id="elContainer2"></ul>
                </div>
            </div>

        </div>
    )
}


export default FormComponent;