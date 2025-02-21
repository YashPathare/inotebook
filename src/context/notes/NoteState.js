import noteContext from "./noteContext";
import { useState } from "react";
const NoteState=(props)=>{
    const notesInitial=[
        {
          "_id": "67adcf782b264901b2150deb",
          "user": "67a87954bae747ee7bc6ab3d",
          "title": "My Title",
          "description": "You are doing great.",
          "tag": "personal",
          "date": "2025-02-13T10:54:48.601Z",
          "__v": 0
        },
        {
          "_id": "67add01f2b264901b2150dee",
          "user": "67a87954bae747ee7bc6ab3d",
          "title": "New Note",
          "description": "Keep Going",
          "tag": "motivational",
          "date": "2025-02-13T10:57:35.756Z",
          "__v": 0
        },
        {
          "_id": "67add01f2b264901b2150dee",
          "user": "67a87954bae747ee7bc6ab3d",
          "title": "New Note",
          "description": "Keep Going",
          "tag": "motivational",
          "date": "2025-02-13T10:57:35.756Z",
          "__v": 0
        },
        {
          "_id": "67add01f2b264901b2150dee",
          "user": "67a87954bae747ee7bc6ab3d",
          "title": "New Note",
          "description": "Keep Going",
          "tag": "motivational",
          "date": "2025-02-13T10:57:35.756Z",
          "__v": 0
        },
        {
          "_id": "67add01f2b264901b2150dee",
          "user": "67a87954bae747ee7bc6ab3d",
          "title": "New Note",
          "description": "Keep Going",
          "tag": "motivational",
          "date": "2025-02-13T10:57:35.756Z",
          "__v": 0
        },
        {
          "_id": "67add01f2b264901b2150dee",
          "user": "67a87954bae747ee7bc6ab3d",
          "title": "New Note",
          "description": "Keep Going",
          "tag": "motivational",
          "date": "2025-02-13T10:57:35.756Z",
          "__v": 0
        },
        {
          "_id": "67add01f2b264901b2150dee",
          "user": "67a87954bae747ee7bc6ab3d",
          "title": "New Note",
          "description": "Keep Going",
          "tag": "motivational",
          "date": "2025-02-13T10:57:35.756Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial)
    return(
        <noteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}
export default NoteState;