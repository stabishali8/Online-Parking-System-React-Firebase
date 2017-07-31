import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import {AdminAddParkingLocation} from './AdminAddParkingLocation';
import {AdminViewParkingLocation} from './AdminViewParkingLocation';
import {AdminViewFeedback} from './AdminViewFeedback';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as firebase from 'firebase';
import './App.css';
import {BrowserRouter,Route,Link} from 'react-router-dom';
injectTapEventPlugin();

export class DashboardToolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};

  }
  handleToggle = () => this.setState({open: !this.state.open});

    logout()
    {
        firebase.auth().signOut().catch(function(error){
            console.log("error "+error.message);
        }).then(()=>{
            console.log("success");
            this.props.history.push('/signin')
        });
    }
    render() 
    {
        return (
            <BrowserRouter>
                <div>
                    <MuiThemeProvider>
                        <div>
                            <AppBar
                                title="Realtime Parking System"
                                iconClassNameRight="muidocs-icon-navigation-expand-more"
                                onTouchTap={this.handleToggle}
                                >
                                    <Drawer open={this.state.open}>
                                        <br/>
                                        <br/>
                                        <Link to="/adminaddparkinglocation"><FlatButton label="Add Parking Location" primary={true}/></Link>
                                        <br/>
                                        <Link to="/adminviewparkinglocation"><FlatButton label="View Parking Locations" primary={true}/></Link>
                                        <br/>
                                        <FlatButton label="View All Users" primary={true}/>
                                        <br/>
                                        <FlatButton label="View All Bookings" primary={true}/>
                                        <br/>
                                        <Link to="/adminviewfeedback"><FlatButton label="Users Feedback" primary={true}/></Link>
                                        <br/>
                                        <FlatButton label="Sign out" onClick={this.logout.bind(this)} primary={true}/>
                                    </Drawer>
                                    <FlatButton className="flatbutton" label="Sign out" primary={true}/>
                                </AppBar>
                                <div className="allview">
                                    <Route path="/adminaddparkinglocation" component={AdminAddParkingLocation}/>
                                    <Route path="/adminviewparkinglocation" component={AdminViewParkingLocation}/>
                                    <Route path="/adminviewfeedback" component={AdminViewFeedback}/>
                                </div>
                        </div>
                    </MuiThemeProvider>
                </div>
            </BrowserRouter>
        );
    }
} 

//  default Toolbarr;