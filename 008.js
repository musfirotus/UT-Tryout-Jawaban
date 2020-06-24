//Code by musfirotus
const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
let numInput = 0;
let numJawab = 0;

function userInput(prompt, inputHandler) {
    rl.question(prompt, input => {
            if(inputHandler(input) !== false) {
                userInput(prompt, inputHandler);
            } else {
                rl.close();
            }
        }
    );
}

userInput('Silakan input angka : ', input => {
    if(isFinite(input)) {
        numInput = Number(input);
        numJawab += numInput;
    } else if (input === '=') {
        console.log('Hasil penjumlahan : ' + numJawab);
        return false
    } else {
        console.log('Input yang Anda masukan tidak valid!');
    }
})