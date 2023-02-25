// file system can be done synchronously or asynchronously

const {readFileSync, writeFileSync} = require('fs')
console.log('start');
  // same as writing as const fs = require('fs)
  const first = readFileSync('./content/first.txt', 'utf8')
  const second = readFileSync('./content/second.txt', 'utf8')
  console.log(first, second);

  //creating a new file using writefilesync
writeFileSync('./content/result-sync.txt', 
`here is the result: ${first}, ${second}`,
{flag: 'a'}  // adding a flag overrides everything and create a new text
)
console.log('done with this task');
console.log('starting the next one');