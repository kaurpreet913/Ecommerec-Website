import React from 'react'
import { useNavigate } from 'react-router-dom';
 
function ConfirmOrder() {
  const navigate = useNavigate();
  const pay = () => {
    // Navigate to MyOrder page upon success
      navigate('/my-order');
  }
 
  return (
      <section className="payment-section">
  <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h2>Payment Details</h2>
        <form onSubmit={() => pay()}>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input type="text" className="form-control" id="cardNumber" name="cardNumber" placeholder="Enter card number" required/>
          </div>
          <div className="form-row">
            <div className="col">
              <label htmlFor="expiryDate">Expiration Date</label>
              <input type="text" className="form-control" id="expiryDate" name="expiryDate" placeholder="MM/YY" required/>
            </div>
            <div className="col">
              <label htmlFor="cvv">CVV</label>
              <input type="text" className="form-control" id="cvv" name="cvv" placeholder="CVV" required/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="cardHolder">Cardholder Name</label>
            <input type="text" className="form-control" id="cardHolder" name="cardHolder" placeholder="Enter cardholder name" required/>
          </div>
          <button type="submit" className="btn btn-primary btn-block">Submit Payment</button>
        </form>
      </div>
    </div>
  </div>
</section>
 
 
  )
}
 
export default ConfirmOrder