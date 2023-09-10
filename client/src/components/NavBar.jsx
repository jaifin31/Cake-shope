import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { logoutUser } from '../actions/userAction'

const NavBar = () => {
  const dispatch = useDispatch()
  const cartState = useSelector((state) => state.cartReducer)
  const userState = useSelector((state) => state.loginUserReducer)
  const { currentUser } = userState

  return (
    <>
    
     {/* <Navbar.Brand>
            <Image
              src="images/logo3.png"
              alt="logo"
              style={{ height: '70px' ,padding:"5px", marginLeft:'10px' }}
            />
          </Navbar.Brand> */}
      <Navbar collapseOnSelect expand="lg" bg="#ef5454;" variant="light"  style={{ backgroundColor: '#e1eff9'}}>
        <Container style={{marginLeft:'100px'}}>
         
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/" activeClassName="">
                <Nav.Link > <img
                    src="images/hlogo.gif"
                    alt="Logo"
                    style={{ height: '20px', marginBottom:'7px' }}
                  />Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/customcake" activeClassName="">
                <Nav.Link > <img
                    src="images/ccclogo.gif"
                    alt="Logo"
                    style={{ height: '20px', marginBottom:'7px' }}
                  />Customs Cakes</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about" activeClassName="">
                <Nav.Link> <img
                    src="images/alogo.gif"
                    alt="Logo"
                    style={{ height: '20px',marginBottom:'7px' }}
                  />About Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact" activeClassName="">
                <Nav.Link><img
                    src="images/cllogo1.gif"
                    alt="Logo"
                    style={{ height: '20px',width:'23px',marginBottom:'7px' }}
                  />Contact Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <img
                    src="images/clogo.gif"
                    alt="Logo"
                    style={{ height: '20px', marginBottom:'7px' }}
                  />Cart({cartState.cartItems.length}) 
                  
                </Nav.Link>
              </LinkContainer>
              {currentUser ? ( 
              // <div style={{paddingRight:'10px'}}>
                <LinkContainer to="/"> 
                  <NavDropdown title={currentUser.name} id="basic-nav-dropdown" >
                    <LinkContainer to="/orders">
                      <NavDropdown.Item> <img
                    src="images/ologo.gif"
                    alt="Logo"
                    style={{ height: '25px' }}
                  />Orders</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/userprofile">
                      <NavDropdown.Item> <img
                    src="images/pflogo.gif"
                    alt="Logo"
                    style={{ height: '25px' }}
                  />Your Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item
                      onClick={() => {
                        dispatch(logoutUser())
                      }}
                    > <img
                    src="images/ulogo.gif"
                    alt="Logo"
                    style={{ height: '25px' }}
                  />
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown> 
                </LinkContainer>
                // </div>
                
              ) : (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link> <img
                    src="images/ilogo.gif"
                    alt="Logo"
                    style={{ height: '25px' }}
                  />Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link><img
                    src="images/rglogo.gif"
                    alt="Logo"
                    style={{ height: '29px' }}
                  />Register</Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
