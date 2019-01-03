import React from 'react';
import Reviews from './Reviews.jsx';
import PageBar from './PageBar.jsx';

const ReviewsContainer = (props) => {
  return (
    <div>
    <Reviews hostInformation={props.hostInformation} currentPageReviews={props.currentPageReviews} stars={props.stars} />
    <PageBar beginningIndexForCurrentPageReviews={props.beginningIndexForCurrentPageReviews} toggleCurrentPageReviews={props.toggleCurrentPageReviews} visibleReviews={props.visibleReviews} />
    </div>
  )
}

export default ReviewsContainer;