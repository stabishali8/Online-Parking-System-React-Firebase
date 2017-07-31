import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import {Link} from 'react-router-dom';

export class Toolbarr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }
  

  // handleChange = (event, index, value) => this.setState({value});
 

  render() {
    return (
      <MuiThemeProvider>
      <Toolbar>
        <span id="titl">Online Parking System</span>
        <ToolbarGroup>
          
          <Link to="/">
          <RaisedButton label="sign in" primary={true}/> </Link> 
          &nbsp;  
          
          <Link to="singup">
          <RaisedButton label="sing up" primary={true}/> </Link> 
      
                             
        </ToolbarGroup>
      
      </Toolbar>
      </MuiThemeProvider>
    );
  }
} 

//  default Toolbarr;