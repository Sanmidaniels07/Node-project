// npm - global command, comes with node
// npm --version
// local dependency - use it only in this particular project
// npm i <packagename>

// global dependency - use it in any project
// npm install -g <packagename>
// sudo npm install -g <packagename> (mac)

// package.json -manifest file (stores important info about project/package
// npm init (step by step, press enter to skip)
// npm init -y (everything default)


const _= require('lodash') // convention to use packages

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items) // a method in lodash
console.log(newItems);
console.log('hello people');