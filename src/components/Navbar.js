import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    let location = useLocation();
    const navigate = useNavigate();
    const handleClicked=()=>{
        localStorage.removeItem('token');
        navigate("/login")
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/Inotebook">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>

                    </ul>
                    {localStorage.getItem('token')?<div> <button type="button" className="btn btn-primary" onClick={handleClicked}>Logout</button>
                    <span class="material-symbols-outlined">
                    account_circle
                    </span></div>:<form className="d-flex">
                        <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                        <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                    </form>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
