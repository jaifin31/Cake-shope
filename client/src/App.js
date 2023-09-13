import './App.css'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TopBar from './components/TopBar'
import About from './components/About'
import Contact from './components/Contact'
import Policy from './components/Policy'
import NavBar from './components/NavBar'
import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import Registe from './screens/Registe'
import Login from './screens/Login'
import OrderScreen from './screens/OrderScreen'
import AdminScreen from './screens/AdminScreen'
import ProductDetail from './screens/ProductDetail'
import CustomCake from './screens/CustomCake'
import UserProfile from './screens/UserProfile'
import Footer from './components/Footer'



function App() {
  const [item, setItem] = useState([])
useEffect(()=>{
  const user=JSON.parse(localStorage.getItem('currentUser')) || null
  console.log(user)
  if(user!=null && user.isAdmin){
 //! navigate to /admin
  }
 
},[])

  return (
    <BrowserRouter>
       <TopBar /> 
      <Switch>
        <Route path="/admin" component={AdminScreen} />
        <Route path="/orders"  exact ><NavBar /><OrderScreen /></Route>
        <Route path="/login"  exact ><NavBar /><Login /></Route>
        <Route path="/userprofile"  exact ><NavBar /><UserProfile /></Route>
        <Route path="/userprofile"exact ><NavBar /><UserProfile/></Route>
        <Route path="/register"  exact ><NavBar /><Registe/></Route>
        <Route path="/cart"exact ><NavBar /><CartScreen /></Route>
        <Route path="/about" exact ><NavBar /><About /></Route>
        <Route path="/contact" ><NavBar /><Contact /></Route>
        <Route path="/policy"  exact ><NavBar /><Policy /></Route>
        <Route path="/productdetail" exact ><NavBar/><ProductDetail item={item} /></Route>
        <Route path="/customcake" exact ><NavBar /><CustomCake /></Route>
        <Route path="/" ><NavBar /><HomeScreen setItem={setItem}/> </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
