import React,{useState} from 'react'
import {useNavigate,Link} from 'react-router-dom';

const Signup = (props) => {    
  const host = "http://172.31.8.81:5000"
  
  const [cred, setcred] = useState({name:"",email:"",password:"",cpassword:""});
  let navigate = useNavigate();

  const onChange=(e)=>{
      setcred({...cred,[e.target.name]:e.target.value})
  }

  const handelSubmit = async (e)=>{
      e.preventDefault();
      const response = await fetch(`${host}/api/auth/createuser`,{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({name:cred.name,email:cred.email,password:cred.password})
        });
        const json =  await response.json();
        console.log(json)
        if(json.success){
          //Save the authtoken and redirect
          localStorage.setItem('token',json.authToken);
          navigate("/");
          props.showAlert("Account created Successfully","success")
        }else{
          props.showAlert("Invalid Details","danger")
        }
  }
  return (
  <>
    <div className="card text-bg-light" style={{width:"22rem",alignItems:"center",padding:"18px", position:"absolute", top: "50%",left: "50%",transform:"translate(-50%,-50%)"}}>
    <h3 className="card-header text-primary mb-3" style={{fontSize:"15px"}}>Signup to use iNotebook</h3>
    <form onSubmit={handelSubmit}>
    <div className="mb-3">
          <label htmlFor="name" className="form-label ">Name</label>
          <input type="text" className="form-control" style={{width:"20rem"}} value={cred.nmae} onChange={onChange} id="name" name="name" aria-describedby="emailHelp"/>
      </div>
      <div className="mb-3">
          <label htmlFor="email" className="form-label  ">Email address</label>
          <input type="email" className="form-control" style={{width:"20rem"}} value={cred.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp"/>
      </div>
      <div className="mb-3">
          <label htmlFor="password" className="form-label  ">Password</label>
          <input type="password" className="form-control" style={{width:"20rem"}} value={cred.password} onChange={onChange} name="password" id="password" minLength={5} required/>
      </div>
      <div className="mb-3">
          <label htmlFor="cpassword" className="form-label  ">Confirm Password</label>
          <input type="password" className="form-control" style={{width:"20rem"}} value={cred.cpassword} onChange={onChange} name="cpassword" id="cpassword" minLength={5} required/>
      </div>
      {(cred.password!==cred.cpassword)&&<p style={{color:"red",fontSize:"10px"}}>Confirm password does not match</p>}
      <button type="submit" className="btn btn-primary">Submit</button>
      <p className=' my-2'>Already have an account <Link className="text-primary"to="/login">login</Link></p>
  </form>
  </div>
  </>
  )
  }


export default Signup
