const { createReadStream } = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('./content/big.txt', {highWaterMark: 90000, encoding: 'utf-8'})
// if encoding is removed, we have then the buffer i.e reading the data in chunks
stream.on('data', (result) => {
  console.log(result)
})
stream.on('error', (err) => console.log(err))