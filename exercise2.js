for (let n = 1; n <= 100; n++) {
    let puke = "";
        if(n % 3 === 0) puke += "Fizz";
        if(n % 5 === 0) puke += "Buzz";
    console.log(puke || n);
    }
