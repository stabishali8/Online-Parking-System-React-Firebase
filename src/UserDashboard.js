import React , {Component} from 'react';
import {UserDashboardToolbar} from './UserDashboardToolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class UserDashboard extends Component{   
    constructor(){
        super();
    }
    render()
    {
        return(
            <div>
                <MuiThemeProvider>
                    <UserDashboardToolbar {...this.props}/>
                </MuiThemeProvider>
            </div>
        )
    }

}