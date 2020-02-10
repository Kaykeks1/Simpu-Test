import React, { Component } from "react";
import './NavConversations.css';
import navConversations from "../../../../Assets/data/navConversations";
import whatsapp from "../../../../Assets/images/New Icons/whats-app-copy.png";
import apple from "../../../../Assets/images/New Icons/apple-copy.png";
import twitter from "../../../../Assets/images/New Icons/social-icon.png";
import attachment from "../../../../Assets/images/New Icons/attachment.png";


const icons = {
    'whatsapp': whatsapp,
    'apple': apple,
    'twitter': twitter
}
class NavConversations extends Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {
          
    //     };
    // }
    render(){
        return(
            <div className="nav-conversations">
                <div className="nav-options">
                    <div>
                        Open
                    </div>
                    <div>
                        Archived
                    </div>
                    <div>
                        Snoozed
                    </div>
                    <div>
                        Trash
                    </div>
                </div>

                <div className="nav-choices">
                    {
                        navConversations.map(item=>(
                        <div className="nav-item">
                            <div>
                                <img src={icons[item.icon]} alt="" />
                            </div>
                            <div className="item-contents">
                                <div>
                                    <div className="item-name">
                                        {item.name}
                                    </div>
                                    <div className="item-title">
                                        {item.title}
                                    </div>
                                    <div className="item-body">
                                        {item.body}
                                    </div>
                                </div>
                                <div>
                                    <div className="item-time">
                                        {item.time}
                                    </div>
                                    {
                                        item.extra &&
                                    <div>
                                        {
                                            item.extra === 'attachment' ?
                                                <img src={attachment} alt="" />
                                            :
                                            <div className="no-2">
                                                2
                                            </div>
                                        }
                                    </div>
                                    }
                                </div>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default NavConversations;