import React from 'react';
import { FlexContainer_Row_SpaceBetween, TextButton } from './Styles.js';

const FilterMessage = (props) => {

  const getAllReviews = (
    <TextButton onClick={props.getAllReviews} >Back to all reviews</TextButton>
  )

  if(props.visibleReviews.length === 0) {
    return (
      <FlexContainer_Row_SpaceBetween>
        <div>None of our guests have mentioned "<b>{props.currentSearchTerm}</b>"</div>
        {getAllReviews}
      </FlexContainer_Row_SpaceBetween>
    )
  }

  if(props.visibleReviews.length === 1) {
    return (
      <FlexContainer_Row_SpaceBetween>
        <div>{props.visibleReviews.length.toString()} guest have mentioned "<b>{props.currentSearchTerm}</b>"</div>
        {getAllReviews}
      </FlexContainer_Row_SpaceBetween>
    )
  }

  if(props.visibleReviews.length > 1) {
    return (
      <FlexContainer_Row_SpaceBetween>
        <div>{props.visibleReviews.length.toString()} guests have mentioned "<b>{props.currentSearchTerm}</b>"</div>
        {getAllReviews}
      </FlexContainer_Row_SpaceBetween>
    )
  }

}

export default FilterMessage;