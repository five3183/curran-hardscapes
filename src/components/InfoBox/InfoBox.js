import React, { Component } from 'react'
import './InfoBox.css'

export default class InfoBox extends Component {
  render() {
    return (
      <div className="container-fluid p-5">
        <div className="row align-items-center">
          <div className="col">
            <div className="row align-items-center justify-content-center">
              <a href="#"><h3>Request Free Estimate</h3></a>
            </div>
            {/* <h2>Links</h2>
            <ul className="list-group">
              <li className="list-group-item d-flex">
                <a href="#"><span>About</span></a>
              </li>
              <li className="list-group-item d-flex">
                <a href="#"><span>Services</span></a>
              </li>
              <li className="list-group-item d-flex">
                <a href="#"><span>Portfolio</span></a>
              </li>
              <li className="list-group-item d-flex">
                <a href="#"><span>Contact Us</span></a>
              </li>
            </ul> */}
          </div>
          <div className="col">
            {/* <div className="row align-items-center justify-content-center">
              <a href="#"><h2>Request Free Estimate</h2></a>
            </div> */}
          </div>
          <div className="col">
            <h2>Contact Info</h2>
            <ul className="list-group">
              <li className="list-group-item d-flex">
                <i className="fas fa-phone mr-2"></i>
                <span>(570) 540-6873</span>
              </li>
              <li className="list-group-item d-flex">
                <i className="fas fa-map-marker-alt mr-2"></i>
                <span>65 W. South Street Nanticoke, PA 18634</span>
              </li>
              <li className="list-group-item d-flex">
                <i className="far fa-envelope mr-2"></i>
                <span>cwddwc2486@gmail.com</span>
              </li>
              <li className="list-group-item d-flex">
                <i class="fab fa-facebook-square mr-2"></i>
                <a href="https://www.facebook.com/Curranshardscapesandmasonry/"><span>Like us on Facebook!</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
     
    )
  }
}
