import React, { Component} from 'react';
import { fromEvent }  from 'rxjs';
import { tap, map, debounceTime } from 'rxjs/operators';

class DebounceComponent extends Component {
  state = {
    posts:[],
  }
  componentDidMount() {
    const search$ =   fromEvent(document.getElementById('search'), 'keyup');
    search$.pipe(
      debounceTime(500),
    map( e => e.target.value)
  ) . subscribe(val =>  {
    fetch('http://jsonplaceholder.typicode.com/posts/'+val , {
       method: 'GET'
    })
      .then( res =>  res.json() )
      .then(json => {
        const posts = [];
        posts.push(json);
        this.setState( {
          posts
        })
      } );
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

export default DebounceComponent;
