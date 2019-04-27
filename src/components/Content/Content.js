import React, { Component } from 'react'
import './Content.css'

export default class Content extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div id="landing-image" class="jumbotron text-center">
          <h1 class="display-3">Nanticoke's Top Rated</h1>
          <h1 class="display-3">Masonry Service!</h1>
          <hr />
          <div className="row align-items-center justify-content-center mt-5">
            <button className="btn btn-success mr-3" type="button">Call (570) 540-6873</button>
            <button className="btn btn-info" type="button">Request Free Estimate</button>
          </div>
        </div>
        <div className="container">
          <h1>Carousel of reviews here?</h1>
        </div>
        <div className="container">
          <div class="row">
            <div class="col-12 col-md-8">
              <div id="about-card" class="card-body">
                <h4 class="card-title">About Us</h4>
                <hr />
                <p class="card-text">We are a family owned and operated small business serving the Greater Nanticoke Area. We offer unmatched quality at a reasonable price. We have the expertise to handle all your hardscape and masonry needs. No job too small! Call us or request a free estiamte today!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


{/* <div className="container bg-dark mb-5">
        <div className="row align-items-center justify-content-center mt-5">
          <h1>Nanticoke's Top Rated Masonry Service!</h1>
          <div class="row">
          <div class="col-12 col-md-8">
          <div id="about-card" class="card-body">
            <h4 class="card-title">About Us</h4>
            <hr />
            <p class="card-text">We are a family owned and operated small business serving the Greater Nanticoke Area. We offer unmatched quality at a reasonable price. We have the expertise to handle all your hardscape and masonry needs. No job too small! Call us or request a free estiamte today!</p>
          </div>
          </div>
          <div class="col-6 col-md-4">
          
          </div>
        </div>

          
        </div>
        <div className="row align-items-center justify-content-center mt-5">
          <button className="btn btn-outline-success mr-3" type="button">Call (570) 540-6873</button>
          <button className="btn btn-outline-info" type="button">Request Free Estimate</button>
        </div>
        
      </div> */}
