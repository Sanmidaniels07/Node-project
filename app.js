var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res)  // the pipe method push from the readstream to writestream
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)