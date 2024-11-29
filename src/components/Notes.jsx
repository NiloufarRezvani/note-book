import { useNotesDispatch } from "../context/NotesContext"

function Notes({note}) {
    const dispatch =useNotesDispatch()
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
    }
  
    return (
        <>
            <div className={`note-item ${ note.completed ? "completed": ""}`}>
            <div className="note-item__header">
                <div>

                <p className="note-title">{note.title}</p>
                <p className="note-description">{note.desc}</p>
                </div>
                </div>
                <div className="actions">
                <button className="trash" onClick={() => dispatch({ type: "deleteItem",payload:note.id})}> ❌ </button>
                    <input type="checkbox" id={note.id} name={note.id} value={note.id} onChange={(e)=>{
                        const noteId=Number(e.target.value)
                        dispatch({type:'toggle',payload:noteId})}}/>
                </div>
                 
            <p className="note-item__footer">
                {new Date(note.createdAt).toLocaleDateString('en-Us', options)}
            </p>
            </div>
            
        </>
    )
}

export default Notes