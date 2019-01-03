import React from 'react';
import PageBarNumberButton from './PageBarNumberButton.jsx';

const PageBar = (props) => {

  const pages = Math.ceil(props.visibleReviews.length / 7)
  const pageButtonsArray = [];
  {for(var i = 0; i < pages; i++) {
    pageButtonsArray.push(i + 1)
  }}

  const backButton = <button onClick={() => {props.toggleCurrentPageReviews(props.beginningIndexForCurrentPageReviews - 7)}} >previous page</button>
  const forwardButton = <button onClick={() => {props.toggleCurrentPageReviews(props.beginningIndexForCurrentPageReviews + 7)}} >next page</button>

  if(props.beginningIndexForCurrentPageReviews + 7 > props.visibleReviews.length) {
    return (
      <div>
        {backButton}
        {pageButtonsArray.map((pageNum, index) => {
          const beginningIndexForReviews = index * 7;
          return <PageBarNumberButton key={index} pageNum={pageNum} beginningIndexForReviews={beginningIndexForReviews} toggleCurrentPageReviews={props.toggleCurrentPageReviews} />
        })
        }
      </div>
    )
  }

  if(props.beginningIndexForCurrentPageReviews === 0) {
    return (
      <div>
        {pageButtonsArray.map((pageNum, index) => {
          const beginningIndexForReviews = index * 7;
          return <PageBarNumberButton key={index} pageNum={pageNum} beginningIndexForReviews={beginningIndexForReviews} toggleCurrentPageReviews={props.toggleCurrentPageReviews} />
        })
        }
        {forwardButton}
      </div>
    )
  }

  return (
    <div>
      {backButton}
      {pageButtonsArray.map((pageNum, index) => {
          const beginningIndexForReviews = index * 7;
          return <PageBarNumberButton key={index} pageNum={pageNum} beginningIndexForReviews={beginningIndexForReviews} toggleCurrentPageReviews={props.toggleCurrentPageReviews} />
        })
        }
      {forwardButton}
    </div>
  )
    
}

export default PageBar;

  // const pageButtons = (
  //   <div>
  //     {pageButtonsArray.map((pageNum, index) => {
  //       const beginningIndexForReviews = index * 7;
  //       return <PageBarNumberButton key={index} pageNum={pageNum} beginningIndexForReviews={beginningIndexForReviews} toggleCurrentPageReviews={props.toggleCurrentPageReviews} />
  //     })
  //     }
  //   </div>
  // )

// onClick of nextArrow or previousArrow button 
  // 

// onClick of number button 

// page 1
  // no previousPage
  // 1, 2, 3, ... , 22 , nextPage 

// page 2 
  // previousPage, 1, 2, 3, ..., 22, nextPage

// page 3 
  // previousPage, 1, 2, 3, 4, ...., 22, nextPage

// page 4
  // previousPage, 1, 2, 3, 4, 5, ..., 22, nextPage

// page 5, 
  // previousPage, 1, ..., 4, 5, 6, ..., 22, nextPage

// page 6
  // previousPage, 1, ..., 5, 6, 7, ..., 22, nextPage

// ...

// page 17
  // previousPage, 1, ..., 16, 17, 18, ..., 22 nextPage

// page 18 
  // previousPage, 1, ..., 17, 18, 19, ..., 22 nextPage

// page 19
  // previousPage, 1, ..., 18, 19, 20, 21, 22, nextPage

// page 20
  // previousPage, 1, ..., 19, 20, 21, 22, nextPage

// page 21
  // previousPage, 1, ..., 20, 21, 22, nextPage

// page 22 
  // previousPage, 1, ..., 20 21, 22
