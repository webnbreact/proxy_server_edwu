import React from 'react';
import HostResponse from './HostResponse.jsx';
import { AvatarImage, FlagStyle, FlexContainer_Row, FlexContainer_Row_SpaceBetween, ReviewContainer, Divider , Byline} from './Styles.js'; 

const Review = (props) => {

  const hasHostResponse = props.review.has_host_response; // 0 false, 1 true
  const flag = <i className="fas fa-flag" />;

  const basicRender = (
    <ReviewContainer>
      <FlexContainer_Row_SpaceBetween>
        <FlexContainer_Row>
          <div> 
            <AvatarImage className="reviewer_avatar" src={props.review.image_photo_path} />
          </div>
          <Byline className="reviewer_byline"><span><b>{props.review.first_name}</b></span><br></br><span>{props.review.review_date}</span></Byline>
        </FlexContainer_Row>
        <FlagStyle>
          {flag}
        </FlagStyle>
      </FlexContainer_Row_SpaceBetween>
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
      <ReviewContainer>
        {basicRender}
        <Divider />
      </ReviewContainer>
    )

  }
}

export default Review;