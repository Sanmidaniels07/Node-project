const {readFile} = require('fs');
const { result } = require('lodash');

console.log('started a first task');
// CHECK FILE PATH!!!
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(result);
    console.log('completed first task');
})
console.log('starting next task');

// here the first task started while going to the next task during which the
// the readfile was loading the path after which the
// callback was executed