

/* heads or tails game */

function HeadsOrTails() {
    let x = Math.floor(Math.random() * 100);
    console.log(x);
    let h_or_t = '';
    x > 50 ? h_or_t = 'heads' : h_or_t = 'tails';
    return h_or_t;
}

console.log(HeadsOrTails());

function fizzBuzz(n){
    for (i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else if (i % 3 === 0 ) {
            console.log('Fizz');
        } else {
            console.log(i);
        }
        // console.log(`number : ${i}`);
    }
}

// fizzBuzz(100);

let result = 0;

function exerciseOne(n) {
    if (n === 0 || n === undefined) {
        return `Invalid Number`;
    } else if (n < 0) {
        return `${n} is a negative number`;
    } else if (n % 2 === 0) {
        return `${n} is an even number`;
    } else if (n % 2 !== 0) {
        return `${n} is an odd number`;
    }
}

console.log(exerciseOne(Math.round(Math.random() * 100)));
console.log(exerciseOne(-100));
