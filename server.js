
const express = require('express');
const bodyParser = require('body-parser')
const app = express();


app.use(express.json())
app.use(bodyParser.json())

let port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/events', (req, res) => {
    try {
        const eventName = res.json({event_name: req.body.event})
        console.log(eventName)
    } catch (error) {
        
    }
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});