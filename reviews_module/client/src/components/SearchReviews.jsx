import React from 'react';

class SearchReviews extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  handleChange(e) {
    this.setState({
      searchTerm: e.target.value,
    });
  }

  keyPress(e) {
    if(e.keyCode === 13) {
      this.props.getFilteredReviews(this.state.searchTerm);
      this.setState({
        searchTerm: '',
      })
    }
  }

  render() {
    return(
      <div>
        <input type="search" onKeyDown={this.keyPress} onChange={this.handleChange}></input>
      </div>
    )
  }

}

export default SearchReviews;