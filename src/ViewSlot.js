import React,{Component} from 'react';
import queryString from 'query-string';
import * as firebase from 'firebase';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router-dom';


const style = {
  minHeight: 350,
  width: 400,
  margin: 90,
  textAlign: 'center',
  display: 'inline-block',
};

export class ViewSlot extends Component{
    constructor()
    {
        super();
        this.state ={
            area:'',
            slot:'',
            slots:[]            
        }
    }
    componentDidMount()
    {
        var slotNo='';
        var slo=[];
        console.log(window.location.search);
        const parsed = queryString.parse(window.location.search);
        console.log(parsed);
        var rootRef = firebase.database().ref().child('Location/'+parsed.key);
        rootRef.on('value',snap=>{
            console.log(snap.val().area+" aew")
            this.setState(() => ({
                area: snap.val().area,
                slot: snap.val().slot
            }))           
            console.log(JSON.stringify(this.state));
        for(var i=0;i<this.state.slot;i++)
        {
           slo.push({
                slotNo:'Slot ' + (i+1)
            })
        }

        this.setState({
            slots:slo
        })
        // console.log(slo);
        })
        // console.log(this.state.area+" "+this.state.slot);
        // var anorootRef=
        firebase.database().ref().child('Location/'+parsed.key).push({
            slot:this.state.slots
        });
        debugger;
        // anorootRef.set({
        //     slot:this.state.slots
        // })
    }
    render()
    {
            const assign =  this.state.slots.map((item,key)=>(
                <MuiThemeProvider>
                  <RaisedButton primary={true} label={item.slotNo} />
                </MuiThemeProvider>  
              ))
              

        return(
            <div>
                <MuiThemeProvider>                                            
                    <Paper style={style} zDepth={3}>
                        <h2>{this.state.area}</h2>
                        {assign}
                    </Paper>
                </MuiThemeProvider>
        
            </div>
        )
    }
}