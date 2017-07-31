import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import {Link} from 'react-router-dom';

export class SignUpToolbar extends Component {
  constructor(props) {
    super(props);
  } 

  render() {
    return (
      <MuiThemeProvider>
      <Toolbar>
        <span id="titl">Online Parking System</span>
        <ToolbarGroup>
          
          <Link to="signin">
          <RaisedButton label="sign in" primary={true}/> </Link> 
          &nbsp;  
                             
        </ToolbarGroup>
      
      </Toolbar>
      </MuiThemeProvider>
    );
  }
} 

//  default Toolbarr;