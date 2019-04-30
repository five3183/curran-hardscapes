import React, { Component } from 'react'

export default class ReviewUs extends Component {
  render() {
    return (
      <div className="container mt-3">
        <h1>Send Us A Review!</h1>
        <form>
          <div className="form-group">
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="customerFirstName"></label>
                <input className="form-control form-control-lg" id="customerFirstName" type="text" placeholder="First Name"></input>
              </div>
              <div className="col-md-6">
                <label htmlFor="customerLastName"></label>
                <input className="form-control form-control-lg" id="customerLastName" type="text" placeholder="Last Name"></input>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-8">
              <label htmlFor="customerPhoto">Please Include a photo of the worked completed</label>
              <input type="file" class="form-control-file" id="customerPhoto" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <label htmlFor="custReview"></label>
                <h3>How did we do?</h3>
                <textarea className="form-control" id="custReview" rows="7"></textarea>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mt-3 text-right">
                <button className="btn btn-outline-info" type="button">Send Request</button>
              </div>
            </div>
            
          </div>
        </form>
      </div>
    )
  }
}
