import React from 'react';
import { TextButton} from './Styles.js'; 

const PageBarNumberButton = (props) => (
  <TextButton onClick={() => {props.toggleCurrentPageReviews(props.beginningIndexForReviews)}}>{props.pageNum}</TextButton>
)

export default PageBarNumberButton;