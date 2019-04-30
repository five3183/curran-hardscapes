import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Review extends Component {
  render() {
    const {name, body, img } = this.props.review
    return (
      <div className="container">
        <div className="card border-warning mb-3">
          <div className="card-header"><h2>Customer Review</h2></div>
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <div className="row align-items-center justify-content-center">
              <img src={img} alt="Completed Job" className="img-fluid"/>
            </div>
            <p className="card-text">{body}</p>
          </div>
        </div>
      </div>
    )
  }
}

Review.propTypes = {
  review:PropTypes.object.isRequired
}