import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import {AdminAddParkingLocation} from './AdminAddParkingLocation';
import {AdminViewParkingLocation} from './AdminViewParkingLocation';
import {UserSendFeedback} from './UserSendFeedback';
import {MyFeedback} from './MyFeedback';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as firebase from 'firebase';
import './App.css';
import {BrowserRouter,Route,Link} from 'react-router-dom';
// injectTapEventPlugin();

export class UserDashboardToolbar extends Component {
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
                                        <Link to="/adminviewparkinglocation"><FlatButton label="View Parking Locations" primary={true}/></Link>
                                        <br/>
                                        <Link to="/adminviewparkinglocation"><FlatButton label="View My Bookings"  primary={true}/></Link>
                                        <br/>
                                        <Link to="/myfeedback"><FlatButton label="My Feedbacks" primary={true}/></Link>
                                        <br/>
                                        <Link to="/usersendfeedback"><FlatButton label="Send Feedback" primary={true}/></Link>
                                        <br/>
                                        <FlatButton label="Sign out" onClick={this.logout.bind(this)} primary={true}/>
                                    </Drawer>
                                </AppBar>
                                <div className="allview">
                                    <Route path="/adminaddparkinglocation" component={AdminAddParkingLocation}/>
                                    <Route path="/adminviewparkinglocation" component={AdminViewParkingLocation}/>
                                    <Route path="/usersendfeedback" component={UserSendFeedback}/>
                                    <Route path="/myfeedback" component={MyFeedback}/>
                                </div>
                        </div>
                    </MuiThemeProvider>
                </div>
            </BrowserRouter>
        );
    }
} 

//  default Toolbarr;