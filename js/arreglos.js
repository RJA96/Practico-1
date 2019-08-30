let f = 3;
let c = 5;

let matriz = [, ];

function llenar(m) {
    for (let i = 0; i < f; i++) {
        m[i] = [];
        for (let j = 0; j < c; j++) {
            let num = Math.floor(Math.random() * 100);
            m[i][j] = num;
        }
    }
    console.table(m)
}

function buscar_mayor(m) {
    let mayor = m[0][0];
    for (let i = 0; i < f; i++) {
        for (let j = 0; j < c; j++) {
            if (m[i][j] > mayor) {
                mayor = m[i][j];
            }
        }
    }
    console.log("mayor total : " + mayor);

}

function filaspares_filasimpares(m) {
    let menor = m[0][0];
    let mayor = m[0][0];
    for (let i = 0; i < f; i++) {
        for (let j = 0; j < c; j++) {
            if (i % 2 == 0) {
                if (m[i][j] > mayor) {
                    mayor = m[i][j];
                }
            } else {
                if (m[i][j] < menor) {
                    menor = m[i][j];
                }
            }
        }
        if (i % 2 == 0) {
            console.log("mayor fila " + i + "= " + mayor);
        } else {
            console.log("menor fila" + i + "= " + menor);
        }
    }


}

function promediofila(m) {
    let promedio = [f];
    let suma;
    let aux = 0;
    for (let i = 0; i < f; i++) {
        for (let j = 0; j < c; j++) {
            suma = m[i][j];
        }
        promedio[aux] = (suma / c);
    }
    console.log("promedio: " + promedio);
}