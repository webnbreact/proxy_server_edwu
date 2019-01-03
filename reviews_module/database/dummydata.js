const database = require('./database.js')
const faker = require('faker');

/////////Configurations/////////

var NUM_OF_USERS = 300;
var NUM_OF_ROOMS = 100;
var NUM_OF_MESSAGES = 3000;

var usersQueryStr = `INSERT INTO users (first_name, last_name, image_photo_path) VALUES (?, ?, ?);`;
var usersParams = ['first_name', 'last_name', 'image_photo_path'];

var roomsQueryStr = `INSERT INTO rooms (name, host_id) VALUES (?, ?);`;
var roomsParams = ['name', 'host_id'];

var reviewsQueryStr = `INSERT INTO reviews (reviewer_id, room_id, review_date, review_text, review_is_english, review_text_eng, has_host_response, host_reply_text, stars_accuracy, stars_communication, stars_location, stars_checkin, stars_cleanliness, stars_value) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
var reviewsParams = ['reviewer_id', 'room_id', 'review_date', 'review_text', 'review_is_english', 'review_text_eng', 'has_host_response', 'host_reply_text', 'stars_accuracy', 'stars_communication', 'stars_location', 'stars_checkin', 'stars_cleanliness', 'stars_value'];

////////Helper Functions///////

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const getRandomBoolean = ()=> {
  return Math.round((Math.random() * 1) + 0) === 0;
}

///////Table Generators/////////

const createUsersTableData = () => {
  var dummyData = [];
  for (var i = 0; i < NUM_OF_USERS; i++) {
    dummyData.push({ 
      first_name: faker.name.firstName(), 
      last_name: faker.name.lastName(), 
      image_photo_path: faker.image.avatar(),
    });
  }
  return dummyData; 
}

var createRoomsTableData = () => {
  var dummyData = [];
  for (var i = 0; i < NUM_OF_ROOMS; i++) {
    dummyData.push({
      name: faker.lorem.words(),
      host_id: getRandomInt(NUM_OF_USERS), 
    })
  }
  return dummyData;
}

var createReviewsTableData = () => {
  var dummyData = [];
  for (var i = 0; i < NUM_OF_MESSAGES; i++) {
    dummyData.push({
      reviewer_id: getRandomInt(NUM_OF_USERS),
      room_id: getRandomInt(NUM_OF_ROOMS),
      review_date: faker.date.past(),
      review_text: faker.lorem.paragraph(),
      review_is_english: getRandomBoolean(),
      review_text_eng: faker.lorem.paragraph(), 
      has_host_response: getRandomBoolean(),
      host_reply_text: faker.lorem.paragraph(), 
      stars_accuracy: getRandomInt(5), 
      stars_communication: getRandomInt(5),
      stars_location: getRandomInt(5),
      stars_checkin: getRandomInt(5),
      stars_cleanliness: getRandomInt(5),
      stars_value: getRandomInt(5),
    })
  }
  return dummyData;
}

var seedTable = (tableGeneratorFunc, queryStr, params) => {
  var usersDummyData = tableGeneratorFunc();

  usersDummyData.forEach((row) => {
    var rowParams = []
    params.forEach((string) => {
      rowParams.push(row[string]);
    })
    database.connection.query(queryStr, rowParams, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log(results)
      }
    })
  })
}

seedTable(createUsersTableData, usersQueryStr, usersParams);
seedTable(createRoomsTableData, roomsQueryStr, roomsParams);
seedTable(createReviewsTableData, reviewsQueryStr, reviewsParams);

