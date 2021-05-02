
import './App.css';
import Header from "./Components/Header";
import Home from "./Components/Home"
import {Routes,Route} from "react-router-dom";
import {useContext} from "react"
import Chat from "./Components/Chat"
import {AuthContext} from "./contexts/auth-context"
import Login from "./Components/Login";
import CreateRoom from "./Components/CreateRoom"
import ScheduleRoom from "./Components/ScheduleRoom"

function App() {
const {user} = useContext(AuthContext);

  return  (
    <div className="App">
      {!user? <Login/> : <>
      <Header/>
   
   
      <Routes>
        <Route path="/" element={<Home/>} >
          <Route path="/createRoom" element={<CreateRoom/>} ></Route>
          <Route path="/scheduleRoom" element={<ScheduleRoom/>} ></Route>
        </Route>
        <Route path="/rooms/:roomid" element={<Chat/>} />
      </Routes>
      </> }
    </div>
  );
}

export default App;
