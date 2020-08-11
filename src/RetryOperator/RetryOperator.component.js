import React, { useState, useEffect } from 'react';
import { interval, throwError, of, timer } from 'rxjs';
import { map, mergeMap, retry, retryWhen, tap, delayWhen } from 'rxjs/operators';
import { print } from '../Common/Utils/Print';

const RetryOperatorComponent  = () => {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        const source = interval(1000);
        const ex = source.pipe( mergeMap(val => {
            console.log(val);
            if (val > 2) {
                return throwError('Error !');
            }
            return of(val);
        }),
        retry(1)
        ).subscribe( {
            next : val => print('elContainer', val),
            error: val => console.log(`${val} : Retried 2 times`),
        }  )
    }, []);


    useEffect(() => {
        const source = timer(10000, 1000);
        const ex = source.pipe( 
            map (val => {
                if( val > 1) {
                    throw val
                }
                return val
            }),
            retryWhen(errors => errors.pipe (
                tap(val => console.log('error occcur')),
                delayWhen(timer(4000))
            ))
        );
        ex.subscribe({
            next: val => print('elContainer2', val),
            error: val => console.log('error occur'),
        })
    }, []);
    return (
        <div className="row">
        <div className="col-sm-4">
            <strong> Array </strong>
            <hr />
            <div className="">
                <p className="border rounded bg-light py-2 px-3"> <strong> Retry 1: </strong> Number </p>
                     <hr />
                 <ul id="elContainer"></ul>
            </div>
        </div>


        <div className="col-sm-4">
            <strong> Promise </strong>
            <hr />
            <div className="">
                <p className="border rounded bg-light py-2 px-3"> <strong> Retry When: </strong> &#123;'Laravel', 'Zend','CodeIgniter', 'Symfony' &#125; </p>
                     <hr />
                 <ul id="elContainer2"></ul>
            </div>
        </div>

    </div>
    )
}

export default RetryOperatorComponent;