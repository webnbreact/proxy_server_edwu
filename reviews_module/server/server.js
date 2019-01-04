const express = require('express');
const port = 3000;
const database = require('../database/database.js');
const path = require('path');
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();

app.use(bodyParser.json())
app.use(cors())

app.use(express.static(path.join(__dirname + '/../client/dist')));

app.get('/rooms/:roomId/hostDetails', (req, res) => {
    
  const roomId = req.params.roomId;
  
    database.getHostDetailsByRoomId(roomId, (err, results) => {
      if(err) {
        res.sendStatus(501);
      } else {
        res.send(results);
      }
    })
})

app.get('/rooms/:roomId/reviews', (req, res) => {
    
  const roomId = req.params.roomId;
  
    database.getReviewsByRoomId(roomId, (err, results) => {
      if(err) {
        res.sendStatus(501);
      } else {
        res.send(results);
      }
    })
})

app.get('/rooms/:roomId/stars', (req, res) => {
  
  const roomId = req.params.roomId;
  database.getAverageStarsByRoomId(roomId, (err, results) => {
    if(err) {
      res.sendStatus(501);
    } else {
      res.send(results);
    }
  })
})

app.get('/rooms/:roomId/query', (req, res) => {

    const roomId = req.params.roomId;
    const queryTerm = req.query.queryTerm;
    database.getReviewsByRoomIdAndQueryTerm(roomId, queryTerm, (err, results) => {
      if(err) {
        res.sendStatus(501);
      } else {
        res.send(results);
      }
    })

})

app.listen(port, () => console.log(`listening on port ${port}`));