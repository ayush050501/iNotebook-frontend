import React ,{useState} from "react";
import noteContext from "./noteContext";

const NoteState =(props)=>{
  const host = "http://localhost:5000";
    const notesInitial = [];
    const [notes, setnotes] = useState(notesInitial);

    //GET notes
    const getnotes = async ()=>{
      // API call
      const response = await fetch(`${host}/api/notes/fetchallnotes`,{
        method:"GET",
        headers:{
          "auth-token": localStorage.getItem('token'),
          "Content-Type":"application/json"
        }
      });
      const json =  await response.json();
      console.log(json);
      setnotes(json);
    }


    // ADD a Note
      const addnote= async (title,description,tag)=>{
        // API call
        const response = await fetch(`${host}/api/notes/addnote`,{
          method:"POST",
          headers:{
            "auth-token": localStorage.getItem('token'),
            "Content-Type":" application/json"
          },
          body:JSON.stringify({title,description,tag})
        });
        const json = await response.json();
        console.log(json);

        // Logic to add in client
        const note = json;
        setnotes(notes.concat(note));

      }
    // Delete a Note
    
    const deletenote= async (id)=>{
      // from server
      const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
        method:"DELETE",
        headers:{
          "auth-token": localStorage.getItem('token'),
          "Content-Type":" application/json"
        }
      });
      const json= await response.json();
      console.log(json);
      // logic to delete in client
        console.log("deleting a note with id ="+id);
        const newnote = notes.filter((note)=>{
          return note._id!==id
        })
        setnotes(newnote);
      }
    // Edit a Note
    const editnote= async (id,title,description,tag)=>{
      // API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
          method:"PUT",
          headers:{
            "auth-token": localStorage.getItem('token'),
            "Content-Type":" application/json"
          },
          body:JSON.stringify({title,description,tag})
        });
        const json= await response.json();
        console.log(json);
        
        let newnotes=JSON.parse(JSON.stringify(notes))
      // for client deletion
        for (let index = 0; index < newnotes.length; index++) {
          const element = newnotes[index];
          if(element._id===id){
            newnotes[index].title=title;
            newnotes[index].description=description;
            newnotes[index].tag=tag;
            break;
          }
          
        }
        setnotes(newnotes);
    }


    return (
        <noteContext.Provider value={{notes,addnote,deletenote,editnote,getnotes}}>
            {props.children}            
        </noteContext.Provider>
    )

}
    
export default NoteState;