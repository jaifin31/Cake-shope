import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import AddNewPizza from '../components/Admin/AddNewPizza'
import OrderList from '../components/Admin/OrderList'
import Pizzaslist from '../components/Admin/Pizzaslist'
import Userlist from '../components/Admin/Userlist'
import EditPizza from './../components/Admin/EditPizza'
import Sidebar from '../components/Sidebar'
// import SalesGraph from '../components/Admin/SalesGraph'

const AdminScreen = () => {
  const userState = useSelector((state) => state.loginUserReducer)
  const { currentUser } = userState
  useEffect(() => {
    if (localStorage.getItem('currentUser') === null || !currentUser.isAdmin) {
      window.location.href = '/'
    }
  }, [currentUser])
  return (
    <>
      <Container>
        <Sidebar/>
          <h1 className="text-center text-light p-2" style={{backgroundColor:'#0dcaf0'}}>Admin Panel</h1>
            <Switch>
              <Route path="/admin" component={Userlist} exact />
              <Route path="/admin/userlist" component={Userlist} exact />
              <Route
                path="/admin/editpizza/:pizzaId"
                component={EditPizza}
                exact
              />
              <Route path="/admin/pizzalist" component={Pizzaslist} exact />
              <Route path="/admin/addnewpizza" component={AddNewPizza} exact />
              <Route path="/admin/orderlist" component={OrderList} exact />
              {/* <Route path="/admin/salesgraph" component={SalesGraph} exact /> */}
            </Switch>

      </Container>
    </>
  )
}

export default AdminScreen
