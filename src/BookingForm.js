import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import DatePicker from 'material-ui/DatePicker';
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

export class BookingForm extends Component{
    constructor(props)
    {
        super(props);
        const minDate = new Date();
        minDate.setFullYear(minDate.getFullYear());
        minDate.setHours(0,0,0,0);
        this.state = {
            date:minDate,
            starttime:'',
            endtime:''
        }
    }

    _inputHandler(e)
    {
        let userInput = {};
        userInput[e.target.name] = e.target.value;
        this.setState(userInput); 
    }

      handleChange = (event, date) => {
            this.setState({
            date: date,
        });
        console.log(date+" dad");
    };
    render()
    {
        return(
            <div>
               <MuiThemeProvider>
                    <Paper style={style} zDepth={2} rounded={false}>
                        <DatePicker 
                         floatingLabelText="Date"
                         mode="landscape" 
                         value={this.state.date}
                         name="date"
                         onChange={this.handleChange.bind(this)}
                         />
                        {/*<h1>{this.state.date}</h1>*/}
                    </Paper>    
               </MuiThemeProvider> 
            </div>
        )
    }
}