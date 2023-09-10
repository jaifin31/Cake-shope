import React, { useState } from 'react'
import Modal from 'react-modal' // Import the Modal component
// import './CustomCake.css';
import './Address.css'

// Make sure to set the root element for the modal
Modal.setAppElement('#root')

export default function Address({ showAddress, setShowAddress }) {
  //   const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    // setIsModalOpen(true);
    setShowAddress(true)
  }

  const closeModal = () => {
    // setIsModalOpen(false);
    setShowAddress(false)
  }

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // Handle form submission here
  //     openModal(); // Open the modal after successful submission
  //   };

  return (
    <div className="acustom-cake-container">
      <Modal
        isOpen={showAddress}
        onRequestClose={closeModal}
        contentLabel="Address Modal"
      >
        <h2>Enter Customer's Address</h2>
        <form className="form">
          <div className="flex">
            <label>
              <input
                required=""
                placeholder=""
                type="email"
                id="email"
                name="email"
                className="input"
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
            />
            <span>Pincode</span>
          </label>
          <label>
            <input
              required=""
              type="tel"
              placeholder=""
              id="city"
              name="city"
              className="input"
            />
            <span>City</span>
          </label>

          <button className="btn btn-info" href="#">
            <span className="text">submit</span>
          </button>
        </form>
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
        <button className="btn btn-secondary" onClick={closeModal}>
          Place Order
        </button>
      </Modal>
    </div>
  )
}
