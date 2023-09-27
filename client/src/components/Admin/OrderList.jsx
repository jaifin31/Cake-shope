import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deliverOrder, getAllOrders } from './../../actions/orderAction'
import { Table, Button } from 'react-bootstrap'
import Loader from './../Loader'
import Error from './../Error'
const OrderList = () => {
  const allOrdersState = useSelector((state) => state.allUserOrdersReducer)
  const { loading, orders, error } = allOrdersState
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllOrders())
  }, [dispatch])
  console.log(orders)
  return (
    <div>
      <h1>Order Lists</h1>
      {loading && <Loader />}
      {error && <Error error="Admin Order req fail" />}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Email</th>
            <th>User Name</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Items</th>
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
                <td>Rs {order.orderAmount}/-</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{order.orderItems.map((item)=>{
                  return(
                 <>  <p>Name:{item.name}</p>
                    <p>Quantity:{item.quantity}</p>
                    <p>Message:{item.message}</p></> 
                  )
                })}</td>
                <td>
                  {order.shippingAddress.street}, {order.shippingAddress.city},<br/> 
                   {order.shippingAddress.picode}
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

export default OrderList
