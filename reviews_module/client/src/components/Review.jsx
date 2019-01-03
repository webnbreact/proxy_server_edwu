import React from 'react';
import HostResponse from './HostResponse.jsx';
import { AvatarImage, FlexContainer_Row, ReviewContainer, Divider } from './Styles.js'; 

const Review = (props) => {

  const hasHostResponse = props.review.has_host_response; // 0 false, 1 true

  const basicRender = (
    <ReviewContainer>
    <FlexContainer_Row>
      <div> 
        <AvatarImage className="reviewer_avatar" src={props.review.image_photo_path} />
      </div>
      <div className="reviewer_byline"><span><b>{props.review.first_name}</b></span><br></br><span>{props.review.review_date}</span></div>
    </FlexContainer_Row>
    <div className="review_text">{props.review.review_text}</div>
    </ReviewContainer>
  )

  if(hasHostResponse) {
    return (
      <ReviewContainer>
      {basicRender}
      <HostResponse hostInformation={props.hostInformation} review={props.review} />
      <Divider />
      </ReviewContainer>
    )
  }
  
  if(!hasHostResponse) {
    return (
      <div>
        {basicRender}
        <Divider />
      </div>
    )

  }
}

export default Review;