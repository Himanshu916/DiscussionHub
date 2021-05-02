import React from 'react';
import "../creatingroom.css"
import {useState} from "react";
import db from "../firebase";
import {Link} from "react-router-dom"
import {
    DateTimePicker,
    MuiPickersUtilsProvider,
  } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
const ScheduleRoom = () => {
    const [roomEntry,setRoomEntry] = useState({roomname:"",speakername:"",hostname:""});
    const [selectedDate, handleDateChange] = useState(new Date());
    function addRoom({roomname,speakername,hostname},selectedDate){

       
        if(roomname)
        {
             db.collection("upcomingrooms").add({name:roomname,speaker:speakername,host:hostname,timestamp:selectedDate.toString()})
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
                <button onClick={()=>addRoom(roomEntry,selectedDate)} >Add</button>
                <Link to="/">
                <button>Done</button>
                </Link>
            </div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateTimePicker value={selectedDate} onChange={handleDateChange} />
            </MuiPickersUtilsProvider>
          
        </div>
    );
};



export default ScheduleRoom;