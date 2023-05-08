// chgallenge 
    // make use of the line arguments
    // make simple calculator, that makes use of these argumments
    // addition $ subtraction & multiplication

    // const num1 = 5
    // const num2 = 10
   // const add = num1 + num2
    // const subtract = num2 - num1
    // const multiply = num1 * num2
    // if()

    const add = () => x + y
    const subtract = () => x - y
    const multiply = () => x * y

    // const num = [2, 3, 4, 5, 6]
    const num1 = process.argv[5]
    const num2 = process.argv[2]

    const y = parseInt(num1)
    const x = parseInt(num2)

    console.log("welcome to my calculator app");

    if( x && y){
        console.log(`addition of ${num1} and ${num2}`);
        console.log(math.add(x, y));

        console.log(`subtraction of ${num1} and ${num2}`);
        console.log(math.subtract(x, y));

        console.log(`multiplication of ${num1} and ${num2}`);
        console.log(math.multiply(x, y));
    }else{
        console.log("input a number");
    }

    
    