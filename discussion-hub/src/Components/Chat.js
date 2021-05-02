import React from 'react';
import {useState,useEffect,useContext} from "react"
import {RoomContext} from "../contexts/room-context";
import {AuthContext} from "../contexts/auth-context";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import "../chat.css";
import db from "../firebase"
import {useParams,useNavigate} from "react-router-dom"
import Message from "./Message";
import ChatInput from "../Components/ChatInput"
const Chat = () => {
    const navigate = useNavigate();
    const {roomid} = useParams();
    console.log(roomid)
    const {upcomingrooms,rooms,dispatch} = useContext(RoomContext);
    const {user} =useContext(AuthContext);
    const [roomDetail,setRoom] = useState(null)
    const [roomMessages,setMessage] = useState([])
    useEffect(()=>
    {
        db.collection("rooms").onSnapshot(snapshot=>(
            dispatch({type:"rooms",payload:snapshot.docs.map(doc=>({
                id:doc.id,
                name:doc.data().name

            }))
        })
        ))
        db.collection("upcomingrooms").onSnapshot(snapshot=>(
            dispatch({type:"upcomingrooms",payload:snapshot.docs.map(doc=>({
                id:doc.id,
                name:doc.data().name

            }))
        })
        ))

    },[])
    useEffect(()=>
    {
        if(roomid)
        {
            db.collection("rooms").doc(roomid).onSnapshot(snapshot=>(setRoom(snapshot.data())))
            // db.collection("upcomingrooms").doc(roomid).onSnapshot(snapshot=>(setRoom(snapshot.data())))
        }
        
        db.collection("rooms").doc(roomid).collection("messages").orderBy("timestamp","asc").onSnapshot((snapshot)=>setMessage(snapshot.docs.map(doc=>doc.data())))
    },[roomid])

function clickHandler(id)
{
    navigate(`/rooms/${id}`)
}
function deleteHandler(id)
{
    db.collection("rooms").doc(id).delete().then(()=>console.log("successfully deleted")).catch(error=>console.log("error",error))
    db.collection("upcomingrooms").doc(id).delete().then(()=>console.log("successfully deleted")).catch(error=>console.log("error",error))
}
console.log("messages",roomMessages);
    return (
        <div className="chat">

            <div className="chat__roomnames">
            <div className="chat__user">
                <h1>userName</h1>
                <h2>{user?.displayName}</h2>
            </div>
            <div>
            <h2>Live Rooms</h2>
                {
                    rooms.map(room=> <div className="chat__room"> <h3 key={room.id} onClick={()=>clickHandler(room.id)} className="chat__room-name">{room.name}</h3>
                    <DeleteOutlineIcon onClick={()=>deleteHandler(room.id)}/>
                     </div>)
                }
            </div>
            <div>
                <h2>Upcoming Rooms</h2>
                {
                    upcomingrooms.map(room=> <div className="chat__room"> <h3 key={room.id} onClick={()=>clickHandler(room.id)} className="chat__room-name">{room.name}</h3>
                    <DeleteOutlineIcon onClick={()=>deleteHandler(room.id)}/>
                     </div>)
                }
            </div>
              
             
            </div>

            <div className="chat__section">
                <div className="chat__header">
                    <div className="chat__header-left">
                        {roomDetail?.name}
                    </div>
                    <div className="chat__header-right">
                       details
                    </div>
                </div>
                <div className="chat__message">

               
                {
                    roomMessages.map(({message,timestamp,user,userimage})=> <Message message={message} timeStamp={timestamp} user={user} userImage={userimage} />)
                }
                </div>
                <ChatInput roomName={roomDetail?.name} roomId={roomid} />
            </div>
     
        </div>
    );
};



export default Chat;