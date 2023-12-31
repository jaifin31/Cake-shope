import React, { useEffect} from "react";

import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { getAllPizzas } from "../actions/pizzaAction";
import Pizza from "../components/Pizza";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Filters from "../components/Filters";
import { useHistory } from "react-router-dom";

const HomeScreen = ({setItem}) => {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;
  const history = useHistory()

  // console.log(pizzas);
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem('currentUser')) || null
    console.log(user)
    if(user!=null && user.isAdmin){
       history.push('/admin')
   //! navigate to /admin
   console.log("ITS ADMIN")
    } 
  },[])
  return (
    <div>
      <Container>
        {loading ? (
          <Loader />
        ) : error ? (
          <Error>Error while fetching Cakes {error}</Error>
        ) : (
          <Row>
            <Filters />
            {pizzas.map((pizza) => (
              <Col md={3} key={pizza.name}>
                <Pizza pizza={pizza} setItem={setItem}/>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default HomeScreen;
