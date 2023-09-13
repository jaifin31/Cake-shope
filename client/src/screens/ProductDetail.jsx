import React from 'react'
import './ProductDetail.css'
import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { addToCart } from '../actions/cartAction'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

const ProductDetail = ({ item }) => {
 //  const [varient, setVarient] = useState(item[0].varients[0]) replace with your initial value
  const [varient, setVarient] = useState(item && item[0] && item[0].varients[0] ? item[0].varients[0] : ''); // replace with your initial value
  const [quantity, setQuantity] = useState(1)

  const dispatch = useDispatch()
  const history = useHistory()

  const addToCartHandler = () => {
    dispatch(addToCart(item[0], quantity, varient))
    alert('Item added to cart')
    history.push('/cart')
  }

  //  const { varients, prices } = item[0]
  console.log(item)
  return (
    <div className="rowContainer snipcss-wKzwA" style={{padding:'30px'}}>
      {/* ...other components */}
      {/* Add your JSX code for all the nested elements */}
      <div className="rowContainer snipcss-wKzwA">
        <div className="columnContainer">
          <div className="eggless-maincontainer">
            <div>
              <div className="border-eggless">
                <div className="circle-eggless"></div>
              </div>
            </div>
          </div>
          <div className="cake-images productimage-container">
            <meta
              itemProp="image"
              content="https://bkmedia.bakingo.com/sq-happy-birthday-peppa-pig-poster-cake-them2272flav-A_0.jpg"
            />
            <div id="style-ZCHj9" className="style-ZCHj9">
              {/* <ol className="image-small"> */}
              {/* <li>
                  <div className="productimage">
                    <div
                      className="commonImageContainer style-tLXdd"
                      id="style-tLXdd"
                    >
                      <img
                        width="100"
                        height="100"
                        src="https://bkmedia.bakingo.com/sq-happy-birthday-peppa-pig-poster-cake-them2272flav-A_0.jpg?tr=h-100,w-100"
                        data-sizes="auto"
                        alt="Happy B'Day Peppa Cake"
                        title="Happy B'Day Peppa Cake"
                        loading="eager"
                        id="style-v2ga8"
                        className="style-v2ga8"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="productimage">
                    <div
                      className="commonImageContainer style-pWExv"
                      id="style-pWExv"
                    >
                      <img
                        width="100"
                        height="100"
                        src="https://bkmedia.bakingo.com/sq-happy-birthday-peppa-pig-poster-cake-them2272flav-B_0.jpg?tr=h-100,w-100"
                        data-sizes="auto"
                        alt="Happy Birthday Peppa Pig Poster Cake"
                        title="Happy B'Day Peppa Cake"
                        loading="eager"
                        id="style-nx4er"
                        className="style-nx4er"
                      />
                    </div>
                  </div>
                </li>
              </ol> */}
              <div className="product-infocus">
                <ul className="image-big desktop-image-zoom zoom-slide">
                  <div id="style-1xHsa" className="style-1xHsa">
                    <img
                      src={item && item[0] && item[0].image ? item[0].image : ''}
                      id="style-8nwKy"
                      className="style-8nwKy"
                      alt='CakeImage'
                    />
                    <div
                      className="js-image-zoom__zoomed-area style-HNHon"
                      id="style-HNHon"
                    ></div> 
                     <div
                      className="js-image-zoom__zoomed-image style-bgboR"
                      id="style-bgboR"
                    ></div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="columnContainerContent">
          <div className="wishicon-position">
            <div className="details-eggles">
              <h1 className="product-heading " itemProp="name">
                {/* {item[0].name} */}
                {item && item[0] && item[0].name ? item[0].name : ''}
              </h1>
            </div>
            <div className="wish-icon">
              <div>
                <div className="">
                  <img
                    src="https://media.bakingo.com/bakingo-ssr/static/media/WhiteLoveIcon.3cb63030.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="product-review-covid "> */}
            <div className="product-number-review">
              <div className="star-number">
                <div className="rating-number">5</div>★
              </div>
              <div className="product-review">
                <p>18 Reviews</p>
              </div>
            </div>
          {/* </div> */}
          <div className="price-content">
            <span
              className="product-price"
              itemProp="offers"
              itemscope="true"
              itemtype="https://schema.org/Offer"
            />
            <meta itemProp="availability" content="InStock" />
            <meta
              itemProp="url"
              content="https://www.bakingo.com/p/theme-cake/happy-birthday-peppa-pig-poster-cake-them2272flav/p/theme-cake/happy-birthday-peppa-pig-poster-cake-them2272flav"
            />
            <span
              itemProp="priceCurrency"
              content="INR"
              className="priceCurrencyIcon"
            ></span>
            <span itemProp="price" content="775">
              <Col md={6}>
                {item && item[0] && item[0].prices && item[0].prices[0] && varient
                  ? `Price ₹${item[0].prices[0][varient] * quantity}/-`
                  : ''}
              </Col>
              <meta
                itemProp="https://schema.org/priceValidUntil"
                content="Mon Aug 12 2024 12:15:11 GMT+0530 (India Standard Time)"
              />
            </span>
            {/* <span className="gst-content">(Inclusive of GST)</span> */}
          </div>
          <div id="style-vDEea" className="style-vDEea">
            {/* <h3 className="cont-prod">Category</h3>
            <li id="style-XGqah" className="style-XGqah">
              <div className="product-contain">
                <div className="product-contains-dot"></div>
                {item[0].category}
              </div>
            </li> */}
            {item && item[0] && item[0].category ? (
              <>
                <h3 className="cont-prod">Category</h3>
                <li id="style-XGqah" className="style-XGqah">
                  <div className="product-contain">
                    <div className="product-contains-dot"></div>
                    {item[0].category}
                  </div>
                </li>
              </>
            ) : (
              // Handle the case where item or category is not available
              <p>Category not available</p>
            )}
          </div>
          {/* <div className="weight-heading">
            Select Weight
            <span className="serving-info">Serving info</span>
          </div> */}
          <div className="select-all-weight-box">
            {/* <div className="selectedWeightContainerBox">0.5 Kg</div>
            <div className="weightContainerBox">1 Kg</div>
            <div className="weightContainerBox">1.5 Kg</div>
            <div className="weightContainerBox">2 Kg</div> */}
            <div>
              <Row>
                <Col md={6}>
                  <h6>Flavors</h6>
                  {item && item[0] && item[0].varients && (
                  <select
                    className="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    value={varient}
                    onChange={(e) => setVarient(e.target.value)}
                  >
                    {item[0].varients.map((varient) => (
                      <option key={varient}>{varient}</option>
                    ))}
                  </select>
                )}
                </Col>
                <Col md={6}>
                  <h6>KG</h6>
                  <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  >
                    {[...Array(5).keys()].map((v, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </Col>
              </Row>
            </div>
          </div>

          {/* <div>
            <div className="weight-heading">Select Flavour</div>
            <div className="scrolling-div">
              {item[0].varients.map((flavor) => {
                return <div className="weightContainer">{flavor}</div>
              })}
            </div>
          </div> */}
          <span className="weight-heading">Message</span>
          <div className="weight-message">
            <input
              type="text"
              maxlength="25"
              placeholder="Enter message on cake"
              className="input-cakemessage"
            />
            <div className="message-length">25 Characters</div>
          </div>

          <div className="buy-now-order-same ">
            <div className="d cart mr-2" onClick={addToCartHandler}>
              Add To Cart
            </div>
            {/* <div className="d only-buy-now ">Buy Now</div> */}
          </div>
          {/* <div className="flex mt-7 sm:mt-0 style-o2R7o" id="style-o2R7o">
            <div className="time-smile w-full rounded-none md:w-11/12 lg:w-4/5 rounded-lg flex">
              <div className="flex flex-col md:flex-row">
                <div className="thumb-image">
                  <span className="style-Yxpib" id="style-Yxpib"></span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="thumb-image">
                  <span className="style-5tpAT" id="style-5tpAT"></span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="thumb-image">
                  <span className="style-dWaaQ" id="style-dWaaQ"></span>
                </div>
              </div>
            </div>
          </div> */}
          <div>
            <div className="product-description-city">
              <div className="product-heading-card">Product Description</div>
              {/* <div className="product-description" itemProp="description">
              {item[0].description}
              </div> */}
              {item && item[0] && item[0].description && (
                <div className="product-description" itemProp="description">
                  {item[0].description}
                </div>
              )}
              <meta itemProp="sku" content="them2272flav" />
              <meta itemProp="mpn" content="them2272flav" />
            </div>
          </div>
          <div className="seperator"></div>
          <div
            itemProp="review"
            itemscope="true"
            itemtype="https://schema.org/Review"
          ></div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
