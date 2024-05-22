const cuadrados = document.querySelectorAll('.cuadro');
const x = 'X'
const o = 'O'
let turn = 'player1'
let bandera=false

//Es para marcar x/o en el tablero
cuadrados.forEach((cuadrado, i) => {
    if (!bandera) {//para hacer pausa guado aalguien gane
        cuadrado.addEventListener('click', () => {
            if (!bandera && cuadrado.innerHTML=="") {//si nadia ha ganado y el cuadro esta vacio se puede clickear si no no.
                cuadrado.innerText = turn === 'player1' ? x : o;
                turn = turn === 'player1' ? 'computer' : 'player1';
                revisarGanador()
            }
        });
    }
});
//fx que nos va a identificar el contenido que hay en cada cuadro.

function revisarGanador() {
    const tablero = Array.from(cuadrados).map(cuadrado => cuadrado.textContent);
    //console.log(tablero)
    //verticales
    if (tablero[0] != '' && tablero[0] == tablero[1] && tablero[0] == tablero[2]) {
        alert('Winner vertical 1')
        bandera=true
        return ganador([0, 1, 2]);
    }
    if (tablero[3] != '' && tablero[3] == tablero[4] && tablero[3] == tablero[5]) {
        alert('Winner vertical 2')
        return ganador([3, 4, 5]);
    }
    if (tablero[6] != '' && tablero[6] == tablero[7] && tablero[6] == tablero[8]) {
        alert('Winner vertical 3')
        return ganador([6, 7, 8]);
    }
    
    
    //horizontales
    if (tablero[0] != '' && tablero[0] == tablero[3] && tablero[0] == tablero[6]) {
        alert('Winner horizontal 1')
        return ganador([0, 3, 6]);
    }
    if (tablero[1] != '' && tablero[1] == tablero[4] && tablero[1] == tablero[7]) {
        alert('Winner horizontal 2')
        return ganador([1, 4, 7]);
    }
    if (tablero[2] != '' && tablero[2] == tablero[5] && tablero[2] == tablero[8]) {
        alert('Winner horizontal 3')
        return ganador([2, 5, 8]);
    }


    //diagonales
    if (tablero[0] != '' && tablero[0] == tablero[4] && tablero[0] == tablero[8]) {
        alert('Winner diagonales 1')
        return ganador([0, 4, 8]);
    }
    if (tablero[6] != '' && tablero[6] == tablero[4] && tablero[6] == tablero[2]) {
        alert('Winner diagonales 2')
        return ganador([6, 4, 2]);
    }
    if (!tablero.includes('')) {
        alert('Empate');
        return 'empate';
    }
    return false
}
// me indica las posiciones ganadoras.
function ganador(posicion) {
    bandera = true; // cambia bandera para bloquear el click
    //console.log(bandera);
    //console.log('win', posicion);
    turn = 'pausa';
    posicion.forEach(posicionGanadora => {
        cuadrados[posicionGanadora].classList.toggle('ganadores', true);
    });
}
/*function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }*/
