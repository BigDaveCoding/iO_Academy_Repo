

/* heads or tails game */

function HeadsOrTails() {
    let x = Math.floor(Math.random() * 100);
    console.log(x);
    let h_or_t = '';
    x > 50 ? h_or_t = 'heads' : h_or_t = 'tails';
    return h_or_t;
}

// console.log(HeadsOrTails());

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

function exerciseOne(n = 0) {
    let res
    if (n === 0) {
        res = 'Invalid Number';
    } else if (n < 0) {
        res = `${n} is a negative number`;
    } else if (n % 2 === 0) {
        res = `${n} is an even number`;
    } else if (n % 2 !== 0) {
        res = `${n} is an odd number`;
    }
    return res;
}

// console.log(exerciseOne(Math.round(Math.random() * 1000)));
// console.log(exerciseOne(0));


function rockPaperScissors(){
    let result
    let x = Math.floor(Math.random() * 3);
    const choices = ['rock', 'paper', 'scissors'];
    let cpu_choice = choices[x];

    let player_choice

    while (true) {
        player_choice = prompt('rock, paper or scissors: ');
        if (choices.includes(player_choice)) {
            console.log(`player choice is: ${player_choice}`);
            break;
        } else {
            console.log('Invalid choice');
        }
    }

    console.log(`computer chooses: ${cpu_choice}`);

    if (player_choice.toLowerCase() == cpu_choice.toLowerCase()) {
        result = 'It\'s a tie';
    } else if (player_choice.toLowerCase() === 'rock' && cpu_choice.toLowerCase() === 'scissors') {
        result = 'Player wins';
    } else if (player_choice.toLowerCase() === 'scissors' && cpu_choice.toLowerCase() === 'paper') {
        result = 'Player wins';
    } else if (player_choice.toLowerCase() === 'paper' && cpu_choice.toLowerCase() === 'rock') {
        result = 'Player wins';
    } else {
        result = 'Computer wins';
    }

    return result;

}

function playGame(rounds, game_function) {
    for (i = 0; i < rounds; i++) {
        console.log(game_function())
    }
}

playGame(3, rockPaperScissors);
