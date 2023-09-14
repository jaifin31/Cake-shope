import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deliverOrder, getAllOrders, viewCustomCake } from './../../actions/orderAction'
import { Table, Button } from 'react-bootstrap'
import Loader from './../Loader'
import Error from './../Error'
const CustomOrder = () => {
  // const allOrdersState = useSelector((state) => state.allUserOrdersReducer)
  // const { loading, orders, error } = allOrdersState
  const [orders,setOrders] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    viewCustomCake().then((res)=>res.json()).then((res)=>{
      // After ordering redirecting code. Here
      setOrders([...res.data])
    })
  }, [])
  console.log(orders)
  return (
    <div>
      <h1>Order Lists</h1>
      {/* {loading && <Loader />} */}
      {/* {error && <Error error="Admin Order req fail" />} */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Email</th>
            <th>User Name</th>
            <th>Message</th>
            <th>KG</th>
            <th>Date</th>
            <th>Cake Details</th>
            <th>Address</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.email}</td>
                <td>{order.name}</td>
                <td>{order.cakeMessage}</td>
                <td>{order.cakeKg}</td>
                {/* <td>{order.createdAt.substring(0, 10)}</td> */}
                <td>
                  {order.shippingAddress}
                </td>
                <td>
                  {' '}
                  {order.isDeliverd ? (
                    <h6 className="text-success">Deliverd</h6>
                  ) : (
                    <>
                      <Button
                        className="btn-danger"
                        onClick={() => {
                          dispatch(deliverOrder(order._id))
                        }}
                      >
                        Deliver
                      </Button>
                    </>
                  )}{' '}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  )
}

export default CustomOrder
