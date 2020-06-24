//Code by musfirotus
function ckPalindrom(string) {
    const reg = /[\W_]/g; // regex global

    const smallStr = string.toLowerCase().replace(reg, "");

    const reverse = smallStr.split("").reverse().join("");
    if(reverse === smallStr) {
        console.log('true');
    } else {
        console.log('false');
    }
}

ckPalindrom("Red rum, sir, is murder");