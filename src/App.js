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
import DebounceComponent from './DebounceComponent/Debounce.component';
import DistinctUntilChangedComponent from './DistinctUntilChanged/DistinctUntilChanged.component'
import LifecyleComponent from './LifecyleComponent/Lifecyle.component';
import SubjectComponent from './SubjectComponent/Subject.component';
// import { Chat as SubjectMessagingComponent } from './Messaging/SubjectComponent/SubjectComponent';
import  Chat from './Messaging/Chat';
import ReplaySubjectComponent from './ReplaySubject/ReplaySubjectComponent';
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
          <div className="card-header">SubjectComponent
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


          <div className="col-sm-3">
            <div className="card">
              <div className="card-header">
                 <Link to="/debounce"> Debounce Component </Link>
                </div>
            </div>
          </div>


            <div className="col-sm-3">
              <div className="card">
                <div className="card-header">
                   <Link to="/distinct-unit-changed"> Distince Until Chnaged </Link>
                  </div>
              </div>
            </div>

            <div className="col-sm-3">
              <div className="card">
                <div className="card-header">
                   <Link to="/lifecyle"> Life Cycle </Link>
                  </div>
              </div>
            </div>

            <div className="col-sm-3">
              <div className="card">
                <div className="card-header">
                   <Link to="/subject"> Subject </Link>
                  </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <div className="card-header">
                   <Link to="/subject-message"> Subject Messaging Component Chat </Link>
                  </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <div className="card-header">
                   <Link to="/replay-subject"> Replay Subject </Link>
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
              <Route path="/debounce" component={DebounceComponent} />
              <Route path="/distinct-unit-changed" component={DistinctUntilChangedComponent} />

              <Route path="/lifecyle" component={() => <LifecyleComponent tech="react" />} />
              <Route path="/subject" component={SubjectComponent} />
              <Route path ="/subject-message" component = {Chat} />
              <Route path ="/replay-subject" component = {ReplaySubjectComponent} />

              <Route render = {this.renderHome} />
           </Switch>
           </div>
         </div>

       </BrowserRouter>

     )
   }
 }
export default App;
