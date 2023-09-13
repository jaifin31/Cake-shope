import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Sidebar = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="#ef5454;"
        variant="light"
        style={{ backgroundColor: '#fff' }}
      >
        <Container style={{ marginLeft: '190px' }}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
             
              <LinkContainer to="/admin/userlist" activeClassName="">
                <Nav.Link>
                  {' '}
                  <img
                    src="images/user.gif"
                    alt="Logo"
                    style={{ height: '25px', marginBottom: '7px' }}
                  />
                  User List
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/admin/pizzalist" activeClassName="">
                <Nav.Link>
                  {' '}
                  <img
                    src="images/cakes.gif"
                    alt="Logo"
                    style={{ height: '25px', marginBottom: '7px' }}
                  />
                  Cake List
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/admin/addnewpizza" activeClassName="">
                <Nav.Link>
                  <img
                    src="images/addp.gif"
                    alt="Logo"
                    style={{ height: '25px', marginBottom: '7px' }}
                  />
                  AddNew Cake
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/admin/orderlist">
                <Nav.Link>
                  <img
                    src="images/orders.gif"
                    alt="Logo"
                    style={{ height: '25px', marginBottom: '7px' }}
                  />
                  Order List
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/admin/customorder" activeClassName="">
                <Nav.Link > <img
                    src="images/ccclogo.gif"
                    alt="Logo"
                    style={{ height: '25px', marginBottom:'7px' }}
                  />Customs Orders</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <img
                    src="images/ulogo.gif"
                    alt="Logo"
                    style={{ height: '25px', marginBottom: '7px' }}
                  />
                  Logout
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Sidebar
