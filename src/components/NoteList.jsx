import { useNotes } from '../context/NotesContext';
import Notes from './Notes'
function NoteList({sortBy}) {
  const notes=useNotes()
  
  let sortedNotes=notes;
  if(sortBy==="earliest"){
    sortedNotes=[...notes].sort((a,b)=>new Date(a.createdAt) - new Date(b.createdAt))
  }
   if(sortBy==="latest"){
    sortedNotes=[...notes].sort((a,b)=>new Date(b.createdAt) - new Date(a.createdAt))
  }
  if(sortBy==="completed"){
    sortedNotes=[...notes].sort((a,b)=>Number(a.completed)-Number(b.completed))
  }
  return (
    <div className="note-list">
     
        {
          sortedNotes.map((note)=>(<Notes key={note.id}
             note={note}
              />))
        }
        
    </div>
)
}

export default NoteList