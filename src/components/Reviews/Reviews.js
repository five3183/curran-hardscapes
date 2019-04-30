import React, { Component } from 'react'
import Review from '../Review/Review'

export default class Reviews extends Component {
  state = {
    reviews: [
      {
        id: 1,
        name: 'Customer 1',
        body: 'OMG! YOU GUYS ARE DA BEST!',
        img: 'http://lorempixel.com/500/300/city'
      },
      {
        id: 2,
        name: 'Customer 2',
        body: 'Top Notch, What a deal!',
        img: 'http://lorempixel.com/500/300/city'
      }, 
      {
        id: 3,
        name: 'Customer 3',
        body: 'Speachless!',
        img: 'http://lorempixel.com/500/300/city'
      }
    ],
    // currentReview : this.reviews[0]
  }
  render() {
    const { reviews } = this.state
    // setTimeout(() => {
    //   Object.keys.apply(reviews).forEach(review => {
    //     this.setState({currentReview})
    //   });
    // }, 5000);
    return (
      <div>
        {reviews.map(review => (
          <Review 
            key={review.id}
            review={review}
          />
        ))}
      </div>
    )
  }
}