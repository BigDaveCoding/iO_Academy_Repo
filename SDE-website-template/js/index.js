

/* heads or tails game */

function HeadsOrTails() {
    let x = Math.floor(Math.random() * 100);
    console.log(x);
    let h_or_t = '';
    x > 50 ? h_or_t = 'heads' : h_or_t = 'tails';
    return h_or_t;
}

console.log(HeadsOrTails());