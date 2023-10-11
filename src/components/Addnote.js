import React,{useContext,useState} from 'react'
import noteContext from "../context/notes/noteContext";

const Addnote = (props) => {
    
    const context = useContext(noteContext);
    const {addnote} = context;

    const [note, setNote] = useState({title:"",description:"",tag:""})

    const handleClick=(e)=>{
      e.preventDefault();
      addnote(note.title,note.description,note.tag);
      setNote({title:"",description:"",tag:""});
      props.showAlert("Added Successfully","success");
    }
    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }

    return (
    <div className="sticky-xl-top">
      <div className="card" style={{padding:"18px",margin:"40px 20px 0px 0px",position:"relative",top:"60px"}}>
      <h3>Add a Note</h3>
      <form>
          <div className="mb-3 my-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name="title" value={note.title} aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea type="text" className="form-control" id="description" style={{height:"100px"}} name="description" value={note.description} onChange={onChange} minLength={5} required/>
          </div>
          <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
      </form>
    </div> 
    </div>
  )
}

export default Addnote
