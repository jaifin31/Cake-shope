import React from 'react'
import {Image} from 'react-bootstrap'
import './TopBar.css';
// import Slider from 'react-slick';

const TopBar = () => {
  return (
    <>
   
      <div className="header">
      <Image
              src="/images/logo3.png"
              alt="logo"
              style={{ height: '80px' , width:'300px',padding:"5px", marginLeft:'10px' }}
            />
          <div className="text-content">
          <h2>A Slice of Heaven,<br/> Welcome to The Cake Gallery</h2><br/>
          {/* <p style={{fontSize:"22px"}}>Perfect for any occasion or a sweet escape, our cakes create moments to treasure. <br/>
            </p> */}
        </div>
    </div>
    </>
  )
}
 
export default TopBar
