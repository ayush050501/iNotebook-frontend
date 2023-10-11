import React,{useContext} from 'react'
import noteContext from "../context/notes/noteContext";
const Noteitem = (props) => {
    const {note,updateNote} = props;

    const context = useContext(noteContext);
    const {deletenote} = context;

  return (
    <div className="col-md-6 ">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i className="fa-solid fa-trash " onClick={()=>{deletenote(note._id);
          props.showAlert("Deleted Successfully","success");}}></i>
          <i className="fa-solid fa-pen-to-square mx-3" onClick={()=>{updateNote(note)}}></i>
        </div>
      </div>
    </div>
  )
}

export default Noteitem
