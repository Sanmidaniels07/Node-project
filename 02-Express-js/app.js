const express = require('express')
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')

// static assets
app.use(express.static('./methods-public'))

// PARSE FROM DATA
app.use(express.urlencoded({ extended: false }))

// parse json
app.use(express.json())

app.use('/api/people', people)  // this is the base url of the routes in people.js after which we remove the url from the people.js

app.use('/login', auth)  // second base url


app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
})