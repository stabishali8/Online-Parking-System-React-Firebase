import React,{Component} from 'react';
import * as firebase from 'firebase';
import './App.css'

export class MyFeedback extends Component
{
    constructor(props){
        super(props);
        this.state = {
            myfeed:''
        }
    }

    logout()
    {
        firebase.auth().signOut().catch(function(error){
            console.log("error "+error.message);
        }).then(()=>{
            console.log("success");
            this.props.history.push('/signin')
        });
    }

    componentDidMount()
    {
        var userId = firebase.auth().currentUser.uid;
        var userEmail = firebase.auth().currentUser.email;
        var rootRef = firebase.database().ref().child('UserFeedback/');
        rootRef.orderByChild('email').equalTo(userEmail).on('value',snap=>{
            this.setState({
                myfeed:snap.val()
            })
            debugger;
        })
    }
    render()    
    {
        let my='';
        if(this.state.myfeed!=null)
        {
            my = Object.keys(this.state.myfeed).map((key)=>{
                return(
                    <div className="jobview">
                        <p className="jobviewheading">Title:   {this.state.myfeed[key].title}</p> 
                        <p className="jobviewheading">Description:   {this.state.myfeed[key].description}</p>                        
                    </div>
                )
            })
            debugger;
        }
        return(
            <div>
                {my !== '' ? my : <span>adda</span>}
            </div>
        )
    }
}