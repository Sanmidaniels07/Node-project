const express = require ('express')
const app = express()  //invoking express after require it

app.get('/', (req, res) =>{
  console.log('User hit the seerver');
res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
  console.log('about page is running');
  res.status(200).send('About Page')
})

app.all('*', (req, res) => {
  res.status(404).send('<h1>Resource not found</h1>')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000');
})
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen














