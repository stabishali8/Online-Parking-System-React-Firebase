import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as firebase from 'firebase';
import {Link} from 'react-router-dom';
import './App.css'

const style = {
  height: 320,
  width: 400,
  margin: 90,
  textAlign: 'center',
  display: 'inline-block',
};

const styling = {
  margin: 12,
};

const styles = {
    margin:15,
    radioButton: {
    marginTop: 4,
  },
};

export class AdminAddParkingLocation extends Component{
    constructor()
    {
        super();
        this.state = {
            area:'',
            slot:''
        }
    }
    componentDidMount()
    {
        
    }
    justSubmit()
    {
        // var sloting=[];
        // for(var i=0;i<this.state.slot;i++)
        // {
        //     sloting.push({
        //         slotsNo: 'SlotNo' +(i+1)
        //     })
        // }
        // this.setState({
        //     slots: sloting
        // })
        firebase.database().ref('Location').push({
            area:this.state.area,
            slots:this.state.slot

        }).catch(function(error){
            console.log("Error" + error.message);
        }).then(()=>{
                        console.log(this.state.slots);
            alert("Slots Located");
        })
    }
    _inputHandler(e)
    {
        let userInput = {};
        this.setState(userInput); 
        userInput[e.target.name] = e.target.value;
    }

    render()
    {
        return(
            <div>
                <MuiThemeProvider>
                    <div>
                        <Paper style={style} zDepth={3}>
                            <br/>
                            <h2>Add New Location </h2>
                            <TextField hintText="Area"
                            onChange={this._inputHandler.bind(this)}
                            errorText="Required"
                            value = {this.state.area}
                            name="area" />
                            <br/>
                            <TextField hintText="Slots" 
                            onChange={this._inputHandler.bind(this)}
                            value = {this.state.slot}
                            errorText="Required"
                            type='number'
                            min='1'                                
                            name="slot"/>
                            <br/>

                            <RaisedButton label="Add"
                            onClick={this.justSubmit.bind(this)}
                            primary={true} style={styling} />
  
                            <br/>

                        </Paper>
                    </div> 
                    </MuiThemeProvider>                
            </div>
        )
    }
}