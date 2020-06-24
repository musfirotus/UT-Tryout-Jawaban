//Code by musfirotus
function tahunKabisat(thn1, thn2) {
    for (let h = thn1; h <= thn2; h++){
        const opr1 = h % 400 == 0;
        const opr2 = h % 400 != 0;
        const opr3 = h % 100 != 0;
        const opr4 = h % 4 == 0;
        const opr5 = h % 4 != 0;

        if((opr1) || (opr2 && opr3 && opr4)) {
            console.log('Tahun ' + h + ' adalah tahun kabisat');
        } else if ((opr2) || (opr2 && opr3 && opr5)){
            console.log('Tahun ' + h + ' adalah bukan tahun kabisat');
        }
    }
}

tahunKabisat(2015, 2020);