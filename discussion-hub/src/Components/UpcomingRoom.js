import React from 'react';
import "../liveroom.css"
import {useContext,useEffect} from "react";
import {RoomContext} from "../contexts/room-context";
import db from "../firebase";
import {Link} from "react-router-dom";
const UpcomingRoom = () => {
    const {upcomingrooms,dispatch} = useContext(RoomContext);
    useEffect(()=>
    {
        db.collection("upcomingrooms").onSnapshot(snapshot=>(
            dispatch({type:"upcomingrooms",payload:snapshot.docs.map(doc=>({
                id:doc.id,
                name:doc.data().name,
                speaker:doc.data().speaker,
                host:doc.data().host,
                timestamp:doc.data().timestamp

            }))
        })
        ))

    },[])
   

    return (
        <div>

            <h1 className="heading">Upcoming Rooms</h1>
        <div className="liverooms">
        {
            upcomingrooms.map(room=>
            {
                return (
                    <Link className="removeLine" to={`/rooms/${room.id}`}>

                  
                    <div className="liveroom">
                        <h1> {room.name} </h1>
                        <h2>Speakers : {room.speaker}</h2>
                        <h2>Host : {room.host}</h2>
                        <h3>Timestamp:{typeof room.timestamp==="string"?room.timestamp: room.timestamp?.toDate().toString()}</h3>
                       
                    </div>
                    </Link>
                )
            })
        }
        </div>
        </div>
    );
};



export default UpcomingRoom;