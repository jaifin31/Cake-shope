import './App.css'
import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TopBar from './components/TopBar'
import About from './components/About'
import Contact from './components/Contact'
import Policy from './components/Policy'
//import NavBar from './components/NavBar'
import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import Registe from './screens/Registe'
import Login from './screens/Login'
import OrderScreen from './screens/OrderScreen'
import AdminScreen from './screens/AdminScreen'
import ProductDetail from './screens/ProductDetail'
import CustomCake from './screens/CustomCake'

function App() {
  const [item, setItem] = useState([])


  return (
    <BrowserRouter>
      <TopBar />
     {/*  <NavBar /> */}
      <Switch>
        <Route path="/admin" component={AdminScreen} />
        <Route path="/orders" component={OrderScreen} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Registe} exact />
        <Route path="/cart" component={CartScreen} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/policy" component={Policy} exact />
        <Route path="/productdetail" exact ><ProductDetail item={item} /></Route>
        <Route path="/customcake" component={CustomCake} exact />
        <Route path="/" ><HomeScreen setItem={setItem}/> </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
