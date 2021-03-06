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
import ListComponent from './Hoc/List/List.component';

class App extends React.Component
 {

   renderHome = ()  =>(
     <div className="container-fluid">
          <div className="row">


              <div className="col-sm-3">
                <div className="card">
                  <div className="card-header">
                      <Link to= "/first">From (Click Handler) Event</Link>
                    </div>
                </div>
              </div>


              <div className="col-sm-3">
                <div className="card">
                  <div className="card-header">
                      <Link to="/of">of Observable</Link>
                    </div>
                </div>
              </div>


              <div className="col-sm-3">
                <div className="card">
                  <div className="card-header">
                     <Link to="/form">From Observable </Link>
                    </div>
                </div>
              </div>


            <div className="col-sm-3">
              <div className="card">
                <div className="card-header">
                   <Link to="/custom-observable">Custom Observable </Link>
                  </div>
              </div>
            </div>


          <div className="col-sm-3">
            <div className="card">
              <div className="card-header">
                 <Link to="/map-operator">Map operator </Link>
                </div>
            </div>
          </div>


        <div className="col-sm-3">
          <div className="card">
            <div className="card-header">
                <Link to="/tap-operator">Tap operator </Link>
              </div>
          </div>
        </div>


      <div className="col-sm-3">
        <div className="card">
          <div className="card-header">
             <Link to="/take-operator">Take Operator </Link>
            </div>
        </div>
      </div>


    <div className="col-sm-3">
      <div className="card">
        <div className="card-header">
           <Link to="/lists"> List </Link>
          </div>
      </div>
    </div>



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
              <Route path="/lists" component={ListComponent} />

              <Route render = {this.renderHome} />
           </Switch>
           </div>
         </div>

       </BrowserRouter>

     )
   }
 }
export default App;
