import noteContext from "./noteContext";
import { useState } from "react";
const NoteState=(props)=>{
    const s1={
        "name":"Yash",
        "class":"TE"
    }
    const [state, setState] = useState(s1);
    const update =() =>{
        setTimeout(()=>{
            setState(
                {
                    "name":"Aashish",
                    "class":"BE"
                }
            )
        },1000);    
    }
    return(
        <noteContext.Provider value={{state,update}}>
            {props.children}
        </noteContext.Provider>
    )
}
export default NoteState;