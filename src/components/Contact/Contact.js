import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className="container">
      <h1>Contact Us</h1>
      <hr />
        <form>
          <div className="form-group">
            <div className="row">
              <div className="col-md-6">
                <label for="customerFirstName"></label>
                <input className="form-control form-control-lg" id="customerFirstName" type="text" placeholder="First Name"></input>
              </div>
              <div className="col-md-6">
                <label for="customerLastName"></label>
                <input className="form-control form-control-lg" id="customerLastName" type="text" placeholder="Last Name"></input>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <label for="customerEmail"></label>
                <input className="form-control form-control-lg" id="customerEmail" type="text" placeholder="Email Address"></input>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <label for="customerPhone"></label>
                <input className="form-control form-control-lg" id="customerPhone" type="text" placeholder="Phone Number"></input>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <label for="estimateRequest"></label>
                <h3>What's the Project?</h3>
                <textarea class="form-control" id="estimateRequest" rows="7"></textarea>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mt-3 text-right">
                <button class="btn btn-outline-info" type="button">Send Request</button>
              </div>
            </div>
            
          </div>
        </form>
      </div>
    )
  }
}
