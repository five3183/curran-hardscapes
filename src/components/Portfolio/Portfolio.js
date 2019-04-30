import React, { Component } from 'react'
import beforeImage from '../../assets/images/before.jpg'
import afterImage from '../../assets/images/after.jpg'

export default class Portfolio extends Component {
  render() {
    return (
      <div className="container">
        <h2>Check out these before and after pictures!</h2>
        <br />
        <br />
        <div className="row justify-content-center">
          <div className="col-6">
          <h3>Before</h3>
            <img src={beforeImage} className="img-fluid float-left dis-img" alt="Responsive image" />
          </div>
          <div className="col-6">
          <h3>After</h3>
          <img src={afterImage} className="img-fluid float-left dis-img" alt="Responsive image" />
          </div>
        </div>
      </div>
    )
  }
}
