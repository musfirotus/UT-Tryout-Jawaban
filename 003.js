const acak = []; // Simpan angka acak
const bts1 = 0; // Batas bawah angka acak
const bts2 = 100; // Batas atas angka acak

//Code by musfirotus
//Pengambilan angka acak rentang angka 0-100 dengan perulangan
for (let h = bts1; h <= bts2; h++){
    acak.push(Math.floor(Math.random() * (bts2 - bts1)) + bts1);
}

//Menjumlah semua angka acak
const jumlah = acak.reduce((acc,curr) => {
    return acc + curr;
});

//Penghitungan rata-rata angka acak dengan perulangan
const avg = jumlah / acak.length;

console.log(acak);
console.log('Angka Maksimal : ' + Math.max(...acak));
console.log('Angka Minimal : ' + Math.min(...acak));
console.log(avg);