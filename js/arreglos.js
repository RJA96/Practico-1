document.querySelector(".punto1").addEventListener("click", () => {
    event.preventDefault();
    let ht = document.getElementById("use-async");
    asyncro(ht, "punto_1.html").then(function () {
        ejecutar_punto_1()
    })
})

function ejecutar_punto_1() {
    let matriz = [, ];
    let fila = 100;
    let columna = 100;
    llenar(matriz,fila,columna);
    console.log("inciso a");
    buscar_mayor(matriz,fila,columna);
    console.log("inciso b");
    filaspares_filasimpares(matriz,fila,columna);
    console.log("inciso c");
    promediofila(matriz,fila,columna);
}
function llenar(m,f,c) {
    for (let i = 0; i < f; i++) {
        m[i] = [];
        for (let j = 0; j < c; j++) {
            let num = Math.floor(Math.random() * 100);
            m[i][j] = num;
        }
    }
    console.table(m)
}

function buscar_mayor(m,f,c) {
    let mayor = m[0][0];
    for (let i = 0; i < f; i++) {
        for (let j = 0; j < c; j++) {
            if (m[i][j] > mayor) {
                mayor = m[i][j];
            }
        }
    }
    console.log("mayor total: " + mayor);

}

function filaspares_filasimpares(m,f,c) {
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
            console.log("mayor fila: " + i + " = " + mayor);
        } else {
            console.log("menor fila: " + i + " = " + menor);
        }
    }


}

function promediofila(m,f,c) {
    let promedio = [f];
    let suma;
    let aux = 0;
    for (let i = 0; i < f; i++) {
        for (let j = 0; j < c; j++) {
            suma = m[i][j];
        }
        promedio[aux] = (suma / c);
        aux++;
    }
    console.log("promedio: " + promedio);
}