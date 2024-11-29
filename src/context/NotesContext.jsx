import { createContext, useContext, useReducer } from "react";

const NotesContext = createContext(null)
const NotesDispatchContext=createContext(null)
function notesReducer(state,action) {
    switch(action.type){
      case 'deleteItem':{
        return state.filter((s)=>s.id !==action.payload)
      }
      case 'addNote':{
          return [...state,action.payload]
      }
      case 'toggle':{
        return state.map((item)=>item.id===action.payload?{...item,completed:!item.completed}:item)
      }
      default:
        throw new Error("unknown function")
    }
    
      }

 export function NotesProvider({ children }) {
    const [notes,dispatch] = useReducer(notesReducer,[])
    return <NotesContext.Provider value={notes}>
        <NotesDispatchContext.Provider value={dispatch}>
        {children}
        </NotesDispatchContext.Provider>
    </NotesContext.Provider>
}
export function useNotes(){
    return useContext(NotesContext)
}
export function useNotesDispatch(){
    return useContext(NotesDispatchContext)
}