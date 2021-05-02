import {createContext,useReducer} from "react";


export const AuthContext = createContext();


 const AuthProvider =({children})=>
{
 const [state, dispatch] = useReducer(reducer, {user:null})
    return (
        <AuthContext.Provider value={{dispatch,user:state.user}}>
            {children}
        </AuthContext.Provider>
    )

}

function reducer(state,action)
{
    switch (action.type) {
        case "set":
            
           return {...state,user:action.payload}
    
        default:
            break;
    }
}
export default AuthProvider