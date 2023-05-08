const express = require('express')
const app = express()
const logger = require('./logger')
// req => middleware => res
app.use( logger) // logger is a middleware which app.use() helps to use across all routes
//api/home/about/products : the path api in the app.use works across all the routes and serve as the base url i.e. app.use('/api', logger)

app.get('/', (req, res) => {
  
  res.send('Home Page')
})

app.get('/about', (req, res) => {
  res.send('About Us')
})

app.get('/api/products', (req, res) => {
  
  res.send('products')
})

app.get('/api/items', (req, res) => {
  res.send('Items')
})


app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
})