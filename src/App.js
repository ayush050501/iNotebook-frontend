import "./App.css";
import React,{useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {

  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert = {alert}/>
          <div className="container">
            <Routes>
              <Route exact strict path="/" element={<Home showAlert={showAlert}/>}/>
              <Route exact strict path="/about" element={<About/>}/>
              <Route exact strict path="/login" element={<Login showAlert={showAlert}/>}/>
              <Route exact strict path="/signup" element={<Signup showAlert={showAlert}/>}/>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
