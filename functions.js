const fs = require('fs');

function generateItemID() {
  return Math.floor(Math.random() * 90000) + 10000;
}

function save(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile('events.json', JSON.stringify(data, null, 2), (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

async function addEvent(newEvent) {
    const json = await getAllEventsData();
    // newEvent.id = generateItemID();
    json.events.push({id: generateItemID(), event:newEvent})
    await save(json);
    return newEvent;
  }

  function getAllEventsData() {
    return new Promise((resolve, reject) => {
      fs.readFile('events.json', 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          const json = JSON.parse(data);
          resolve(json);
        }
      });
    })
  }


  module.exports = {
    getAllEventsData,
    addEvent
  }