import React from 'react';
import "./CustomCake.css"

function CustomCake() {
  return (
    <div>
      <div className="image-form snipcss-gplgb" id="customised-background">
        <div className="image-spoon-customised">
          <div className="commonImageContainer style-x55Wz" id="style-x55Wz">
            <img
              width="100"
              height="100"
              src="https://bkmedia.bakingo.com/images/corporate/image-spoon.png"
              data-sizes="auto"
              alt="about"
              title="about"
              data-src="https://bkmedia.bakingo.com/images/corporate/image-spoon.png"
              className="lazyautosizes ls-is-cached lazyloaded tether-target-attached-top tether-abutted tether-abutted-top tether-element-attached-top tether-element-attached-center tether-target-attached-center style-XLGT2"
              id="style-XLGT2"
            />
            <noscript>
              <img
                typeof="foaf:Image"
                src="https://bkmedia.bakingo.com/images/corporate/image-spoon.png"
                height="250"
                width="250"
                alt="about"
                title="about"
                style={{ display: 'inline' }}
              />
            </noscript>
          </div>
        </div>
        <div className="form-submit">
          <div className="header-form">Customised Cake Query</div>
          <form>
            <div className="form-row submit-mobile">
              <div className="form-group col-md-6">
                <label id="inputEmail4">
                  Your Name
                  <span className="form-required">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-sm sizeFixed"
                  id="inputYourName4"
                  required=""
                />
              </div>
              <div className="form-group col-md-6">
                <label id="inputPasswordText">
                  Phone Number
                  <span className="form-required">*</span>
                </label>
                <input
                  type="text"
                  name="phone_number"
                  className="form-control form-control-sm sizeFixed"
                  id="inputPassword4"
                  required=""
                  maxLength="10"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label id="inputYourNameEmail">
                  Email
                  <span className="form-required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control form-control-sm sizeFixed"
                  id="email"
                  required=""
                />
              </div>
              <div className="form-group col-md-6">
                <div className="customised-label">
                  Attachments
                  <span className="form-required">*</span>
                </div>
                <label htmlFor="validationDefault02" className="customised-fileset">
                  <input
                    type="file"
                    accept="image/jpg, image/jpeg, image/png"
                    name="filedata"
                    id="validationDefault02"
                  />
                  Choose file
                </label>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-12 position style-3rlCI" id="style-3rlCI">
                <label id="inputYourNameMessage">
                  Tell us a bit about requirement
                  <span className="form-required">*</span>
                </label>
                <textarea
                  maxLength="250"
                  className="form-control message-sizeFixed"
                  id="exampleFormControlTextarea1"
                  name="message"
                  rows="3"
                  required=""
                ></textarea>
              </div>
            </div>
            <div data-testid="wrapper" className="_loading_overlay_wrapper css-79elbk">
              <input type="submit" className="submit-form" value="Submit form" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CustomCake;
