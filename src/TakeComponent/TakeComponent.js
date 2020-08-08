import React, { useState, useEffect } from 'react';
import {Rxjs, from, fromEvent, Observable} from 'rxjs';
import {map, take, takeUntil, takeLast, tap } from 'rxjs/operators';
import { print } from '../Common/Utils/Print';
import FormEvent from '../FormEvent/FormEvent.component';

const TakeComponent = () => {
    const [takeLastNumber, setTakeLastNumber] = useState(3);
    const [users, setUsers] = useState([
        {
            id: 1,
            name: 'JS'
        },
        {
            id: 2,
            name: 'Angular'
        },
        {
            id: 3,
            name: 'React'
        },
        {
            id: 4,
            name: 'Vue JS'
        }
    ]);

//    const eventObj$ =  fromEvent(document.getElementById("last_number"),'click');
//    eventObj$.subscribe( console.log('dfd'));


  
    useEffect(() => {
        const takeObj$ = from(users).pipe(map(user => user.name), take(4));
        takeObj$.subscribe((user) => {
            console.log(user)
            print('elContainer',user);
            return true;
        })
       
    }, []);

    useEffect( () => {
    //     // takeUntil   
    //     // as array is empty its mean it can render only  once
    //     // this can be use as a componentDidMount in functional component
    //     // this will render after the html render on browser
    //     // can use pipe again
        document.getElementById('elContainer2').innerHTML = '';
        console.log(takeLastNumber);
        const takeObj$ = from(users).pipe(map(user => user.name));
        const takeLastObj$ = takeObj$.pipe(takeLast(takeLastNumber));
        takeLastObj$.subscribe(last => print('elContainer2', last));
    }, [takeLastNumber])


    return (
       <div className="row">
         
            <div className="col-sm-4">
                <strong> Take  </strong>
                <hr />
                <div className="">
                     <ul id="elContainer"></ul>
                </div>
            </div>


            <div className="col-sm-4">
                <strong> Take Last </strong>
                <input type="number" min="1" max="3" 
                onChange={(e)=> setTakeLastNumber(e.target.value)} 
                />
                <hr />
                <div className="">
                     <ul id="elContainer2"></ul>
                </div>
            </div>

        </div>
    )
}

export default TakeComponent;