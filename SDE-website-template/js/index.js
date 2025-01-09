

/* heads or tails game */

// function HeadsOrTails() {
//     let x = Math.floor(Math.random() * 100);
//     console.log(x);
//     let h_or_t = '';
//     x > 50 ? h_or_t = 'heads' : h_or_t = 'tails';
//     return h_or_t;
// }

// console.log(HeadsOrTails());

// function fizzBuzz(n){
//     for (i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('FizzBuzz');
//         } else if (i % 5 === 0) {
//             console.log('Buzz');
//         } else if (i % 3 === 0 ) {
//             console.log('Fizz');
//         } else {
//             console.log(i);
//         }
//         // console.log(`number : ${i}`);
//     }
// }

// fizzBuzz(100);

//let result = 0;

// function exerciseOne(n = 0) {
//     let res
//     if (n === 0) {
//         res = 'Invalid Number';
//     } else if (n < 0) {
//         res = `${n} is a negative number`;
//     } else if (n % 2 === 0) {
//         res = `${n} is an even number`;
//     } else if (n % 2 !== 0) {
//         res = `${n} is an odd number`;
//     }
//     return res;
// }

// console.log(exerciseOne(Math.round(Math.random() * 1000)));
// console.log(exerciseOne(0));


// function rockPaperScissors(){
//     let result
//     let x = Math.floor(Math.random() * 3);
//     const choices = ['rock', 'paper', 'scissors'];
//     let cpu_choice = choices[x];

//     let player_choice

//     while (true) {
//         player_choice = prompt('rock, paper or scissors: ');
//         if (choices.includes(player_choice)) {
//             console.log(`player choice is: ${player_choice}`);
//             break;
//         } else {
//             console.log('Invalid choice');
//         }
//     }

//     console.log(`computer chooses: ${cpu_choice}`);

//     if (player_choice.toLowerCase() == cpu_choice.toLowerCase()) {
//         result = 'It\'s a tie';
//     } else if (player_choice.toLowerCase() === 'rock' && cpu_choice.toLowerCase() === 'scissors') {
//         result = 'Player wins';
//     } else if (player_choice.toLowerCase() === 'scissors' && cpu_choice.toLowerCase() === 'paper') {
//         result = 'Player wins';
//     } else if (player_choice.toLowerCase() === 'paper' && cpu_choice.toLowerCase() === 'rock') {
//         result = 'Player wins';
//     } else {
//         result = 'Computer wins';
//     }

//     return result;

// }

// function playGame(rounds, game_function) {
//     for (i = 0; i < rounds; i++) {
//         console.log(game_function())
//     }
// }

// playGame(3, rockPaperScissors);

let planet_buttons = document.querySelectorAll('.solar_system_button')
planet_buttons.forEach(button => {
    button.addEventListener('click', () => showPlanetInfo(button.id));

});

let planet_content_open = false;
let planet_current_content_id = '';

function showPlanetInfo(button_id) {
    console.log(`${button_id} was clicked`);
    let content = document.querySelector('.planet_content');

    if (planet_content_open && planet_current_content_id === button_id) {
        content.style.display = 'none';
        planet_content_open = false;
        planet_current_content_id = '';
    } else {
        content.style.display = 'block';
        planet_content_open = true;
        planet_current_content_id = button_id;
    

        if (button_id === 'dwarf_planets') {
            content.innerHTML = '<h2>Dwarf Planets</h2>\
                <p>A dwarf planet is a planetary-mass object that is neither a planet nor a natural satellite.\
                That is, it is not a moon, but it is not a planet either.</p>\
                <p>There are five officially recognised dwarf planets in our solar system:</p>\
                <ul>\
                <li>Ceres</li>\
                <li>Pluto</li>\
                <li>Haumea</li>\
                <li>Makemake</li>\
                <li>Eris</li>\
                </ul>';

        }  else if (button_id === 'inner_planets') {
            content.style.display = 'block';
            content.innerHTML = '<h2>Inner Planets</h2>\
                <p>The four terrestrial or inner planets have dense, rocky compositions, few or no moons, and no ring systems.\
                They are composed largely of refractory minerals such as silicates—which form their crusts and mantles—and metals such as iron and nickel which form their cores.</p>\
                <p>There are four inner planets in our solar system:</p>\
                <ul>\
                <li>Mercury</li>\
                <li>Venus</li>\
                <li>Earth</li>\
                <li>Mars</li>\
                </ul>';
        }  else if (button_id === 'outer_planets') {
            content.innerHTML = '<h2>Outer Planets</h2>\
                <p>The outer planets, also known as gas giants, are composed mainly of hydrogen and helium and have multiple moons and ring systems.</p>\
                <p>There are four outer planets in our solar system:</p>\
                <ul>\
                <li>Jupiter</li>\
                <li>Saturn</li>\
                <li>Uranus</li>\
                <li>Neptune</li>\
                </ul>';
        }
    }

    console.log(`planet_content_open: ${planet_content_open}`);
    console.log(`planet_current_content_id: ${planet_current_content_id}`);

}

