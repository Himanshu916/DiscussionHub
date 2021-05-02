import {createContext} from "react";
import {useReducer} from "react"
export const RoomContext = createContext();

export default function RoomProvider({children})
{
    const [state, dispatch] = useReducer(reducer, {rooms:[],upcomingrooms:[]})

    return (
        <RoomContext.Provider value={{rooms:state.rooms,upcomingrooms:state.upcomingrooms,dispatch}}>
        {children}
        </RoomContext.Provider>
    )
}

function reducer (state,action)
{
    switch (action.type) {
        case "rooms":
            
            return {...state,rooms:action.payload}
        case "upcomingrooms" :
            return {...state,upcomingrooms:action.payload}
        default:
            return state;
    }

}