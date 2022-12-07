const readline = require('readline');

let input = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (cmd) {
    
    input.push(cmd);
});

rl.on('close', function (cmd) {

    let start = 0;
    let count = 0;

    let txt = input[1].split(' ');
    txt.forEach(word => {
        let color = input[2].slice(start, start+word.length);
        start += word.length;
        (/BB/.test(color) && /YY/.test(color))? count++ : count;
    });
    console.log(сount);
    
    process.exit(0);
});