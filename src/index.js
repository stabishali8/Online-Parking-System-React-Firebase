import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, } from 'react-router-dom';
import * as firebase from 'firebase';
import {Toolbarr} from './Toolbarr';
import {SignUp} from './SignUp';
import {SignIn} from './SignIn';
import {UserDashboard} from './UserDashboard';
import {AdminDashboard} from './AdminDashboard';  
import {AdminAddParkingLocation} from './AdminAddParkingLocation';
import {AdminViewParkingLocation} from './AdminViewParkingLocation';
import {ViewSlot} from './ViewSlot';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC86i4WE7hbsQolGq20Ya-wwO373uGVip8",
    authDomain: "parking-f1cdc.firebaseapp.com",
    databaseURL: "https://parking-f1cdc.firebaseio.com",
    projectId: "parking-f1cdc",
    storageBucket: "parking-f1cdc.appspot.com",
    messagingSenderId: "773096312359"
  };
  firebase.initializeApp(config);
  
ReactDOM.render(
<BrowserRouter>
        <div>   
            <Route exact path="/" component={App}/>
            <Route exact path="/toolbarr" component={Toolbarr}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/signin" component={SignIn}/>
            <Route exact path="/admindashboard" component={AdminDashboard}/>
            <Route exact path="/userdashboard" component={UserDashboard}/>
            <Route exact path="/adminaddparkinglocation" component={AdminAddParkingLocation}/>
            <Route exact path="/adminviewparkinglocation" component={AdminViewParkingLocation}/>
            <Route exact path="/viewslot" component={ViewSlot}/>
        </div>    
</BrowserRouter>, 
document.getElementById('root'));
registerServiceWorker();
