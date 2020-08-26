import React, { Component } from 'react';
import { fromEvent , of }  from 'rxjs';
import { tap, map, debounceTime, distinctUntilChanged, pluck } from 'rxjs/operators';


class DistinctUntilChangedComponent extends Component {
  state = {
    posts:[],
  }

  componentDidMount() {
    const search$ =   fromEvent(document.getElementById('search'), 'input');
  const $obs =   search$.pipe(
        pluck('target', 'value'),
        debounceTime(2000),
        distinctUntilChanged(),
     ) ;
       $obs. subscribe(val =>  {
       console.log(val,'test');
       distinctUntilChanged( (a, b) => {
         console.log(a, 'ddd', b, 'bbbb')
         return false;
       })


  })
  }


  render() {
    return (
      <div>
         <div>
          <input type="text" name="search" id="search" />
         </div>
         {this.state.posts.map(data => (
            <div>
                <p> {data.id} </p>
               <p> {data.title} </p>
           </div>
         ))}
      </div>
    )
  }
}

export default DistinctUntilChangedComponent;
