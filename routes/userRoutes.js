const express = require('express')
const router = express.Router()
const User = require('../models/userModel')

router.post('/register', (req, res) => {
  const { name, email, phone, password } = req.body
  const newUser = new User({ name, email, phone, password })
  try {
    newUser.save()
    res.status(200).json({
      success: true,
      message: 'Register success',
    })
  } catch (error) {
    res.status(400).json({
      message: error,
    })
  }
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.find({ email, password })
    console.log("user")
    console.log(user)
    if (user.length > 0) {
      const currentUser = {
        _id:user[0]._id,
        name: user[0].name,
        email: user[0].email,
        phone:user[0].phone,
        isAdmin: user[0].isAdmin,
        // _id: user[0].Id,
      }
      res.status(200).send(currentUser)
    } else {
      res.status(400).json({
        message: 'Login Failed',
      })
    }
  } catch (error) {
    res.status(404).json({
      message: 'Something Went wrong',
    })
  }
})

router.get('/getallusers', async (req, res) => {
  try {
    const users = await User.find({})
    res.status(200).send(users)
  } catch (error) {
    res.status(404).json({ message: error.stack })
  }
})
router.get('/getuser/:id', async (req, res) => {
  try {
    const {id}=req.params;
    const user = await User.findById(id)
    res.status(200).send(user)
  } catch (error) {
    res.status(404).json({ message: error.stack })
  }
})

router.post('/deleteuser', async (req, res) => {
  const userid = req.body.userid
  try {
    await User.findOneAndDelete({ _id: userid })
    res.status(200).send('User Deleted')
  } catch (error) {
    res.status(404).json({ message: error.stack })
  }
})
module.exports = router
