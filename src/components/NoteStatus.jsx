import { useNotes } from "../context/NotesContext";



function NoteStatus() {
    const notes=useNotes()
    const allNotes=notes.length;
    const completedNote=notes.filter((n)=>n.completed).length;
    const openNote=notes.filter((n)=>!n.completed).length;
    if(!allNotes)return <h2>no notes yet...</h2>
  return (
    <ul className="note-status">
        <li>All<span>{allNotes}</span></li>
        <li>Completed<span>{completedNote}</span></li>
        <li>Open<span>{openNote}</span></li>
    </ul>
  )
}

export default NoteStatus