import React,{useState} from 'react'
import {useNavigate,Link} from 'react-router-dom';


const Login = (props) => {

  const host = "http://172.31.8.81:5000"

    const [cred, setcred] = useState({email:"",password:""});
    let navigate = useNavigate();

    const onChange=(e)=>{
        setcred({...cred,[e.target.name]:e.target.value})
    }

    const handelSubmit = async (e) => {
  e.preventDefault();
  try {
    console.log('Attempting to fetch from:', `${host}/api/auth/login`);
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: cred.email, password: cred.password })
    });
    console.log('Response status:', response.status);
    
    const json = await response.json();
    console.log('Response body:', json);

    if (json.success) {
      localStorage.setItem('token', json.authToken);
      navigate("/");
      props.showAlert("Logged in Successfully", "success");
    } else {
      props.showAlert("Invalid Credentials", "danger");
    }
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
      console.error('This might be a CORS or network connectivity issue.');
      console.log('Backend server URL:', host);
      console.log('Is the backend server running?');
      console.log('Check CORS configuration on the backend.');
    }
    props.showAlert("An error occurred. Please try again.", "danger");
  }
};
  return (
    <div className='d-flex align-items-center justify-content-center'>
    <div className="card text-bg-light" style={{width:"22rem",alignItems:"center",padding:"18px", position:"absolute", top: "50%",left: "50%",transform:"translate(-50%,-50%)"}}>
    <h3 className="card-header text-primary mb-3" style={{fontSize:"15px"}}>Login to Continue...</h3>
      <form onSubmit={handelSubmit}>
        <div className="mb-3">
            <label htmlFor="email" className="form-label ">Email address</label>
            <input type="email" className="form-control" style={{width:"20rem"}} value={cred.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-4">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" style={{width:"20rem"}} value={cred.password} onChange={onChange} name="password" id="password"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <p className=' my-2'>If you do not have account please <Link className="text-primary"to="/signup">signup</Link></p>
    </form>
    </div>
    </div>
  )
}

export default Login
