import React from 'react';
import Review from './Review.jsx'

const Reviews = (props) => {

  return (
    <div>
      {props.currentPageReviews.map((review, index) => {
        return <Review key={index} hostInformation={props.hostInformation} review={review}/>
      })
      }
    </div>
  ) 
}

export default Reviews;