fetch('http://localhost:8080/events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"event":'hello'})
    })
    .then(res=>res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));