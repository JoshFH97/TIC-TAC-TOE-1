const cuadrados = document.querySelectorAll('.cuadro');
const x = '👌'
const o = '👍'
 let turn = 'player1'


//Es para marcar x/o en el tablero
cuadrados.forEach((cuadrado,i)=> {
    cuadrado.addEventListener('click', () => {
    cuadrado.innerText = turn === 'player1' ? x : o;
    turn =  turn === 'player1' ? 'player2' : 'player1';
    //console.log(cuadrado)
    revisarGanador()


    })
})
//fx que nos va a identificar el contenido que hay en cada cuadro.

function revisarGanador() {

    const tablero = Array.from(cuadrados).map(cuadrado => cuadrado.textContent);
    console.log(tablero)
    
    //verticales
    

    //horizontales

    //diagonales
    
}