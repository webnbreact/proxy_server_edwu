import React from 'react';
import {
  Divider, FlexBox, BoldText, Text, SlideDown,
} from './styled/Styled.jsx';

const HighViews = ({ pastWeekViews }) => (
  <SlideDown>
      <Divider style={{ margin: '20px 0' }} />
      <FlexBox style={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div style={{ marginLeft: '1px' }}>
          <BoldText style={{ fontSize: '14.5px' }}>
            This home is on people's minds.
          </BoldText>
          <Text>
            It's been viewed { pastWeekViews } times in the past
            <br />
            week.
          </Text>
        </div>
        <div style={{ fontSize: '2.25em', padding: '8px', textShadow: '#f0bb3d 1px 0 10px' }}>
          <i className="far fa-lightbulb" />
        </div>
      </FlexBox>
  </SlideDown>
);

export default HighViews;
