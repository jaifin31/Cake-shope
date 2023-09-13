import React, { useState } from 'react'
import Modal from 'react-modal' // Import the Modal component
// import './CustomCake.css';
import './Address.css'
import { addCustomCake } from '../actions/orderAction';

// Make sure to set the root element for the modal
Modal.setAppElement('#root')

export default function Address({ showAddress, setShowAddress ,selectedValues,setSelectedValues}) {


//   const openModal = () => {
//     // setIsModalOpen(true);
//     setShowAddress(true)
//   }

  const closeModal = () => {
    // setIsModalOpen(false);
    setShowAddress(false)
  }

    const handleSubmit = (e) => {
      e.preventDefault();
      addCustomCake(selectedValues).then((res)=>res.json()).then((res)=>{
        // After ordering redirecting code. Here
      })
    };

  return (
    <div className="acustom-cake-container">
      <Modal
        isOpen={showAddress}
        onRequestClose={closeModal}
        contentLabel="Address Modal"
      >
        <h2>Enter Customer's Address</h2>
        <div className="form">
          <div className="flex">
            <label>
              <input
                required=""
                placeholder=""
                type="email"
                id="email"
                name="email"
                className="input"
                onChange={(e)=>  setSelectedValues((selectedValues) => ({...selectedValues,['email']: e.target.value}))}
              />
              <span>Email ID</span>
            </label>

            <label>
              <input
                required=""
                placeholder=""
                type="text"
                id="name"
                name="name"
                className="input"
                onChange={(e)=>  setSelectedValues((selectedValues) => ({...selectedValues,['name']: e.target.value}))}
              />
              <span>Name</span>
            </label>
          </div>

          <label>
            <input
              required=""
              placeholder=""
              type="text"
              id="address"
              name="address"
              className="input"
              onChange={(e)=>  setSelectedValues((selectedValues) => ({...selectedValues,['shippingAddress']: e.target.value}))}

            />
            <span>Address</span>
          </label>

          <label>
            <input
              required=""
              type="tel"
              placeholder=""
              id="pincode"
              name="pincode"
              className="input"
              onChange={(e)=>  setSelectedValues((selectedValues) => ({...selectedValues,['phone']: e.target.value}))}

            />
            <span>Phone</span>
          </label>

          <button className="btn btn-info" onClick={handleSubmit}>
            <span className="text">Place Order</span>
          </button>
        </div>
        {/* <form>
          <div className="aform-group">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" required="" />
          </div>
          <div className="aform-group">
            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="city" required="" />
          </div>
          <div className="aform-group">
            <label htmlFor="zip">ZIP Code:</label>
            <input type="text" id="zip" name="zip" required="" />
          </div>
      
          <button type="submit">Save Address</button>
        </form> */}
        {/* <button className="btn btn-secondary" onClick={closeModal}>
          Place Order
        </button> */}
      </Modal>
    </div>
  )
}
