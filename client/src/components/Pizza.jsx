import React, { useState } from 'react'
import { Card, Button, Row, Col, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartAction'
import { useHistory } from 'react-router-dom'


const Pizza = ({ pizza, setItem }) => {
  const [varient, setVarient] = useState('Black Forest')
  const [quantity, setQuantity] = useState(1)
  const [show, setShow] = useState(false)
  const history = useHistory()

  const dispatch = useDispatch()

  const addToCartHandler = () => {
    dispatch(addToCart(pizza, quantity, varient))
  }

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleClick = () => {
    setItem([pizza])
    history.push('/productdetail')
  }

  return (
  //  <div>
  //     <Card style={{ width: '25rem', marginTop: '50px', borderRadius: '20px', boxShadow: '0px 5px 7px rgba(0, 0, 0, 0.3)' }} >
  //       <Card.Img
  //         variant="top"
  //         src={pizza.image}
  //         style={{ height: '350px', cursor: 'pointer', borderRadius: '15px' }}
  //         // onClick={handleShow}
  //         onClick={handleClick}
  //       />

  //       <Card.Body>
  //         <Card.Title>{pizza.name}</Card.Title>
  //         <hr />
  //         <Card.Text>
  //           {/* <Row> */}
  //           {/* <Col md={6}>
  //               <h6>Flavors</h6>
  //               <select
  //                 value={varient}
  //                 onChange={(e) => setVarient(e.target.value)}
  //               >
  //                 {pizza.varients.map((varient) => (
  //                   <option key={varient}>{varient}</option>
  //                 ))}
  //               </select>
  //             </Col> */}
  //           {/* <Col md={6}>
  //               <h6>KG</h6>
  //               <select
  //                 value={quantity}
  //                 onChange={(e) => setQuantity(e.target.value)}
  //               >
  //                 {[...Array(5).keys()].map((v, i) => (
  //                   <option key={i + 1} value={i + 1}>
  //                     {i + 1}
  //                   </option>
  //                 ))}
  //               </select>
  //             </Col> */}
  //           {/* </Row> */}
  //         </Card.Text>
  //         <Row>
  //           <Col md={6}>
  //             Normal Price :${pizza.prices[0][varient] * quantity}/-
  //           </Col>
  //           <Col md={6}>
  //             {/* <Button
  //               onClick={addToCartHandler}
  //               className="bg-warning text-white"
  //             >
  //               Add to cart
  //             </Button> */}
  //           </Col>
  //         </Row>
  //       </Card.Body>
  //     </Card>
      <div>
      <Card
      style={{
        width: '290px', // Adjust the width as needed
        marginTop: '50px',
        borderRadius: '10px', // Rounded corners
        boxShadow: '0px 5px 7px rgba(0, 0, 0, 0.3)', // Box shadow
      }}
    >
      <div className="product-card-slider snipcss-q9Nwy">
        {/* Card Image */}
        <Card.Img
          variant="top"
          src={pizza.image}
          style={{
            height: '270px', // Adjust the height as needed
            width: '268px', 
            // cursor: 'pointer',
            justifyContent: 'center',
            borderRadius: '10px', // Rounded corners
            objectFit: 'cover',
            marginLeft:'10px',
            marginTop:'10px',
            boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.3)'
          }}
          onClick={handleClick}
        />

        {/* Card Content */}
        <Card.Body>
          <Card.Title className="cardName9title">{pizza.name}</Card.Title>
          <hr />
          
          <Row>
            <Col md={6}>
              Normal Price: ₹{pizza.prices[0][varient] * quantity}/-
            </Col>
          </Row>
        </Card.Body>
      </div>
    </Card>

          {/* modal */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{pizza.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <Card.Img
                  variant="top"
                  src={pizza.image}
                  style={{ height: '250px' }}
                />
              </div>
              <div>
                <h5>Description :</h5>
                <h6>{pizza.description}</h6>
              </div>
            </Modal.Body>
          </Modal>
        </div>
  )
}

export default Pizza
