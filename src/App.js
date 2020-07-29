import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Switch, Route, Redirect, BrowserRouter, Link } from 'react-router-dom';
import FormEvent from './FormEvent/FormEvent.component';
import './App.css';
class App extends React.Component
 {
   renderHome = ()  =>(
     <div className="container-fluid">
          <div className="row">
              <ul className="navbar">
                <li> <a><Link to= "/first">Form Event</Link> </a> </li>
                <li> <a><Link to= "/first">Form Event</Link> </a> </li>
              </ul>

          </div>
      </div>
   )

   render()
   {

     return(
       <BrowserRouter>
         <div className="App">
           <Switch>
              <Route path = "/first" component = {FormEvent} />
              <Route path = "/second" component =  {FormEvent}/>
              <Route render = {this.renderHome} />
           </Switch>
         </div>

       </BrowserRouter>

     )
   }
 }
export default App;
