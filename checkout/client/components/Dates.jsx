import React from 'react';
import moment from 'moment';
import { BoldText, BoxWrapper, TimeAgoStyle } from './styled/Styled.jsx';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import './styled/react_dates_overrides.css';

class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      datesCompleted: false,
      focusedInput: null,
      unavailableDays: [],
    };
    this.isDayBlocked = this.isDayBlocked.bind(this);
  }

  componentDidUpdate() {
    const { bookedDates } = this.props;
    const unavailableDays = [];
    if (this.state.unavailableDays.length === 0) {
      for (let i = 0; i < bookedDates.length; i += 1) {
        let startDay = moment(bookedDates[i].check_in);
        let endDay = moment(bookedDates[i].check_out);
        for (let currDay = startDay; currDay.isBefore(endDay); currDay.add(1, 'day')) {
          unavailableDays.push(currDay.format());
        }
      }
      this.setState({ unavailableDays });
    }
    const { startDate, endDate, datesCompleted } = this.state;
    if (startDate !== null && endDate !== null && !datesCompleted) {
      this.setState({ datesCompleted: true }, () => {
        this.props.handleDateChange(startDate, endDate);
      });
    }
    if (startDate === null && endDate === null && datesCompleted) {
      this.setState( { datesCompleted: false }, () => {
        this.props.handleDateChange(null, null);
      });
    }
  }

  isDayBlocked(day) {
    return this.state.unavailableDays.some((unavailableDay) => {
      return moment(unavailableDay).isSame(day, 'day');
    });
  }

  render() {
    const timeAgo = moment(this.props.lastUpdated).fromNow();
    return (
      <div>
        <div style={{ marginBottom: '5px' }}>
          <BoldText>Dates</BoldText>
        </div>
        <BoxWrapper>
          <DateRangePicker
            startDateId="checkinDate"
            endDateId="checkoutDate"
            startDatePlaceholderText="Check in"
            endDatePlaceholderText="Check out"
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            numberOfMonths={1}
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
            focusedInput={this.state.focusedInput}
            onFocusChange={focusedInput => this.setState({ focusedInput })}
            readOnly={true}
            showClearDates={true}
            noBorder={true}
            customCloseIcon={<i className="far fa-calendar-times clear-cal" />}
            renderCalendarInfo={() => (<TimeAgoStyle>Updated {timeAgo}</TimeAgoStyle>)}
            isDayBlocked={this.isDayBlocked}
          />
        </BoxWrapper>
      </div>
    );
  }
}

export default Dates;
