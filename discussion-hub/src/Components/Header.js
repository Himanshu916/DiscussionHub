import React from 'react';
import "../header.css";
import {Avatar} from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {useContext} from "react"
import {Link} from "react-router-dom"
import {AuthContext} from "../contexts/auth-context";
import "../liveroom.css"
const Header = () => {
     const {user} =useContext(AuthContext);
   
    return (
        <div className="header">
           <div className="headbar__left">
               <Link to="/">

              
               <Avatar
                    className="headbar__avatar"
                    alt={user?.displayName}
                    src={user?.photoURL}
               />
                </Link>
                 <Link  className="removeLine" to={`/scheduleRoom`}> <AccessTimeIcon style={{fontSize:"3rem"}} />  </Link>
                
           </div>
           <div  className="header__addRoom"> <h2>Add Room</h2> <Link className="removeLine" to={`/createRoom`}> <AddCircleOutlineIcon  /> </Link> </div>
           <div className="headbar__search">
            
                <SearchIcon style={{fontSize:"2rem"}}/>
                <input placeholder="search here" type="text"/>
           </div>
           <div className="headbar__right">
                <HelpIcon style={{fontSize:"2rem"}}/>
           </div>
        </div>
    );
};



export default Header;

