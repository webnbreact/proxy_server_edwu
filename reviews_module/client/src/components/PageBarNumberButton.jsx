import React from 'react';

const PageBarNumberButton = (props) => (
  <button onClick={() => {props.toggleCurrentPageReviews(props.beginningIndexForReviews)}}>{props.pageNum}</button>
)

export default PageBarNumberButton;