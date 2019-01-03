const mysql = require('mysql');
const faker = require('faker');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'booking',
});

const roomsQuery = 'INSERT INTO rooms (nightly_price, past_week_views, cleaning_fee, \
  service_fee, last_updated, review_count, avg_rating) VALUES (?, ?, ?, ?, ?, ?, ?)';
const bookingsQuery = 'INSERT INTO bookings (room_id, check_in, check_out, adults, \
  children, infants, blackout) \
  SELECT ?, ?, ?, ?, ?, ?, ? \
  WHERE NOT EXISTS (SELECT room_id FROM bookings \
    WHERE room_id=? AND (? BETWEEN check_in and check_out) \
    OR (? BETWEEN check_in and check_out))';

const roomsPromises = [];
for (let i = 0; i < 100; i += 1) {
  const roomsPromise = new Promise((resolve, reject) => {
    connection.query(roomsQuery, [faker.finance.amount(50, 500, 0), faker.random.number(1000),
      faker.finance.amount(0, 100, 0), faker.finance.amount(0, 8, 20), faker.date.past(0.15),
      faker.random.number(400), faker.random.number({ min: 1, max: 10 })], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
  roomsPromises.push(roomsPromise);
}

Promise.all(roomsPromises)
  .then(() => {
    console.log('Rooms successfully added to db');
    const bookingsPromises = [];
    let roomId = 1;
    while (roomId <= 100) {
      const bookingsPerRoom = faker.random.number({ min: 400, max: 700 });
      for (let i = 0; i < bookingsPerRoom; i += 1) {
        const checkInDate = faker.date.between('2019-01-01', '2019-12-31');
        const checkOutDate = faker.date.future((14 / 365), checkInDate);
        const bookingsPromise = new Promise((resolve, reject) => {
          connection.query(bookingsQuery, [roomId, checkInDate, checkOutDate, faker.random.number({ min: 1, max: 3 }),
            faker.random.number(2), faker.random.objectElement({ one: 0, two: 0, three: 1 }), false, roomId,
            checkInDate, checkOutDate], (err, results) => {
            if (err) {
              reject(err);
            } else {
              resolve(results);
            }
          });
        });
        bookingsPromises.push(bookingsPromise);
      }

      const blackoutsPerRoom = faker.random.number({ min: 500, max: 1000 });
      for (let i = 0; i < blackoutsPerRoom; i += 1) {
        const checkInDate = faker.date.between('2018-12-01', '2019-12-31');
        const checkOutDate = faker.date.future((7 / 365), checkInDate);
        const bookingsPromise = new Promise((resolve, reject) => {
          connection.query(bookingsQuery, [roomId, checkInDate, checkOutDate, 0, 0, 0, true,
            roomId, checkInDate, checkOutDate], (err, results) => {
            if (err) {
              reject(err);
            } else {
              resolve(results);
            }
          });
        });
        bookingsPromises.push(bookingsPromise);
      }

      if (roomId === 100) {
        console.log('Bookings successfully added to db');
      }
      roomId += 1;
    }

    Promise.all(bookingsPromises).then(() => {
      connection.end();
    });
  });
