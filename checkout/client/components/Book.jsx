import React from 'react';
import $ from 'jquery';
import Dates from './Dates.jsx';
import Guests from './Guests.jsx';
import PriceSummary from './PriceSummary.jsx';
import { ButtonSubmit, CenterText, BookStyle } from './styled/Styled.jsx';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // checkedIn: false,    // default value should be false
      // checkedOut: false,   // changed to true for testing
      checkinDate: null,
      checkoutDate: null,
      dropdown: 'none',     // can be 'guest', 'checkinCal', or 'checkoutCal'
      guests: {
        adults: 1,
        children: 0,
        infants: 0,
      },
    };
    this.displayDropdown = this.displayDropdown.bind(this);
    this.handleGuestCountChange = this.handleGuestCountChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  componentDidUpdate() {
    $('[data-toggle=tooltip]')
      .tooltip({
        trigger: 'focus',
      });
  }

  displayDropdown(item) {
    this.setState({
      dropdown: item,
    });
  }

  handleDateChange(startDate, endDate) {
    this.setState({
      checkinDate: startDate,
      checkoutDate: endDate,
    });
  }

  handleGuestCountChange(ageGroup, count) {
    const {adults, children, infants} = this.state.guests;
    const totalGuests = adults + children;
    if (this.state.guests[ageGroup] === 0 && count === -1) {
      return;
    }
    if (totalGuests >= 4 && count === 1 && ageGroup !== 'infants') {
      return;
    }
    if (infants >= 5 && ageGroup === 'infants' && count === 1) {
      return;
    }
    const guests = {...this.state.guests};
    guests[ageGroup] = this.state.guests[ageGroup] + count;
    this.setState({guests});
  }

  render() {
    const { nightlyPrice, cleaningFee, serviceFee, lastUpdated, bookedDates } = this.props.state;
    const { checkinDate, checkoutDate } = this.state;
    let nights = 0;
    if (checkinDate !== null && checkoutDate !== null) {
      nights = checkoutDate.diff(checkinDate, 'days');
    }
    return (
      <BookStyle>
        <form action="">
          <div className="override-line-height">
            <Dates lastUpdated={lastUpdated} bookedDates={bookedDates} handleDateChange={this.handleDateChange} />
            <Guests guests={this.state.guests} dropdown={this.state.dropdown} displayDropdown={this.displayDropdown} handleGuestCountChange={this.handleGuestCountChange} />
          </div>
          <div>
            {checkinDate !== null && checkoutDate !== null
              ? <PriceSummary nights={nights} nightlyPrice={nightlyPrice} cleaningFee={cleaningFee} serviceFee={serviceFee} /> : null}
          </div>
          <div>
            <ButtonSubmit type="submit">
              <span>Request to Book</span>
            </ButtonSubmit>
          </div>
          <div>
            <CenterText>You won't be charged yet</CenterText>
          </div>
        </form>
      </BookStyle>
    );
  }
}

export default Book;
