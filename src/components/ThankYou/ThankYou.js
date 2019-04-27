import React, { Component } from 'react'

export default class ThankYou extends Component {
  render() {
    return (
      <div className="container">
        <div class="alert alert-dismissible alert-success">
          <button class="close" type="button" data-dismiss="alert">&times;</button>
          <strong>Thank You!</strong> We will get back to you as soon as possible! <a class="alert-link" >Your business is very important to us!</a>.
        </div>
      </div>
    )
  }
}
