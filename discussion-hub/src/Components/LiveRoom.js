import React from 'react';
import {useEffect,useContext} from "react"
import {Link} from "react-router-dom"
import {RoomContext} from "../contexts/room-context"
import "../liveroom.css"
import db from "../firebase"

const LiveRoom = () => {
    const {rooms,dispatch} = useContext(RoomContext);
  
    useEffect(()=>
    {
        db.collection("rooms").onSnapshot(snapshot=>(
            dispatch({type:"rooms",payload:snapshot.docs.map(doc=>({
                id:doc.id,
                name:doc.data().name,
                speaker:doc.data().speaker,
                host:doc.data().host

            }))
        })
        ))

    },[])

  

    return (
        <div>

        <h1 className="heading">Live Rooms</h1>
        <div className="liverooms">
        {
            rooms.map(room=>
            {
                return (
                    <Link className="removeLine" to={`/rooms/${room.id}`}>

                  
                    <div className="liveroom">
                        <h1> {room.name} </h1>
                        <h2>Speakers : {room.speaker}</h2>
                        <h2>Host : {room.host}</h2>
                    </div>
                    </Link>
                )
            })
        }
        
        </div>
        </div>
    );
};



export default LiveRoom;