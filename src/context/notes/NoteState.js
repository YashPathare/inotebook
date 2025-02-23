import noteContext from "./noteContext";
import { useState } from "react";
const NoteState=(props)=>{
    const notesInitial=[
        {
          "_id": "67adcf782b26a4901b2150deb",
          "user": "67a87954bae747ee7bc6ab3d",
          "title": "My Title",
          "description": "You are doing great.",
          "tag": "personal",
          "date": "2025-02-13T10:54:48.601Z",
          "__v": 0
        },
        {
          "_id": "67avdd01f2b264901b2150dee",
          "user": "67a87954bae747ee7bc6ab3d",
          "title": "New Note",
          "description": "Keep Going",
          "tag": "motivational",
          "date": "2025-02-13T10:57:35.756Z",
          "__v": 0
        },
        {
          "_id": "67add01f2nb264901b2150dee",
          "user": "67a87954bae747ee7bc6ab3d",
          "title": "New Note",
          "description": "Keep Going",
          "tag": "motivational",
          "date": "2025-02-13T10:57:35.756Z",
          "__v": 0
        },
        {
          "_id": "67add0e1f2b264901b2150dee",
          "user": "67a87954bae747ee7bc6ab3d",
          "title": "New Note",
          "description": "Keep Going",
          "tag": "motivational",
          "date": "2025-02-13T10:57:35.756Z",
          "__v": 0
        },
        {
          "_id": "67add01f2b26490,1b2150dee",
          "user": "67a87954bae747ee7bc6ab3d",
          "title": "New Note",
          "description": "Keep Going",
          "tag": "motivational",
          "date": "2025-02-13T10:57:35.756Z",
          "__v": 0
        },
        {
          "_id": "67add01f2bb264901b2150dee",
          "user": "67a87954bae747ee7bc6ab3d",
          "title": "New Note",
          "description": "Keep Going",
          "tag": "motivational",
          "date": "2025-02-13T10:57:35.756Z",
          "__v": 0
        },
        {
          "_id": "67add01f2b264901b2150dyee",
          "user": "67a87954bae747ee7bc6ab3d",
          "title": "New Note",
          "description": "Keep Going",
          "tag": "motivational",
          "date": "2025-02-13T10:57:35.756Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial)

      //Add a Note
      const addNote=(title,description,tag)=>{
        //TODO: API Call
        const note = {
          "_id": "67add01f2b264901b2150dyee",
          "user": "67a87954bae747ee7bc6ab3d",
          "title": "New Note Added",
          "description": "Keep Going Added",
          "tag": "motivational",
          "date": "2025-02-13T10:57:35.756Z",
          "__v": 0
        };
        setNotes(notes.push(note))
      }

      //Delete a Note
      const deleteNote=()=>{
        
      }

      //Edit a Note
      const editNote=()=>{
        
      }

    return(
        <noteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </noteContext.Provider>
    )
}
export default NoteState;