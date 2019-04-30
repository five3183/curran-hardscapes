import React, { Component } from 'react'
import './NotFound.css'
export default class NotFound extends Component {
  render() {
    return (
      <div className="container">
          <div id="not-found" className="row justify-content-center mt-5 img-fluid">
            <h1 className="message">Sorry, That Page Does Not Exist!</h1>
            <hr />
          </div>
      </div>
    )
  }
}
