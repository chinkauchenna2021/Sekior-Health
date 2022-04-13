import React from 'react';
import '../App.css';
import styled  from 'styled-components';
import { CgMenuRight } from "react-icons/cg";

function Navbar() {
  return (
    <Nav className="navbar navbar-expand-lg" style={{backgroundColor:'#14213d',height:'100px',zIndex:50}}>
    <div className="container " style={{backgroundColor:'#14213d'}}> 
      <a className="navbar-brand" href="#">Sekior</a>
      <button className="navbar-toggler shadow-none " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon">
            <CgMenuRight color="#fff"></CgMenuRight>
        </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav" >
        <ul className="navbar-nav w-100 d-flex justify-content-md-end ">
          <li className="nav-item">
            <a className="nav-link active Oxy-sm mx-md-2" style={{color:'#ffffff'}} aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link Oxy-sm mx-md-2" style={{color:'#ffffff'}} href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link Oxy-sm mx-md-2" style={{color:'#ffffff'}} href="#">Ecosystem</a>
          </li>
          <li className="nav-item">
            <a className="nav-link Oxy-sm mx-md-2" style={{color:'#ffffff'}}>Tokenomics</a>
          </li>
          <li className="nav-item">
            <a className="nav-link Oxy-sm mx-md-2" style={{color:'#ffffff'}} href="#">MVP</a>
          </li>
          <li className="nav-item">
            <a className="nav-link Oxy-sm mx-md-2" style={{color:'#ffffff'}}  href="#">Roadmap</a>
          </li>
          <li className="nav-item">
            <a className="nav-link Oxy-sm mx-md-2" style={{color:'#ffffff'}}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </Nav>
  )
}

const Nav = styled.nav`
position: fixed;

@media (max-width: 768px){
position: relative;
padding-top:20px !important;
padding-bottom:20px !important;

}


`;

export default Navbar