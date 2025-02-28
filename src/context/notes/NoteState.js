import noteContext from "./noteContext";
import { useState } from "react";
const NoteState=(props)=>{
  const host ="http://localhost:5000"
    const notesInitial=[]
      const [notes, setNotes] = useState(notesInitial)

       //Get all Notes
       const getNotes=async ()=>{
        //API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
               "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdhODc5NTRiYWU3NDdlZTdiYzZhYjNkIn0sImlhdCI6MTczOTE4NTI5M30.bG-zO6kNAl82LDQKvgUZXDUTKik3yz-kD_cK5oRTefM"
            },
        });
        const json =await response.json();
        console.log(json)  
        setNotes(json)
      }

      //Add a Note
      const addNote=async (title,description,tag)=>{
        //TODO: API Call
        //API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
               "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdhODc5NTRiYWU3NDdlZTdiYzZhYjNkIn0sImlhdCI6MTczOTE4NTI5M30.bG-zO6kNAl82LDQKvgUZXDUTKik3yz-kD_cK5oRTefM"
            },
           body: JSON.stringify({title, description, tag}),
        });
      //   const response = await fetch(request);
      const json = await response.json();
      console.log(json)
        console.log("Adding a new note")
        const note = {
          "_id": "67add01f2ba264901b2150dyee",
          "user": "67a87954bae747ee7bc6ab3d",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2025-02-13T10:57:35.756Z",
          "__v": 0
        };
        setNotes(notes.concat(note))
      }

      //Delete a Note
      const deleteNote= async(id)=>{
        //API Call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: "DELETE",
          headers: {
              "Content-Type": "application/json",
               "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdhODc5NTRiYWU3NDdlZTdiYzZhYjNkIn0sImlhdCI6MTczOTE4NTI5M30.bG-zO6kNAl82LDQKvgUZXDUTKik3yz-kD_cK5oRTefM"
            }
        });
      const json =  response.json(); 
      console.log(json)
      
        console.log("Deleting the note with id:"+id);
        const newNotes=notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
      }

      //Edit a Note
      const editNote=async (id, title, description,tag)=>{
        // API CALL
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
               "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdhODc5NTRiYWU3NDdlZTdiYzZhYjNkIn0sImlhdCI6MTczOTE4NTI5M30.bG-zO6kNAl82LDQKvgUZXDUTKik3yz-kD_cK5oRTefM"
            },
          body: JSON.stringify({title,description,tag})
        });
      const json =  response.json(); 
      console.log(json)
        //Logic to edit in client
        for (let index = 0; index < notes.length; index++) {
          const element = notes[index];
          if (element._id === id)
          {
            element.title=title;
            element.description=description;
            element.tag=tag;
          }
        }  
      }

    return(
        <noteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}
export default NoteState;