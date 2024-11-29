import { useState } from "react"
import { useNotesDispatch } from "../context/NotesContext";

function AddNote() {
    const dispatch=useNotesDispatch()
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title || !desc) return null;
        const newNote = {
            title,
            desc,
            id: Date.now(),
            completed: false,
            createdAt: new Date().toISOString(),
        };
        dispatch({type:"addNote",payload:newNote})
        setDesc("")
        setTitle("")
    }
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleDesc = (e) => {
        setDesc(e.target.value)
    }
    return (
        <div className="add-new-note">
            <h2>Add New Note</h2>
            <form className="note-form">
                <input type="text" className="text-field" placeholder="Note Title..." value={title} onChange={handleTitle} />
                <input type="text"className="text-field"placeholder="Note description..."value={desc}onChange={handleDesc} />
                <button type="submit"className="btn btn--primary"onClick={handleSubmit}>Add New Note</button>
            </form>
        </div>
    )
}

export default AddNote