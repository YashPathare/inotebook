import noteContext from "./noteContext";
const NoteState=(props)=>{
    const state={
        "name":"Yash",
        "class":"TE"
    }
    return(
        <noteContext.Provider value={state}>
            {props.children}
        </noteContext.Provider>
    )
}
export default NoteState;