import React, { useState, useEffect } from 'react';
import { from, interval } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';
import { print } from '../Common/Utils/Print';

const TapOperatorComponent = () => {
   const [member, setMember] = useState( [ {
        id:1, name:'Rahul',
    },
    {
        id:2,name:'Reuben'
    }

]);
useEffect( () => {
const int$ =interval(1000).pipe(
    take(5),
    tap(num => console.log(num)),
    map(num => num * 2),
    tap(num => console.log('after change-->',num)) 
 );
// int$.pipe(num => tap(console.log(num)));
int$.subscribe( data => print("elContainer2", data));
},
 [])

// const obs$ = from(member).pipe(
//     tap(console.log(member) ),
//     map(member => member.name),
//     tap(console.log(member))
// );
// int$.subscribe( data => console.log(data) )
// console.log(member);
    return (
        <div>
              <ul id="elContainer2"></ul>
        </div>
    )
}

export default TapOperatorComponent;