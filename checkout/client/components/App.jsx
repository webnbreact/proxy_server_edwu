import React from 'react';
import Header from './Header.jsx';
import Book from './Book.jsx';
import HighViews from './HighViews.jsx';
import {
  GlobalStyle, Module, MainWrapper, FlagWidget, ButtonUnderline, Divider,
} from './styled/Styled.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomId: '',
      nightlyPrice: '',
      pastWeekViews: '',
      cleaningFee: '',
      serviceFee: '',
      lastUpdated: '',
      reviewCount: '',
      avgRating: '',
      bookedDates: [],
    };
  }

  componentDidMount() {
    const roomId = window.location.pathname.slice(7, -1);
    const randomRoomId = Math.ceil(Math.random() * 100);
    fetch(`http://localhost:1337/rooms/${roomId || randomRoomId}/booking`)
      .then((data) => {
        return data.json();
      }).then((roomInfo) => {
        const { room_id, nightly_price, past_week_views, cleaning_fee, service_fee, last_updated, review_count, avg_rating } = roomInfo[0];
        const bookedDates = [];
        for (let i = 0; i < roomInfo.length; i += 1) {
          const { check_in, check_out } = roomInfo[i];
          bookedDates.push({ check_in, check_out });
        }
        this.setState({
          roomId: room_id,
          nightlyPrice: nightly_price,
          pastWeekViews: past_week_views,
          cleaningFee: cleaning_fee,
          serviceFee: service_fee,
          lastUpdated: last_updated,
          reviewCount: review_count,
          avgRating: avg_rating,
          bookedDates: bookedDates,
        });
      }).catch((err) => { throw err; });
  }

  render() {
    let views = this.state.pastWeekViews;
    views = (views >= 500) ? '500+' : views;
    return (
      <MainWrapper>
        <GlobalStyle />
        <Module>
          <div>
            <div>
              <Header state={this.state} />
              <Divider />
              <Book state={this.state} />
            </div>
          </div>
          <div>
            {this.state.pastWeekViews > 150 ? <HighViews pastWeekViews={views} /> : null}
          </div>
        </Module>
        <FlagWidget>
          <ButtonUnderline>
            <i className="far fa-flag" />
            <span> Report this listing</span>
          </ButtonUnderline>
        </FlagWidget>
      </MainWrapper>
    );
  }
}

export default App;
