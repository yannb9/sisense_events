
const express = require('express');
const functions = require('./functions');
// const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();

app.use(express.json())
app.use(bodyParser.json())

let port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Send a POST request to /products/all to CREATE a new product
app.post('/events', (req, res) => {
  try {
    // console.log(req.body.event)
    const eventSend = functions.addEvent(req.body.event)
    res.json(eventSend)
  } catch (error) {
      res.status(500).json({
          message: error.message
      })
  }
})

app.listen(port, () => console.log(`Listening to port ${port}`))