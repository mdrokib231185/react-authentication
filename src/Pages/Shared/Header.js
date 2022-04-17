import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo 3.png'
import './Header.css'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';


const Header = () => {
  const [user] = useAuthState(auth)
  
  const handelSignOut = () => {

   }
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/home">
            {/* <img style={{ height: 60, width: 200 }} src={logo} alt="" /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home" className="navbar">
                Home
              </Nav.Link>
              <Nav.Link href="home#services">Services</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blogs
              </Nav.Link>
              {user ?
                <button onClick={handelSignOut} className='btn btn-primary'>Sign Out</button>
                :<Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;