//Code by musfirotus
function getGrade(nilai){
    const ket1 = 'Nilai Anda : ';
    const ket2 = 'Grade Anda : ';
    
    if(nilai >= 90 && nilai <= 100){
        console.log(ket1 + nilai);
        console.log(ket2 + 'A');
    } else if (nilai >= 80 && nilai <= 89) {
        console.log(ket1 + nilai);
        console.log(ket2 + 'B');
    } else if (nilai >= 70 && nilai <= 79) {
        console.log(ket1 + nilai);
        console.log(ket2 + 'C');
    } else if (nilai >= 60 && nilai <= 69) {
        console.log(ket1 + nilai);
        console.log(ket2 + 'D');
    } else if (nilai <= 59 && nilai >= 0) {
        console.log(ket1 + nilai);
        console.log(ket2 + 'E');
    } else {
        console.log('Tolong masukan nilai yang valid! (0 - 100)');
    }
}
getGrade(15);
getGrade(100);
getGrade(-5);