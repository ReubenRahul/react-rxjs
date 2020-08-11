import React, { PureComponent } from 'react';
import { ajax } from 'rxjs/ajax';
import { map, take, toArray, filter, tap, retry, retryWhen, delayWhen } from 'rxjs/operators';
import { from, of, timer } from 'rxjs';
import { print } from '../Common/Utils/Print';

export default class RetryPracticalComponent extends PureComponent {
    //make http request through rxjs
    state = {
        user: [],
    }

    componentDidMount() {
        // var xmlHttp = new XMLHttpRequest();
        // xmlHttp.open( "GET", "https://jsonplaceholder.typicode.com/posts", false ); // false for synchronous request
        // xmlHttp.send( null );
        // const data = [...xmlHttp.responseText];
        // console.log( xmlHttp.responseText)
        // const obj$ =  fetch('https://jsonplaceholder.typicode.com/posts')
        //             .then(response => { console.log(response); return response.json() })
        //             .then(json =>
        //                 from(json).pipe(take(4)).subscribe(data => print("elContainer", data.title))
        //             );
        const obj$ = ajax( "https://jsonplaceholder.typicode.com/posts")
                        .pipe(
                                 tap(data => {
                                     console.log(data);
                                   
                                 } ),
                                map(data => {console.log(data); return data.response } ),
                                map(res => this.setState({user:res } ) ),
                               
                            );
        setTimeout(() => {
           from(this.state.user).pipe(take(4),map(data => data.title)).subscribe(data => print('elContainer', data));
        }, 3000);
        obj$.subscribe({ next : data => console.log(data),
            error : val => retry(3) })
        // obj$.subscribe(data => console.log(data))
// console.log(typeof(data), data)
//         from(data).pipe( take(4), map(val =>{ console.log('vl',val); return val.title } ) ).subscribe(d => {  console.log('df',d);print("elContainer", d)})
                    // console.log(obj$, 'obj')
    }


    render() {
        return (
            <div className="row">
                <div className="col-sm-6">
                    <p className="border rounded bg-light py-2 px-3"> of(Retry Method) </p>
                    <hr />
                    <ul id="elContainer"></ul>
                </div>
            </div>
        )
    }
}
