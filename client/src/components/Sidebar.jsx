import React from 'react';
import { Nav, Container, Image, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { logoutUser } from '../actions/userAction';
import './Sidebar.css';

const Sidebar = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  return (
    <div className="sidebar">
      <Container>
        <Image src="images/logo.png" alt="logo" style={{ height: '50px' }} />
        <Nav className="flex-column">
          <LinkContainer to="/" activeClassName="">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about" activeClassName="">
            <Nav.Link>About Us</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact" activeClassName="">
            <Nav.Link>Contact Us</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/policy" activeClassName="">
            <Nav.Link>Policy</Nav.Link>
          </LinkContainer>
          {currentUser ? (
            <>
              <LinkContainer to="/orders">
                <Nav.Link>Orders</Nav.Link>
              </LinkContainer>
              <Nav.Link
                onClick={() => {
                  dispatch(logoutUser());
                }}
              >
                Logout
              </Nav.Link>
            </>
          ) : (
            <>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/register">
                <Nav.Link>Register</Nav.Link>
              </LinkContainer>
            </>
          )}
          <LinkContainer to="/cart">
            <Nav.Link>
              Cart{' '}
              <img
                src="images/clogo.png"
                alt="Logo"
                style={{ height: '22px' }}
              />
              {cartState.cartItems.length}
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </div>
  );
};

export default Sidebar;
