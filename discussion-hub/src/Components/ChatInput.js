import React, { useContext } from 'react';
import {useState} from "react"
import {AuthContext} from "../contexts/auth-context"
import db from "../firebase";
import firebase from "firebase";
import "../chatinput.css"

const ChatInput = ({roomName,roomId}) => {
const {user} = useContext(AuthContext);
const [input,setInput] = useState("");
function sendMessage(e)
{
    
    e.preventDefault();
    if(roomId)
    {
        db.collection("rooms").doc(roomId).collection("messages").add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            user:user.displayName,
            userimage:user.photoURL
        })
        db.collection("upcomingrooms").doc(roomId).collection("messages").add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            user:user.displayName,
            userimage:user.photoURL
        })
        setInput("")
    }
}
    return (
        <div className="chatInput">
            <form action="">
                <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder={`message ${roomName}`} type="text"/>
                <button onClick={sendMessage} type="submit">send</button>
            </form>
        </div>
    );
};



export default ChatInput;