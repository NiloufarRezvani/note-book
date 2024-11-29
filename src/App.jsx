import "./App.css";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";
import { useState } from "react";
import NoteStatus from "./components/NoteStatus";
import NotesHeader from "./components/NotesHeader";
import { NotesProvider } from "./context/NotesContext";
function App() {
  // const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("")
  
  
  // const handleDeleteItem = (noteId) => {
  //   dispatch({ type: "deleteItem",payload:noteId })
  // }
  // const handleAddNote = (newNote) => {
    
  //   dispatch({ type: "addNote",payload:newNote })
  // }
  // const handleToggleItem = (e) => {
  //   const noteId = Number(e.target.value);
  //   dispatch({type:"toggle",payload:noteId})

  // }

  return (
    <>
      <NotesProvider>
      <div className="container"></div>
      <NotesHeader  
      sortBy={sortBy} onSortBy={(e) => setSortBy(e.target.value)} />
      <div className="note-app">
        <AddNote  />
        <div className="note-container">
          <NoteStatus  />
          <NoteList 
            sortBy={sortBy}
            />
        </div>
      </div>
      </NotesProvider>
    </>
  )
}

export default App;
