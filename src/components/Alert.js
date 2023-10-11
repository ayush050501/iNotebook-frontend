import React from 'react'

export default function Alert(props) {
    const capitalise =(word)=>{
        if(word==="danger"){
            word="Error";
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
        <div style={{height : '40px',width:"20rem",position:"fixed",left:"20px",top:"70px"}}>
            {
                props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalise(props.alert.type)}</strong> :{props.alert.msg}
            </div>
            }
        </div>
        
   
  )
}
