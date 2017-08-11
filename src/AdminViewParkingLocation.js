import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router-dom';
import * as firebase from 'firebase';
import './App.css'

export class AdminViewParkingLocation extends Component{
    constructor(props){
        super(props);
        this.state={
            location:''
        }
    }
    componentDidMount()
    {
      var rootRef = firebase.database().ref().child('Location/');
      rootRef.on('value',snap=>{
          this.setState({
              location:snap.val()
          })
      })
    //   debugger;
    }
    render(){
        let locations='';
        if(this.state.location!=null)
        {
            
            locations = Object.keys(this.state.location).map((key) =>{
            return(
                <div className="jobview">
                    <p className="jobviewheading">Area: {this.state.location[key].area}</p>
                    <p className="jobviewheading">Slot: {this.state.location[key].slots}</p>
                   <Link to={{
                       pathname:'viewslot',
                       state:{area:this.state.location[key].area,slot:this.state.location[key].slots}
                   }}
                   
                   > <button className="jobviewbutton" >View</button></Link> 
                </div>
            
            )
            })

            // debugger;
        }
        return(
            <div>
                {locations !=='' ? locations :<span>adada</span>}
            </div>
        )
    }
}