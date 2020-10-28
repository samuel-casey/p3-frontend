import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LogOutBtn from "../LogOutBtn/LogOutBtn";
import { GlobalContext } from "../../App";
import "../Nav/Nav.scss";
import Nav from "react-bootstrap/Nav";
// import Navbar from 'react-bootstrap/Navbar'
import { initial } from "lodash";
import { Container, Navbar, NavDropdown } from "react-bootstrap";

export default function TestNav() {
  const { gState, setGState } = useContext(GlobalContext);
  // const LogOutBtn ={LogOutBtn}

  let loggedInNav = (
    <nav>
      <h6>Hello {gState.email}</h6>

      <Link className="Links" to="/">
        <h4>Home</h4>
      </Link>
      <Link className="Links" to="/favquotes">
        <h4>Quotes</h4>
      </Link>
      <Link className="Links" to="/wishlist">
        <h4>Wish List</h4>
      </Link>
      <Link className="Links" to="/completedlist">
        <h4>Completed List</h4>
      </Link>
      <div id="hamburger">☰</div>
      <LogOutBtn />
    </nav>
  );

  let loggedOutNav = (
    // <>
    // <Nav></Nav>
    // <Navbar>hi test</Navbar>
	
	
    <Navbar collapseOnSelect expand="md" bg="" variant="white">
      <Navbar.Brand href="#home">☰</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
		<h3 >Hello!</h3> <Link id='/.' to='/signup'>Sign Up Here!</Link>

          <Nav.Link className="Links" href="/">Home</Nav.Link>
		  {/* <Nav.Link className="Links" href="/signup">Sign up</Nav.Link> */}
		  <Nav.Link className="Links" href="../about">About</Nav.Link>
          <Nav.Link className="Links" href="/favquotes">Favorite Quotes</Nav.Link>
		  <Nav.Link className="Links" href="/wishlist">Wish List</Nav.Link>
		  <Nav.Link className="Links" href="/completedlist">Completed List</Nav.Link>
		  <Nav.Link className="Links" href="/likeditems">Liked items</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item>
              <Link className="Links" to="/">
                Home
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              {" "}
              <Link className="Links" to="/favquotes">
                Quotes
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              {" "}
              <Link className="Links" to="/wishlist">
                Wish List
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              {" "}
              <Link className="Links" to="/completedlist">
                Completed List
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              {" "}
              <Link className="Links" to="/likeditems">
                Likes
              </Link>
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
	
	
  );

  return gState.token ? loggedInNav : loggedOutNav;
}
