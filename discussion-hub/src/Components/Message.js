import React from 'react';
import "../messages.css"

const Message = ({message,timestamp,user,userImage}) => {
    return (
        <div className="message">
           

            
            <img src={userImage} alt=""/>
            <div className="message__information">
                <h4>{user}  </h4>
                <p> {message} </p>
            </div>
          
        </div>
    );
};



export default Message;