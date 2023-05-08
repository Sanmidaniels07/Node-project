// started operating system process

console.log('first');
setTimeout(() =>{
    console.log('second');
}, 0)
console.log('third');
// completed and exited operating system process

// here the the setTimeout is asychronous and as
// such will only executed when the first and third has finished running
// hence it is offloaded