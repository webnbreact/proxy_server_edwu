import React from 'react';
import { FlexContainer_Row_SpaceBetween, StarStyle } from './Styles.js'; 

const Stars = (props) => {

  const star = <i className="fas fa-star" />;
  const halfStar = <i className="fas fa-star-half" />;

  const generateArrayOfStars = (average) => {
    let arrOfStars = [];
    for(var i = 1; i < average; i++) {
      arrOfStars.push(star);
    }
    if(average % 1 >= 0.75) {
      arrOfStars.push(star)
    }
    if(average % 1 > 0.25 && average % 1 < 0.75) {
      arrOfStars.push(halfStar);
    }
    return arrOfStars;
  }

  const starsAccuracy = generateArrayOfStars(props.stars.accuracy);
  const starsCommunication = generateArrayOfStars(props.stars.communication);
  const starsCleanliness = generateArrayOfStars(props.stars.cleanliness);
  const starsLocation = generateArrayOfStars(props.stars.location);
  const starsCheckin = generateArrayOfStars(props.stars.check_in);
  const starsValue = generateArrayOfStars(props.stars.value);

  return ( 
    <FlexContainer_Row_SpaceBetween>
      <div><span>Accuracy</span><br></br><span>Communication</span><br></br><span>Cleanliness</span></div>
      <div>
        <span>
        {starsAccuracy.map((star, index) => {
          return (
            <StarStyle key={index}>
              {star}
            </StarStyle> 
            )
          }
        )}  
        </span>   
        <br></br>
        <span>
        {starsCommunication.map((star, index) => {
          return (
            <StarStyle key={index}>
              {star}
            </StarStyle> 
            )
          }
        )}  
        </span>
        <br></br>
        <span>
        {starsCleanliness.map((star, index) => {
          return (
            <StarStyle key={index}>
              {star}
            </StarStyle> 
            )
          }
        )}      
        </span>
      </div>
      <div><span>Location</span><br></br><span>Check-in</span><br></br><span>Value</span></div>
      <div>
        <span>
        {starsLocation.map((star, index) => {
          return (
            <StarStyle key={index}>
              {star}
            </StarStyle> 
            )
          }
        )}  
        </span>   
        <br></br>
        <span>
        {starsCheckin.map((star, index) => {
          return (
            <StarStyle key={index}>
              {star}
            </StarStyle> 
            )
          }
        )}  
        </span>
        <br></br>
        <span>
        {starsValue.map((star, index) => {
          return (
            <StarStyle key={index}>
              {star}
            </StarStyle> 
            )
          }
        )}      
        </span>
      </div>
    </FlexContainer_Row_SpaceBetween>
  )

}

export default Stars;
