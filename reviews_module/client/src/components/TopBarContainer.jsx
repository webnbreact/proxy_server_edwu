import React from 'react';
import BlendedStars from './BlendedStars.jsx';
import SearchReviews from './SearchReviews.jsx';
import { TopBarStyleContainer } from './Styles.js'; 

const TopBarContainer = (props) => {
  return (
    <TopBarStyleContainer>
      <BlendedStars stars={props.stars} visibleReviews={props.visibleReviews}/>
      <SearchReviews getFilteredReviews={props.getFilteredReviews} />
    </TopBarStyleContainer>
  )
}

export default TopBarContainer;