import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {Link} from 'react-router-dom';
import * as firebase from 'firebase';
import {SignUpToolbar} from './SignUpToolbar';
import './App.css'

const style = {
  height: 370,
  width: 400,
  margin: 70,
  textAlign: 'center',
  display: 'inline-block',
};

const styling = {
  margin: 12,
};

const styles = {
    margin:15,
    radioButton: {
    marginTop: 4,
  },
};

export class SignUp extends Component{
    constructor(){
        super();
        this.state = {
            username : '',
            email : '',
            password : ''
        }
    }
    justSubmit(e){

        firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).catch(function(error) {
      // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + " " + errorMessage);
     
    }).then(()=>{
     //set into firebase
      var uid = firebase.auth().currentUser.uid;
      firebase.database().ref('USER/'+uid).set({
      name:this.state.username,
      email:this.state.email,
      password:this.state.password
     });
      this.props.history.push('/SignIn');
  });
    }
    _inputHandler(e){
        let userInput = {};
         userInput[e.target.name] = e.target.value;
         this.setState(userInput);        
    }
    render(){
        return(
            <div>
                <MuiThemeProvider>
                                              
                      <div>  
                          <SignUpToolbar />
                        <Paper style={style} zDepth={3}>
                                <h2>Sign up </h2>
                                <TextField
                                        hintText = "User Name" 
                                        onChange={this._inputHandler.bind(this)}
                                        value = {this.state.username}
                                        name="username" />
                                <br/>
                                <br/>
                                <TextField className="email" hintText="Email" 
                                    type="email" 
                                    onChange={this._inputHandler.bind(this)}
                                    value = {this.state.email}
                                    name="email"/>
                                <br/>
                                <br/>
                                <TextField className="password" name="password" 
                                hintText="Password" 
                                type="password" 
                                value = {this.state.password}
                                onChange={this._inputHandler.bind(this)}
                                name="password" />
                                <br/>
                                <RaisedButton onClick={this.justSubmit.bind(this)} label="Sign up" type="submit" primary={true} style={styling} />
                        </Paper>
                        
                    </div>

                </MuiThemeProvider>
            </div>
        );
    }

}
