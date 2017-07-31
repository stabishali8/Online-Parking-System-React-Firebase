import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as firebase from 'firebase';
import {Link} from 'react-router-dom';
import {SignInToolbar} from './SignInToolbar';
import './App.css'

const style = {
  height: 320,
  width: 400,
  margin: 90,
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

export class SignIn extends Component{
        constructor(){
            super();
                this.state = {
                    username: '',
                    password: '',
                }
        }

        justSubmit(e){
            firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password).catch(function(error) {
      // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log( errorCode + errorMessage);
            
            }).then(()=>{
            let emailCheck=null;
            var userId = firebase.auth().currentUser.uid;
            const rootRef= firebase.database().ref().child('USER/'+ userId);
            rootRef.on('value', snap => {
            var userObj = snap.val();    
            emailCheck = userObj.email;    
            debugger;
            if(emailCheck === 'admin@gmail.com'){
                //this.props.history.push('/student');
                this.props.history.push('/AdminDashboard');
            }
            else{
                this.props.history.push('/UserDashboard');
            }
        });
                
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
                            <SignInToolbar/>
                            <Paper style={style} zDepth={3}>
                                <br/>
                                <h2>Sign in </h2>
                                <TextField hintText="User Name"
                                onChange={this._inputHandler.bind(this)}
                                value = {this.state.username}
                                name="username" />
                                <br/>
                                <TextField hintText="Password" 
                                onChange={this._inputHandler.bind(this)}
                                value = {this.state.password}                                
                                name="password"
                                type="password"/>
                                <br/>

                                <RaisedButton label="Sign in" onClick={this.justSubmit.bind(this)} primary={true} style={styling} />
                                <Link to="signup">
                                <RaisedButton label="Sign up"  primary={true} style={styles} />
                                </Link>

                                <br/>

                            </Paper>
                        </div> 
                       </MuiThemeProvider>
            
                </div>
            );
        }
}


