const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { getRoomBookingData } = require('./controllers.js');
const cors = require('cors');

const app = express();
app.use(cors())

const mainPagePath = path.join(__dirname, '/../public');
app.use(express.static(mainPagePath));
app.use('/rooms/:id/', express.static(mainPagePath));
app.use(morgan('tiny'));

app.get('/rooms/:id/booking', (req, res) => {
  const roomId = req.params.id;
  getRoomBookingData(roomId)
    .then((roomInfo) => {
      res.send(roomInfo);
    }).catch((err) => {
      console.error(err);
      res.sendStatus(501);
    });
});

const port = 1337;
app.listen(port, () => console.log(`Server running on port ${port}`));
