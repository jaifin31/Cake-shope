import React from 'react'
import { Navbar, Image} from 'react-bootstrap'
import NavBar from './NavBar';
import './TopBar.css';

const TopBar = () => {
  return (
    <>
   
      <div className="header">
      {/* <Navbar.Brand>
            <Image
              src="images/logo1.png"
              alt="logo"
              style={{ height: '250px',width:'300px' }}
            />
          </Navbar.Brand> */}
      {/* <h1 className="project-name">The Cake Gallery</h1> */}
      <NavBar/>
    </div>
    </>
  )
}

export default TopBar
