import React from 'react';
import LiveRoom from "./LiveRoom"
import UpcomingRoom from "./UpcomingRoom";
import "../header.css"
import {Outlet} from "react-router-dom";
const Home = () => {
    return (
        <div className="shift">
            <LiveRoom/>
            <UpcomingRoom/>
            <Outlet/>
        </div>
    );
};



export default Home;