import React from 'react';
import TopBarContainer from './TopBarContainer.jsx';
import ReviewsContainer from './ReviewsContainer.jsx';
import Stars from './Stars.jsx';
import FilterMessage from './FilterMessage.jsx';
import { AppContainer, Divider } from './Styles.js'; 

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hostInformation: {},
      isFiltered: false,
      currentSearchTerm: '',
      visibleReviews: [],
      currentPageReviews: [],
      beginningIndexForCurrentPageReviews: 0,
      stars: {},
    }
    this.getAllReviews = this.getAllReviews.bind(this);
    this.getHostInformation = this.getHostInformation.bind(this);
    this.getStars = this.getStars.bind(this);
    this.getFilteredReviews = this.getFilteredReviews.bind(this);
    this.toggleCurrentPageReviews = this.toggleCurrentPageReviews.bind(this);
  }

  componentDidMount() {
    this.getAllReviews();
    this.getHostInformation();
    this.getStars();
  }

  getAllReviews() {
    const roomId = window.location.pathname.slice(7, -1);
    $.ajax({
      method: 'GET',
      url: `http://localhost:3000/rooms/${roomId}/reviews`,
      success: (data) => {
        this.setState({
          isFiltered: false,
          currentSearchTerm: '',
          visibleReviews: data,
          currentPageReviews: data.slice(0,7),
          beginningIndexForCurrentPageReviews: 0,
        })
      }
    })
  }

  getHostInformation() {
    const roomId = window.location.pathname.slice(7, -1);
    $.ajax({
      method: 'GET',
      url: `http://localhost:3000/rooms/${roomId}/hostDetails`,
      success: (data) => {
        this.setState({
          hostInformation: data[0],
        })
      }
    })
  }

  getStars() {
    const roomId = window.location.pathname.slice(7, -1);
    $.ajax({
      method: 'GET',
      url: `http://localhost:3000/rooms/${roomId}/stars`,
      success: (data) => {
        this.setState({
          stars: data[0],
        })
      }
    })
  }

  getFilteredReviews(searchTerm) {
    $.ajax({
      method: 'GET',
      url: `http://localhost:3000/rooms/${this.state.hostInformation.room_id}/query/?queryTerm=${searchTerm}`,
      success: (data) => {
        this.setState({
          isFiltered: true,
          currentSearchTerm: searchTerm,
          visibleReviews: data,
          beginningIndexForCurrentPageReviews: 0,
          currentPageReviews: data.slice(0, 7),
        })
      }
    })
  }

  toggleCurrentPageReviews(newBeginningIndex) {
    if(newBeginningIndex >= 0  && newBeginningIndex < this.state.visibleReviews.length) {
      const newEndIndex = newBeginningIndex + 7;
      const newBeginningIndexForCurrentPageReviews = newBeginningIndex;
      this.setState({
        beginningIndexForCurrentPageReviews: newBeginningIndexForCurrentPageReviews,
        currentPageReviews: this.state.visibleReviews.slice(newBeginningIndex, newEndIndex),
      })
    }
  }

  render() {

    const allReviewsView = (
      <AppContainer>
        <div><Divider /></div>
        <TopBarContainer getStars={this.getStars} stars={this.state.stars} visibleReviews={this.state.visibleReviews} getFilteredReviews={this.getFilteredReviews} />
        <div><Divider /></div>
        <Stars stars={this.state.stars} />
        <ReviewsContainer hostInformation={this.state.hostInformation} currentPageReviews={this.state.currentPageReviews} stars={this.state.stars} 
        beginningIndexForCurrentPageReviews={this.state.beginningIndexForCurrentPageReviews} toggleCurrentPageReviews={this.toggleCurrentPageReviews} visibleReviews={this.state.visibleReviews}
        />
      </AppContainer>
    )

    const filteredView = (
      <AppContainer>
        <div><Divider /></div>
        <TopBarContainer stars={this.state.stars} visibleReviews={this.state.visibleReviews} getFilteredReviews={this.getFilteredReviews} />
        <div><Divider /></div>
        <FilterMessage getAllReviews={this.getAllReviews} currentSearchTerm={this.state.currentSearchTerm} visibleReviews={this.state.visibleReviews} />
        <div><Divider /></div>
        <ReviewsContainer hostInformation={this.state.hostInformation} currentPageReviews={this.state.currentPageReviews} stars={this.state.stars} 
        beginningIndexForCurrentPageReviews={this.state.beginningIndexForCurrentPageReviews} toggleCurrentPageReviews={this.toggleCurrentPageReviews} visibleReviews={this.state.visibleReviews}
        />
      </AppContainer>
    )

    return (
      <div>
        {this.state.isFiltered ? filteredView : allReviewsView}
      </div>
    )
  }
}

export default App;




