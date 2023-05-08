const express = require ('express')
const path = require('path')


const app = express();   


// setup static and middleware
// app.use is used to set up the middleware
app.use(express.static('./public')) // this helps to access all files in the case of static assets

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../02-Express-js/navbar-app/index.html' ))
})

app.all('*', (req, res) => {
    res.status(404).send('Resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000...');
})
