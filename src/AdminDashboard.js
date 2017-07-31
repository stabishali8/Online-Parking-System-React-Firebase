import React , {Component} from 'react';
import {DashboardToolbar} from './DashboardToolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AdminViewParkingLocation} from './AdminViewParkingLocation';
import {AdminAddParkingLocation} from './AdminAddParkingLocation';
export class AdminDashboard extends Component{   
    constructor(){
        super();
    }
    render()
    {
        return(
            <div>
                <MuiThemeProvider>
                    <DashboardToolbar {...this.props}/>
                </MuiThemeProvider>
                {/*<AdminAddParkingLocation/>*/}
            </div>
        )
    }

}