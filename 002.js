//Code by musfirotus
function ganjilGenap(angka) {
    const genap = 'Bilangan Genap';
    const ganjil = 'Bilangan Ganjil';
    if(angka % 2 == 0){
        console.log(genap);
    } else if (angka % 2 != 0){
        console.log(ganjil);
    }
}
ganjilGenap(33);
ganjilGenap(104);