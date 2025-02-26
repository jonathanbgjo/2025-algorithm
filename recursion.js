//recusion practice
function factorial(n){
    if(n<= 1) return 1
    if(n==2) return 2

    return n*factorial(n-1);
}

// test cases for factorial
console.log(factorial(5)); // 120
console.log(factorial(8)); // 40320
console.log(factorial(10)); // 3628800
console.log(factorial(20)); // 2432902008176640000


function fib(n){
    if(n <= 2) return 1;
    // if(n == 2) return 1;

    return (fib(n-1) + fib(n-2))
}

//test cases for fib
console.log(fib(1)); // 1
console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(6)); // 8
console.log(fib(10)); // 55


function fibWithMemo(n){
    let memo = {0:0, 1:1, 2:1}
    if(memo[n]){
        return memo[n]
    }
    else{
        memo[n] = fibWithMemo(n-1) + fibWithMemo(n-2)
    }

    return memo[n]
}

// test cases for fib 
console.log(fibWithMemo(1)); // 1
console.log(fibWithMemo(2)); // 1
console.log(fibWithMemo(6)); // 8
console.log(fibWithMemo(10)); // 55