import React from 'react';
import './App.css';
import './FooterApp.css'
import './ContentApp.css'
import './Button.css'
import './text.css'
import './HearderApp.css'
var HeaderApp = () => (
  <div>
    <div className='header container'>
      <img className="logo" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width={72} height={72} />
      <h2>Checkout form</h2>
      <p className="header-text">Below is an example form built entirely with Bootstrap's form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>

    </div>
  </div>
);
var ContentApp = () => (
  <div className="row container">
    <div className=" content-right order-md-2 ">
      <h4 className="content-right-title d-flext justify-content-between">
        <span className="text-muted">Your cart</span>
        <span className="badge badge-secondary badge-pill">3</span>
      </h4>
      <ul className="list-content-right mb3 ">
        <li className="list-content-right-item  d-flext justify-content-between">
          <div>
            <h6 className="my-name-product">Product name</h6>
            <small className="text-muted">Brief description</small>
          </div>
          <span className="text-muted">$12</span>
        </li>
        <li className="list-content-right-item d-flext justify-content-between">
          <div>
            <h6 className="my-name-product">Second product</h6>
            <small className="text-muted">Brief description</small>
          </div>
          <span className="text-muted">$8</span>
        </li>
        <li className="list-content-right-item d-flext justify-content-between">
          <div>
            <h6 className="my-name-product">Third item</h6>
            <small className="text-muted">Brief description</small>
          </div>
          <span className="text-muted">$5</span>
        </li>
        <li className="list-content-right-item d-flext justify-content-between App">
          <div className="text-success">
            <h6 className="my-name-product">Promo code</h6>
            <small>EXAMPLECODE</small>
          </div>
          <span className="text-success">-$5</span>
        </li>
        <li className="list-content-right-item d-flext justify-content-between">
          <span>Total (USD)</span>
          <strong>$20</strong>
        </li>
      </ul>
      <form className="card p-2">
        <div className="input-group">
          <input type="text" className="form-control" />
          <div className="input-group-append">
            <button type="submit" className="btn btn-secondary">Redeem</button>
          </div>
        </div>
      </form>
    </div>

    <div className="content-left order-md-1">
      <h4 className="content-left-title">Billing address</h4>
      <form className="needs-validation" noValidate>
        <div className="row">
          <div className="content-left-title title mb3">
            <label >First name</label>
            <input type="text" className="form-control input-1" />

          </div>
          <div className="content-left-title title mb3">
            <label>Last name</label>
            <input type="text" className="form-control input-1" />

          </div>
        </div>
        <div className="content-left-title mb3">
          <label >Username</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">@</span>
            </div>
            <input type="text" className="form-control" id="username" required />

          </div>
        </div>
        <div className="content-left-title mb3">
          <label >Email <span className="text-muted">(Optional)</span></label>
          <input type="email" className="form-control" id="email" placeholder="you@example.com" />

        </div>
        <div className="content-left-title mb3">
          <label >Address</label>
          <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />

        </div>
        <div className="content-left-title mb3">
          <label >Address 2 <span className="text-muted">(Optional)</span></label>
          <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
        </div>
        <div className="row">
          <div className=" content-left-title mb3 col-md-5">
            <label >Country</label>
            <select className="custom-select" id="country" required>
              <option value>Choose...</option>
              <option>United States</option>
            </select>

          </div>
          <div className=" content-left-title mb3 col-md-5">
            <label>State</label>
            <select className="custom-select" id="state" required>
              <option value>Choose...</option>
              <option>California</option>
            </select>
          </div>
          <div className="content-left-title mb3 col-md-5">
            <label >Zip</label>
            <input type="text" className="form-control" id="zip" />
          </div>
        </div>
        <hr className="mb-4" />
        <label className=" custom-control custom-checkbox">Shipping address is the same as my billing address
        <input type="checkbox" />
          <span class="checkmark"></span>

        </label>
        <label className=" custom-control custom-checkbox">Save this information for next time
        <input type="checkbox" />
          <span class="checkmark"></span>

        </label>
        <hr className="mb-4" />
        <h4 className="content-left-title">Payment</h4>
        <div className="d-block content-left-title">
          <label className=" custom-control custom-radio">Credit card
          <input type="radio" name="radio" />
            <span class="checkmark"></span>

          </label>
          <label className=" custom-control custom-radio">Debit card
          <input type="radio" name="radio" />
            <span class="checkmark"></span>

          </label>
          <label className=" custom-control custom-radio">Paypal
          <input type="radio" name="radio" />
            <span class="checkmark"></span>

          </label>
        </div>
        <div className="row">
          <div className="content-left-title title mb3">
            <label >Name on card</label>
            <input type="text" className="form-control input-1" id="cc-name" />
            <small className="text-muted">Full name as displayed on card</small>
          </div>
          <div className="content-left-title title mb3">
            <label>Credit card number</label>
            <input type="text" className="form-control input-1" id="cc-number" />
          </div>
        </div>
        <div className="row ">
          <div className="title1 ">
            <div className="  mb3">
              <label >Expiration</label>
              <input type="text" className="form-control" id="cc-expiration" />

            </div>
            <div className=" mb3">
              <label >CVV</label>
              <input type="text" className="form-control" id="cc-cvv" />

            </div>
          </div>

        </div>
        <hr className="mb-4" />
        <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
      </form>

    </div>
  </div>
);
var FooterApp = () => (
  <div>
    <footer className="footer-app container">
      <p className="footer-text">© 2017-2018 Company Name</p>
      <ul className="footer-list-link">
        <li className="footer-list-link-item"><a href="#">Privacy</a></li>
        <li className="footer-list-link-item"><a href="#">Terms</a></li>
        <li className="footer-list-link-item"><a href="#">Support</a></li>
      </ul>
    </footer>
  </div>
);

function App() {
  return (
    <div className="App">
      <HeaderApp />
      <ContentApp />
      <FooterApp />
    </div>
  );
}

export default App;
