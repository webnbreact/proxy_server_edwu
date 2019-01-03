const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// serving html dynamically
app.use('/rooms/:roomId', express.static(path.join(__dirname + '/public')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});