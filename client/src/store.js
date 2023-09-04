// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import {
//   getAllPizzaReducer,
//   addPizzaReducer,
//   getPizzaByIdReducer,
//   updatePizzaByIdReducer,
// } from "./reducers/pizzaReducer";
// import { cartReducer } from "./reducers/cartReducer";
// import {
//   registerUserReducer,
//   loginUserReducer,
//   getAllUsersReducer,
// } from "./reducers/userReducer";
// import {
//   placeOrderReducer,
//   getUserOrdersReducer,
//   allUserOrdersReducer,
// } from "./reducers/orderReducer";
// const cartItems = localStorage.getItem("cartItems")
//   ? JSON.parse(localStorage.getItem("cartItems"))
//   : [];

// const currentUser = localStorage.getItem("currentUser")
//   ? JSON.parse(localStorage.getItem("currentUser"))
//   : null;
// const rootReducer = combineReducers({
//   getAllPizzaReducer: getAllPizzaReducer,
//   cartReducer: cartReducer,
//   registerUserReducer: registerUserReducer,
//   loginUserReducer: loginUserReducer,
//   placeOrderReducer: placeOrderReducer,
//   getUserOrdersReducer: getUserOrdersReducer,
//   addPizzaReducer: addPizzaReducer,
//   getPizzaByIdReducer: getPizzaByIdReducer,
//   updatePizzaByIdReducer: updatePizzaByIdReducer,
//   allUserOrdersReducer: allUserOrdersReducer,
//   getAllUsersReducer: getAllUsersReducer,
// });

// const initialState = {
//   cartReducer: {
//     cartItems: cartItems,
//   },
//   loginUserReducer: {
//     currentUser: currentUser,
//   },
// };
// const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );
// export default store;
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getAllPizzaReducer,
  addPizzaReducer,
  getPizzaByIdReducer,
  updatePizzaByIdReducer,
} from "./reducers/pizzaReducer";
import { cartReducer } from "./reducers/cartReducer";
import {
  registerUserReducer,
  loginUserReducer,
  getAllUsersReducer,
} from "./reducers/userReducer";
import {
  placeOrderReducer,
  getUserOrdersReducer,
  allUserOrdersReducer,
} from "./reducers/orderReducer";

// Parse cartItems from localStorage
const cartItems = localStorage.getItem("cartItems");
let parsedCartItems = [];
try {
  parsedCartItems = cartItems ? JSON.parse(cartItems) : [];
} catch (error) {
  console.error("Error parsing cart items from localStorage:", error);
  parsedCartItems = [];
}

// Parse currentUser from localStorage
const currentUser = localStorage.getItem("currentUser");
let parsedCurrentUser = null;
try {
  parsedCurrentUser = currentUser ? JSON.parse(currentUser) : null;
} catch (error) {
  console.error("Error parsing currentUser from localStorage:", error);
  parsedCurrentUser = null;
}

const rootReducer = combineReducers({
  getAllPizzaReducer: getAllPizzaReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrdersReducer: getUserOrdersReducer,
  addPizzaReducer: addPizzaReducer,
  getPizzaByIdReducer: getPizzaByIdReducer,
  updatePizzaByIdReducer: updatePizzaByIdReducer,
  allUserOrdersReducer: allUserOrdersReducer,
  getAllUsersReducer: getAllUsersReducer,
});

const initialState = {
  cartReducer: {
    cartItems: parsedCartItems,
  },
  loginUserReducer: {
    currentUser: parsedCurrentUser,
  },
};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
