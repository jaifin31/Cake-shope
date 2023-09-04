import React from 'react'
import { Navbar, Nav, Container, Image, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { logoutUser } from '../actions/userAction'
// import './NavBar.css'
const NavBar = () => {
  const dispatch = useDispatch()
  const cartState = useSelector((state) => state.cartReducer)
  const userState = useSelector((state) => state.loginUserReducer)
  const { currentUser } = userState

  return (
    <>
    
     <Navbar.Brand>
            <Image
              src="images/logo3.png"
              alt="logo"
              style={{ height: '70px' ,padding:"5px", marginLeft:'10px' }}
            />
          </Navbar.Brand>
      <Navbar collapseOnSelect expand="lg" bg="#ef5454;" variant="light"  style={{ backgroundColor: '#fff'}}>
        <Container style={{marginLeft:'190px'}}>
         
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/" activeClassName="">
                <Nav.Link > <img
                    src="images/hlogo.png"
                    alt="Logo"
                    style={{ height: '15px' }}
                  />Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about" activeClassName="">
                <Nav.Link> <img
                    src="images/alogo.png"
                    alt="Logo"
                    style={{ height: '20px' }}
                  />About Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact" activeClassName="">
                <Nav.Link>Contact Us</Nav.Link>
              </LinkContainer>
             
              {currentUser ? (
                <LinkContainer to="/">
                  <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                    <LinkContainer to="/orders">
                      <NavDropdown.Item> <img
                    src="images/ologo.png"
                    alt="Logo"
                    style={{ height: '22px' }}
                  />Orders</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item
                      onClick={() => {
                        dispatch(logoutUser())
                      }}
                    > <img
                    src="images/ulogo.png"
                    alt="Logo"
                    style={{ height: '22px' }}
                  />
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </LinkContainer>
              ) : (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link> <img
                    src="images/clogo.png"
                    alt="Logo"
                    style={{ height: '22px' }}
                  />Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link>Register</Nav.Link>
                  </LinkContainer>
                </>
              )}
              <LinkContainer to="/cart">
                <Nav.Link>
                  <img
                    src="images/clogo.png"
                    alt="Logo"
                    style={{ height: '22px' }}
                  />Cart{' '}
                  {cartState.cartItems.length}
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
