const express = require('express')
const app = express()
const port = 3000

app.get('/microserviceonename', (req, res) => {
    const {firstname} = req.query;
    res.send('Hello ' + firstname );
})

app.get('/microservicetwoname', (req, res) => {
    const {lastname} = req.query;
  res.send('Hello ' + lastname);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})