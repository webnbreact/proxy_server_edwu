import React from 'react';
import { AvatarImage, FlexContainer_Row, HostResponseContainer } from './Styles.js'; 

const HostResponse = (props) => (
  <HostResponseContainer>
  <FlexContainer_Row>
    <div>
      <AvatarImage className="host_avatar" src={props.hostInformation.image_photo_path} />
    </div>
    <div className="host_response"><span><b>Response from {props.hostInformation.first_name}</b></span><br></br><span>{props.review.host_reply_text}</span></div>
  </FlexContainer_Row>
  </HostResponseContainer>
)

export default HostResponse;