import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Switch, Route, Redirect, BrowserRouter, Link } from 'react-router-dom';
import FormEvent from './FormEvent/FormEvent.component';
import ofComponent from './OfComponent/of.component';
import './App.css';
import  formComponent from './formComponent/form.component';
import ToArrayComponent from './toArrayComponent/toArray.component';
import CustomObservableComponent from './customObservable/custom-observable.component';
import MapOperatorComponent from './MapOperator/MapOperator.component';
import TapOperatorComponent from './TapOperator/TapOperator.component';
import TakeComponent from './TakeComponent/TakeComponent';

class App extends React.Component
 {

   renderHome = ()  =>(
     <div className="container-fluid">
          <div className="row">
              <ul className="navbar">
                <li> <a><Link to= "/first">From (Click Handler) Event</Link> </a> </li>
                <li> <a><Link to="/of">of Observable</Link> </a> </li>
                <li> <a> <Link to="/form">From Observable </Link> </a> </li>
                <li> <a> <Link to="/custom-observable">Custom Observable </Link> </a> </li>
                <li> <a className=""> <Link to="/map-operator">Map operator </Link> </a></li>
                <li> <a className=""> <Link to="/tap-operator">Tap operator </Link> </a></li>
                <li> <Link to="/take-operator">Take Operator </Link> </li>
              </ul>

          </div>
      </div>
   )

   render()
   {

     return(
       <BrowserRouter>
         <div className="App">
           <div className="container-fluid">
           <Switch>
              <Route path = "/first" component = {FormEvent} />
              <Route path="/of" component={ofComponent} />
              <Route path = "/form" component =  {formComponent}/>
              <Route path = "/to-array" component =  {ToArrayComponent}/>
              <Route path="/custom-observable" component= {CustomObservableComponent} />
              <Route path="/map-operator" component= {MapOperatorComponent} />
              <Route path="/tap-operator" component={TapOperatorComponent} />
              <Route path="/take-operator" component={TakeComponent} />
              <Route render = {this.renderHome} />
           </Switch>
           </div>
         </div>

       </BrowserRouter>

     )
   }
 }
export default App;
