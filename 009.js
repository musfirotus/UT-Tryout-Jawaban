//Code by musfirotus
let data = [
    "Jakarta",
    "Aceh",
    "Malang",
    "Medan",
    "Bontang",
    "Jogja",
    "Jakarta", // ganda
    "Bandung",
    "Malang", // ganda
    "Solo",
    "Palembang",
    "Bandung" // ganda
]
const filterData = data.filter((item,index) => data.indexOf(item) === index);
console.log(filterData);