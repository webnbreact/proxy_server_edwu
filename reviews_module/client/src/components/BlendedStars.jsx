import React from 'react';
import { StarStyle } from './Styles.js'; 

const BlendedStars = (props) => {

  let blendedAvg = (props.stars.accuracy + props.stars.location + props.stars.communication + props.stars.check_in + props.stars.cleanliness + props.stars.value) / 6;
  let numberOfReviews = props.visibleReviews.length;

  const star = <i className="fas fa-star" />;
  const halfStar = <i className="fas fa-star-half" />;
  
  let totalStars = [];
  for(var i = 1; i < blendedAvg; i++) {
    totalStars.push(star);
  }
  if(blendedAvg % 1 >= 0.75) {
    totalStars.push(star)
  }
  if(blendedAvg % 1 > 0.25 && blendedAvg % 1 < 0.75) {
    totalStars.push(halfStar);
  }

  return (
    <div>
      <span><b>{numberOfReviews.toString()} Reviews</b></span>
      <span>
        {totalStars.map((star, index) => {
          return (
            <StarStyle key={index}>
              {star}
            </StarStyle> 
          )
        }
      )}
      </span>
    </div>
  )
}

export default BlendedStars;