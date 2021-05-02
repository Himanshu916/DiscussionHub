import React from 'react';
import "../creatingroom.css"
import db from "../firebase";
import {useState} from "react"
import {Link} from "react-router-dom"

const CreateRoom = () => {
    const [roomEntry,setRoomEntry] = useState({roomname:"",speakername:"",hostname:""})
    function addRoom({roomname,speakername,hostname}){

        if(roomname)
        {
             db.collection("rooms").add({name:roomname,speaker:speakername,host:hostname})
        }

   }
    return (
        <div className="creating__room">
            <form action="">
                <div className="room__entry">
                    <label htmlFor="roomName">Enter Room Name</label>
                    <input value={roomEntry.roomname} onChange={(e)=>setRoomEntry({...roomEntry,roomname:e.target.value})} id="roomName" type="text"/>
                </div>
                <div className="room__entry">
                    <label htmlFor="speakerName">Enter Speaker Name</label>
                    <input value={roomEntry.speakername} onChange={(e)=>setRoomEntry({...roomEntry,speakername:e.target.value})} id="speakerName" type="text"/>
                </div>
                <div className="room__entry">
                    <label htmlFor="hostName">Enter Host Name</label>
                    <input value={roomEntry.hostname} onChange={(e)=>setRoomEntry({...roomEntry,hostname:e.target.value})} id="hostName" type="text"/>
                </div>
            </form>
            <div className="creatingRoom__buttons">
                <button onClick={()=>addRoom(roomEntry)} >Add</button>
                <Link to="/">
                <button>Done</button>
                </Link>
            </div>
          
        </div>
    );
};



export default CreateRoom;