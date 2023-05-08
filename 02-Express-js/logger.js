const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next() // the middleware is sent to next
    // res.send('Testing') // this terminates the middleware as it is not sent to the next middleware
  
  }

  module.exports = logger