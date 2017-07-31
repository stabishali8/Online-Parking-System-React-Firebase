import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase'; 
import {SignIn} from './SignIn';

class App extends Component {
  constructor(){
    super();
  }
  componentDidMount(){
  }
  render() {
    return (
      <div className="App">
        <SignIn {...this.props}/>
      </div>
    );
  }
}

export default App;
