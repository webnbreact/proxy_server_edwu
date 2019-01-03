import React from 'react';
import BlendedStars from './BlendedStars.jsx';
import SearchReviews from './SearchReviews.jsx';
import { FlexContainer_Row_SpaceBetween, Divider } from './Styles.js'; 

const TopBarContainer = (props) => {
  return (
    <FlexContainer_Row_SpaceBetween>
      <BlendedStars stars={props.stars} visibleReviews={props.visibleReviews}/>
      <SearchReviews getFilteredReviews={props.getFilteredReviews} />
    </FlexContainer_Row_SpaceBetween>
  )
}

export default TopBarContainer;