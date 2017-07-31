import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import {Link} from 'react-router-dom';

export class SignInToolbar extends Component {
  constructor(props) {
    super(props);
  }
  

  // handleChange = (event, index, value) => this.setState({value});
 

  render() {
    return (
      <MuiThemeProvider>
      <Toolbar>
        <span id="titl">Online Parking System</span>
        <ToolbarGroup>
          
          <Link to="/signup">
          <RaisedButton label="sign up" primary={true}/> </Link> 
                                   
        </ToolbarGroup>
      
      </Toolbar>
      </MuiThemeProvider>
    );
  }
} 
