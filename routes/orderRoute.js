const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')
const stripe = require('stripe')(
  'sk_test_51NjEwGSBJhuyusNZYeVMCFKHebaPwB6yivlHef5GRBJ8goTXOC76cJIYZ2F6NY2k69d1d96EnLBr5accHAJ7ZtGD00wowX6YQa'
)
const Order = require('../models/orderModel')
const customCake = require('../models/customCake')

router.post('/placeorder', async (req, res) => {
  const { token, subTotal, currentUser, cartItems } = req.body
  try {
    console.log(req.body)
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    })
    console.log('customer')
    console.log(customer)
    // const payment = await stripe.charges.create(
    //   {
    //     amount: subTotal * 100,
    //     currency: "inr",
    //     customer: customer.id,
    //     receipt_email: token.email,
    //   },
    //   {
    //     idempotencyKey: uuidv4(),
    //   }
    // );
    // console.log("Payment")
    // console.log(payment)
    // if (payment) {
    const newOrder = new Order({
      name: currentUser.name,
      email: currentUser.email,
      userid: currentUser._id,
      phone: currentUser.phone,
      orderItems: cartItems,
      orderAmount: subTotal,
      shippingAddress: {
        street: token.card.address_line1,
        city: token.card.address_city,
        country: token.card.address_country,
        picode: token.card.address_zip,
      },
      // transectionId: payment.source.id,
    })
  const result=  await newOrder.save()
    console.log(result)
    res.send('Payment Success')
    // } else {
    //   res.send("Payment Faild");
    // }
  } catch (error) {
    console.log(error.message)
    res.status(400).json({
      message: 'Something went wrong',
      error: error.stack,
    })
  }
})

router.post('/getuserorder', async (req, res) => {
  const { userid } = req.body
  try {
    console.log(userid)
    const orders = await Order.find({ userid }).sort({ _id: '-1' })
    console.log(orders)
    res.status(200).send(orders)
  } catch (error) {
    res.status(400).json({
      message: 'Something Went Wront',
      error: error.stack,
    })
  }
})

router.get('/alluserorder', async (req, res) => {
  try {
    const orders = await Order.find({})
    res.status(200).send(orders)
  } catch (error) {
    res.status(400).json({
      message: 'Something Went Wront',
      error: error.stack,
    })
  }
})

router.post('/deliverorder', async (req, res) => {
  const orderid = req.body.orderid
  try {
    const order = await Order.findOne({ _id: orderid })
    order.isDeliverd = true
    await order.save()
    res.status(200).send('Order deliverd success')
  } catch (error) {
    res.status(400).json({
      message: 'Something Went Wront',
      error: error.stack,
    })
  }
})

router.post('/customcake', async (req, res) => {
    
  try {
    const newOrder = new customCake(req.body)
    const result=await newOrder.save();

    res.status(200).json({data:true})
  } catch (error) {
    res.status(400).json({
      message: error.message,
      error: error.stack,
    })
  }
})

router.post('/viewcustomcake', async (req, res) => {
    
  try {
    // const newOrder = new customCake(req.body)
    const result=await customCake.find({});

    res.status(200).json({data:result})
  } catch (error) {
    res.status(400).json({
      message: error.message,
      error: error.stack,
    })
  }
})

module.exports = router
