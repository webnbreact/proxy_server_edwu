const db = require('../db/index.js');

const getRoomBookingData = (roomId) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT bookings.room_id, booking_id, nightly_price, past_week_views, cleaning_fee, service_fee, \
      last_updated, review_count, avg_rating, check_in, check_out, adults, children, infants, blackout FROM rooms \
      INNER JOIN bookings WHERE rooms.room_id = bookings.room_id AND bookings.room_id=?';
    db.query(query, [roomId], (err, roomInfo) => {
      if (err) {
        reject(err);
      } else {
        resolve(roomInfo);
      }
    });
  });
};

module.exports.getRoomBookingData = getRoomBookingData;
