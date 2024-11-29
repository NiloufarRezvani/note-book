import { useNotes } from "../context/NotesContext"


function NotesHeader({sortBy,onSortBy}) {
    const notes=useNotes()
  return (
    <div className="note-header">
        <h1>My Notes({notes.length})</h1>
        <select value={sortBy} onChange={onSortBy}>
            <option value="latest">sort based on latest notes</option>
            <option value="earliest">sort based on earliest notes</option>
            <option value="completed">sort based on completed notes</option>
        </select>
        </div>
  )
}

export default NotesHeader