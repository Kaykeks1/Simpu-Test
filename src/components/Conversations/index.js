import React, { Component } from "react";
import NavConversations from './components/NavConversations'
import ShowConversations from './components/ShowConversations'
import './Conversations.css';

class Conversations extends Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {
          
    //     };
    // }
    render(){
        return(
            <div className="conversations">
                <div className="main-title">Conversations</div>
                <div className="main">
                    <NavConversations />
                    <ShowConversations />
                </div>
            </div>
        )
    }
}

export default Conversations;