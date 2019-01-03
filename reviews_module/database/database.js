var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'airbnb'
});

connection.connect();

const getHostDetailsByRoomId = (roomid, callback) => {
  var queryStr = `SELECT DISTINCT a.first_name, a.image_photo_path, c.room_id
  FROM users a, rooms b, reviews c 
  WHERE c.room_id=${roomid} AND c.room_id=b.id AND a.id=b.host_id`;

  connection.query(queryStr, (err, results) => {
    if(err) {
      callback(err)
    } else {
      callback(null, results);
    }
  })
}

const getReviewsByRoomId = (roomid, callback) => {
  var queryStr = `SELECT users.first_name, users.image_photo_path, reviews.room_id, DATE_FORMAT(reviews.review_date, '%M, %Y') AS 'review_date', 
  reviews.review_text, reviews.review_is_english, reviews.review_text_eng, 
  reviews.has_host_response, reviews.host_reply_text 
  FROM reviews INNER JOIN users ON reviews.reviewer_id = users.id
  WHERE reviews.room_id=${roomid};`

  // Alternative query style 
  // var queryStr = `SELECT u.first_name, r.room_id, r.review_date, 
  // r.review_text, r.review_is_english, r.review_text_eng, r.has_host_response,
  // r.host_reply_text FROM users u, reviews r WHERE r.room_id=${roomid} AND u.id=r.reviewer_id;`;

  connection.query(queryStr, (err, results) => {
    if(err) {
      callback(err)
    } else {
      callback(null, results);
    }
  })
}

const getReviewsByRoomIdAndQueryTerm = (roomid, queryTerm, callback) => {
  var queryStr = `SELECT users.first_name, users.image_photo_path, reviews.room_id, DATE_FORMAT(reviews.review_date, '%M, %Y') AS 'review_date', 
  reviews.review_text, reviews.review_is_english, reviews.review_text_eng, reviews.has_host_response,
  reviews.host_reply_text 
  FROM reviews INNER JOIN users ON reviews.reviewer_id = users.id
  WHERE reviews.room_id=${roomid} AND reviews.review_text LIKE '%${queryTerm}%';`

  connection.query(queryStr, (err, results) => {
    if(err) {
      callback(err)
    } else {
      callback(null, results);
    }
  })
}

const getAverageStarsByRoomId = (roomid, callback) => {
  var queryStr = `SELECT AVG(stars_accuracy) "accuracy", AVG(stars_location) "location", 
    AVG(stars_communication) "communication", AVG(stars_checkin) "check_in", 
    AVG(stars_cleanliness) "cleanliness", AVG(stars_value) "value" FROM reviews WHERE room_id=${roomid}`;

  connection.query(queryStr, (err, results) => {
    if(err) {
      callback(err)
    } else {
      callback(null, results);
    }
  })
}

// connection.end();

module.exports = {
  connection,
  getHostDetailsByRoomId,
  getReviewsByRoomId,
  getReviewsByRoomIdAndQueryTerm,
  getAverageStarsByRoomId,
}
