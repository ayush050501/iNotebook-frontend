import React from "react";
import {Link,useLocation} from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  const handlelogout=()=>{
    localStorage.removeItem('token');
  }
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">iNotebook</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">About</Link>
            </li>
          </ul>
          {!localStorage.getItem('token')?<div>
          <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
          <Link className="btn btn-primary" to="/signup" role="button">Signup</Link>
          </div>:<Link onClick={handlelogout} className="btn btn-primary mx-1" to="/login" role="button">Logout</Link>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
