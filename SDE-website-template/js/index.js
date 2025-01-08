

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

fizzBuzz(100);