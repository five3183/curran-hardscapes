import React, { Component } from 'react'
import './Content.css'
import { Link } from 'react-router-dom'

import Reviews from '../Reviews/Reviews'
import InfoBox from '../InfoBox/InfoBox'

export default class Content extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div id="landing-image" className="jumbotron text-center">
          <h1 className="display-3">Nanticoke's Top Rated</h1>
          <h1 className="display-3">Masonry Service!</h1>
          <hr />
          <div className="row align-items-center justify-content-center mt-5">
            <form action="tel:5705406873"><button type="submit" className="btn btn-success mr-3">Call (570) 540-6873</button></form>
            <Link to="/contact">
              <button className="btn btn-info" type="button">Request Free Estimate</button>
            </Link>
          </div>
        </div>
        <Reviews />
        <InfoBox />
      </div>
    )
  }
}