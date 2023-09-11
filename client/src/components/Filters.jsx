// import React, { useState } from 'react'
// import { Form, Col, Row, Button } from 'react-bootstrap'
// import { useDispatch } from 'react-redux'
// import { filterPizza } from '../actions/pizzaAction'
// const Filters = () => {
//   const [searchkey, setsearchkey] = useState('')
//   const [category, setcategory] = useState('all')
//   const dispatch = useDispatch()
//   return (
//     <div className="p-4 bg-info mt-4">
//       <Form>
//         <Row>
//           <Col>
//             <Form.Control
//               value={searchkey}
//               onChange={(e) => setsearchkey(e.target.value)}
//               placeholder="Search Cakes"
//             />
//           </Col>
//           <Col>
//             <select
//               className="form-select"
//               value={category}
//               onChange={(e) => setcategory(e.target.value)}
//             >
//               <option>All</option>
//               <option>Birthday</option>
//               <option>Anniversary</option>
//               <option>Wedding</option>
//             </select>
//           </Col>
//           <Col>
//             <Button
//               onClick={() => {
//                 dispatch(filterPizza(searchkey, category))
//               }}
//             >
//               Search
//             </Button>
//           </Col>
//         </Row>
//       </Form>
//     </div>
//   )
// }

// export default Filters

import React, { useState } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { filterPizza } from '../actions/pizzaAction';

const Filters = () => {
  const [searchkey, setSearchKey] = useState('');
  const [category, setCategory] = useState('all');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(filterPizza(searchkey, category));
  };

  return (
    <div className="p-4 bg-info mt-4">
      <Form>
        <Row>
          <Col>
            <Form.Control
              value={searchkey}
              onChange={(e) => setSearchKey(e.target.value)}
              placeholder="Search Cakes"
            />
          </Col>
          <Col>
            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">All</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="wedding">Wedding</option>
            </select>
          </Col>
          <Col>
            <Button onClick={handleSearch}>Search</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Filters;

