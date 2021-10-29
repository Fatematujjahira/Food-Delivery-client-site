import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/banner/Food-Logo-Design.jpg'
import useAuth from '../../hooks/useAuth';
// import { HashLink } from "react-router-hash-link";
import './Header.css'
const Header = () => {
   
const { AllContexts } = useAuth();
const { user, logOut } = AllContexts;
const { displayName, photoURL, email } = user;
return (

    <div className="">
    <Navbar expand="lg" className="bg-dark">
    <Container>
      <Navbar.Brand as={NavLink}        className="text-white" to="/home">
        <img width="70px" height="60px"
         src={logo} alt="Logo" />{" "} 
        <span className="title"> JESWA</span>
      </Navbar.Brand>
      <Navbar.Toggle        aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto align-items-center">
          <Nav.Link as={NavLink} to="/home" className="nav-item text-warning ">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/service" className="nav-item text-warning ">
           Service
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about" className="nav-item text-warning ">
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/shop" className="nav-item text-warning ">
            My Order
          </Nav.Link>

          <Nav.Link as={NavLink} to="/contact" className="nav-item text-warning">
            Contact
          </Nav.Link>
          <Nav.Link as={NavLink} to="/recommodation" className="nav-item text-warning">
           Recommendation
          </Nav.Link>
         
          

          {!displayName ? (
            <>
            <Nav.Link as={NavLink} to="/signup" className="nav-item text-warning fw-bold">
                Sign Up
            </Nav.Link>

            <Nav.Link className="nav-item text-primary fw-bold" as={NavLink} to="/login">
                Log in
            </Nav.Link>
            </>
          ) : (
            <NavDropdown
              title={
                    <img
                    style={{
                    width: "45px",
                    borderRadius: "50%",
                  }}
                    src={photoURL}
                    alt=""
                />
                }
                >
                <div className="text-center">
                <h6>{displayName}</h6>
                <p className="m-0 mb-1">{email}</p>
                <button onClick={logOut} className="button-logout">
                  Sign Out
                 </button>
                 </div>
        </NavDropdown>
          )}
        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
 </div>
       

    );
};

export default Header;