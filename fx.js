const cuadrados = document.querySelectorAll('.cuadro');
const x = document.ge
const o = 'O'
 let turn = 'player1'


//Es para marcar x/o en el tablero
cuadrados.forEach((cuadrado,i)=> {
    cuadrado.addEventListener('click', () => {
    cuadrado.innerText = turn === 'player1' ? x : o;
    turn =  turn === 'player1' ? 'computer' : 'player1';
    //console.log(cuadrado)
    revisarGanador()


    })
})
//fx que nos va a identificar el contenido que hay en cada cuadro.

function revisarGanador() {

    const tablero = Array.from(cuadrados).map(cuadrado => cuadrado.textContent);
    console.log(tablero)
    
    //verticales
        if (tablero[0]!=''&&tablero[0] == tablero[1] && tablero[0] == tablero[2]) {
            alert('Winner vertical 1')
        }
        if (tablero[3] != '' && tablero[3] == tablero[4] && tablero[3] == tablero[5]) {
            alert('Winner vertical 2')
        }
        if (tablero[6]!=''&&tablero[6] == tablero[7] && tablero[6] == tablero[8]) {
            alert('Winner vertical 3')
        }
        
   //horizontales
        if (tablero[0]!=''&& tablero[0] == tablero[3] && tablero[0] == tablero[6]) {
            alert('Winner horizontal 1')
        }
        if (tablero[1] != '' && tablero[1] == tablero[4] && tablero[1] == tablero[7]) {
            alert('Winner horizontal 2')
        }
        if (tablero[2]!='' && tablero[2] == tablero[5] && tablero[2] == tablero[8]) {
            alert('Winner horizontal 3')
        }
        

    //diagonales
    if (tablero[0]!=''&&tablero[0] == tablero[4] && tablero[0] == tablero[8]) {
        alert('Winner diagonales 1')
    }
    if (tablero[6] != '' && tablero[6] == tablero[4] && tablero[6] == tablero[2]) {
        alert('Winner diagonales 2')
    }
    
}
/*function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }*/
  