import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router-dom';
import * as firebase from 'firebase';
import './App.css'
const style = {
  height: 340,
  width: 320,
  margin: 50,
  textAlign: 'center',
  display: 'inline-block',
};

export class UserSendFeedback extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:'',
            description:'',
            user:''
        }
    }
    componentDidMount()
    {
        var userId = firebase.auth().currentUser.uid;
        const rootref = firebase.database().ref().child('USER/'+userId);
        rootref.on('value',snap=>{
            this.setState({
                user:snap.val()
            })
        })
    }
    _inputHandler(e)
    {
        let userInput = {};
        userInput[e.target.name] = e.target.value;
        this.setState(userInput); 
    }
    justSubmit()
    {
        var userId = firebase.auth().currentUser.uid;
        firebase.database().ref('UserFeedback/').push({
            ...this.state.user,
            title:this.state.title,
            description:this.state.description
        }).catch(function(error){
            console.log(error.message+" "+error.code);
        }).then(function(){
            console.log("success");
        })
    }
    render()
    {
        return(
            <div>
                <MuiThemeProvider>
                    <div>
                        <Paper style={style} zDepth={2} rounded={false}>
                        <br/>   
                        <h2 className="heading3">Send Feedback</h2>
                        <hr/>
                        <hr/>
                        <br/>
                            <TextField
                            hintText = "Title" 
                            onChange={this._inputHandler.bind(this)}
                            value = {this.state.title}
                            name="title" />
                            <br/>
                            <TextField
                            hintText = "Description" 
                            onChange={this._inputHandler.bind(this)}
                            value = {this.state.description}
                            name="description"
                            multiLine={true}
                            rows={2}
                            rowsMax={2}
                            />
                            <br/><br/>
                            <RaisedButton label="Send" 
                            onClick={this.justSubmit.bind(this)}
                            primary={true}
                            />
                        </Paper>                        
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}
