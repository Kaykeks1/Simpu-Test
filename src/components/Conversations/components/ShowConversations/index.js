import React, { Component, useState, useRef } from "react";
import time from '../../../../Assets/images/New Icons/32.png';
import trash from '../../../../Assets/images/New Icons/trash.png';
import folder from '../../../../Assets/images/New Icons/folder.png';
import more from '../../../../Assets/images/New Icons/more.png';
import reply from '../../../../Assets/images/New Icons/16.png';
import send from '../../../../Assets/images/New Icons/telegram3.png';
import user from '../../../../Assets/images/avatar/user1.jpg';
import attachment from '../../../../Assets/images/New Icons/attachment@2x.png'
import people from '../../../../Assets/images/avatar/people.PNG';
import person from '../../../../Assets/images/avatar/person.PNG';

import messageList from '../../../../Assets/data/messages'
import commentList from "../../../../Assets/data/comments";
import './ShowConversations.css';

const ShowConversations =() =>{
    const [comments, addComments]=  useState(commentList);
    const [messages, addChatMsg]=  useState(messageList);
    const comment = useRef()
    const chatMsg = useRef()
    console.log(comments)
    console.log(messages)
    // constructor(props) {
    //     super(props);
    //     this.state = {
          
    //     };
    // }
    // render(){
        return(
            <div className="show-conversations">
                <div className="top-actions">
                    <div className="actions">
                        <img src={time} alt="" />
                        <img src={trash} alt="" />
                        <img src={folder} alt="" />
                        <img src={more} alt="" />
                    </div>
                    <div className="assign-part">
                        <div className="assign-people">
                            <img src={people} alt="" />
                        </div>
                        <div className="assign-text">Assign</div>
                        <div className="assign-person">
                            <img src={person} alt="" />
                        </div>
                    </div>
                </div>
                <div className="main-conversations">
                    <div className="conv-section">
                        <div className="conv-info">WhatsApp for Business: Don't forget to start your free trial</div>
                        <div className="chat-space-box">
                            <div className="chat-space">
                            {
                                messages.map(item=>
                                (<div className="chat-msg">
                                    <div className="chat-head">
                                        <div className="chat-author">
                                            {item.author}
                                        </div>
                                        {item.isUser ||
                                            <div className="reply-chat">
                                                <img src={reply} alt="" /> Reply this conversations
                                            </div>
                                        }
                                    </div>
                                    <div className="chat-body" style={item.isUser ? { backgroundColor: '#6554c0', color: '#ffffff'} : null}>
                                        {item.body}
                                    </div>
                                    <div className="chat-foot">
                                        <div className="chat-time">
                                            {item.time}
                                        </div>
                                        {
                                            item.isUser &&
                                            <i class="fa fa-check read-icon" />
                                        }
                                    </div>
                                </div>)
                                )
                            }
                            </div>
                        </div>
                        <div className="add-msg">
                            <textarea 
                                placeholder="Type a message…" 
                                className="msg-input" 
                                ref={chatMsg} onKeyDown={(e)=>{
                                    if(e.key==='Enter') { 
                                        addChatMsg([...messages, {author: 'Collins Iheagwara', body: chatMsg.current.value, time: '02:00PM', isUser: true,}])
                                        chatMsg.current.value=''
                                    }
                                    }}/>
                            <img src={attachment} alt="" className="chat-attach" />
                        </div>
                    </div>
                    <div className="comment-section">
                        <div className="comments-head">Comments</div>
                        <div className="scroll-comments-box">
                            <div className="scroll-comments">
                            {
                                comments.map(item=>(
                                <div className="comment">
                                    <img src={user} alt="" />
                                    <div className="comment-msg">{item}</div>
                                </div>))
                            }
                            </div>
                        </div>
                        <div className="add-comment">
                            <img src={user} alt="" />
                            <input type="text" ref={comment} className="comment-input" placeholder="Write your comment…." />
                            <button
                                onClick={()=> {
                                    addComments([...comments, comment.current.value])
                                    comment.current.value=""
                                
                                }}
                                // onClick={()=> console.log(comment.current.value)}

                                className="comment-btn"
                            >
                            <img src={send} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    // }
}

export default ShowConversations;