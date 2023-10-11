import React , {useContext,useEffect,useRef,useState} from 'react';
import noteContext from "../context/notes/noteContext";
import Noteitem from './Noteitem';
import Addnote from './Addnote';
import { useNavigate } from 'react-router-dom';

const Notes = (props) => {
  let navigate= useNavigate();
    const context = useContext(noteContext);
    const {notes,getnotes,editnote} = context;
    useEffect(() => {
     if(localStorage.getItem('token')){
       getnotes();
     }else{
      navigate("/login")
     }
      // eslint-disable-next-line
    }, [])
    
    
    const ref = useRef(null);
    const refclose = useRef(null);

    const [note, setNote] = useState({id:"",etitle:"",edescription:"",etag:""});

    const updateNote=(currentnote)=>{
      ref.current.click();
      setNote({id:currentnote._id,etitle:currentnote.title,edescription:currentnote.description,etag:currentnote.tag})
    }

    const handleClick=(e)=>{
      console.log("updating the note")
      editnote(note.id,note.etitle,note.edescription,note.etag)
      refclose.current.click();
      props.showAlert("Updated Successfully","success");
    }

    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }

    return (
    <div className='row'>
      <div className='col-xl'>
      <Addnote showAlert={props.showAlert}/>
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3 my-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" value={note.etitle} name="etitle" aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="text" className="form-control" id="edescription" value={note.edescription} name="edescription" onChange={onChange} minLength={5} required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" value ={note.etag} name="etag" onChange={onChange}/>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refclose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button  disabled={note.etitle.length<5 || note.edescription.length<5} type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className='col-xl'>
      <div className="row my-5" style={{position:"relative",top:"20px"}}>
        <h2 style={{color:"white"}}><i>Notes</i></h2>
        <div className="container mx-2">
          <p style={{fontSize:"30px",color:"burlywood"}}>{notes.length ===0 && 'No notes to display'}</p>
        </div>
        {notes.map((note)=>{
          return <Noteitem key = {note._id} updateNote = {updateNote} note = {note} showAlert={props.showAlert}/> 
        })}
      </div>
      </div>
    </div>
  )
}

export default Notes
