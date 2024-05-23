document.addEventListener("DOMContentLoaded",()=>{
    const cuadrados = document.querySelectorAll('.cuadro');
    const xImgSrc = localStorage.getItem("imgX");
    
    console.log(xImgSrc);
    const x = `<img src="${xImgSrc}" width="100px" alt="imgUsuario">`;
    const o = '<img id="img5" src="/multimedia/bowser.png" width="100px" alt="bowser">';
    let turn = 'player1'
    let bandera = false
    
    //Es para marcar x/o en el tablero
    cuadrados.forEach((cuadrado, i) => {
        if (!bandera) {//para hacer pausa guado alguien gane
            cuadrado.addEventListener('click', () => {
                if (!bandera && cuadrado.innerHTML == "") {//si nadia ha ganado y el cuadro esta vacio se puede clickear si no no.
                    cuadrado.innerHTML = turn === 'player1' ? x : o;
                    turn = turn === 'player1' ? 'computer' : 'player1';
                    revisarGanador()
                    //Si es el turno de la computadora y nadie ha ganado, hacer un movimiento automático
                    if (turn === 'computer' && !bandera) {
                        setTimeout(computerMove, 500); // Añadir un pequeño retraso para ver el movimiento del jugador
                    }
                }
            });
        }
    });
    //Función para que la computadora haga un movimiento
    function computerMove() {
        let emptySquares = Array.from(cuadrados).filter(cuadro => cuadro.innerHTML == "");
        if (emptySquares.length > 0) {
            
            let randomSquare = emptySquares[Math.floor(Math.random() * emptySquares.length)];
            randomSquare.innerHTML = o;
            turn = 'player1';
            revisarGanador();
        }
    }
    //fx que nos va a identificar el contenido que hay en cada cuadro.
    
    function revisarGanador() {
        const tablero = Array.from(cuadrados).map(cuadro => cuadro.querySelector('img') ? cuadro.querySelector('img').src : "");
        
        // Verticales
        if (tablero[0] && tablero[0] == tablero[1] && tablero[0] == tablero[2]) {
            alert('Winner vertical 1');
            return ganador([0, 1, 2]);
        }
        if (tablero[3] && tablero[3] == tablero[4] && tablero[3] == tablero[5]) {
            alert('Winner vertical 2');
            return ganador([3, 4, 5]);
        }
        if (tablero[6] && tablero[6] == tablero[7] && tablero[6] == tablero[8]) {
            alert('Winner vertical 3');
            return ganador([6, 7, 8]);
        }
    
        // Horizontales
        if (tablero[0] && tablero[0] == tablero[3] && tablero[0] == tablero[6]) {
            alert('Winner horizontal 1');
            return ganador([0, 3, 6]);
        }
        if (tablero[1] && tablero[1] == tablero[4] && tablero[1] == tablero[7]) {
            alert('Winner horizontal 2');
            return ganador([1, 4, 7]);
        }
        if (tablero[2] && tablero[2] == tablero[5] && tablero[2] == tablero[8]) {
            alert('Winner horizontal 3');
            return ganador([2, 5, 8]);
        }
    
        // Diagonales
        if (tablero[0] && tablero[0] == tablero[4] && tablero[0] == tablero[8]) {
            alert('Winner diagonales 1');
            return ganador([0, 4, 8]);
        }
        if (tablero[6] && tablero[6] == tablero[4] && tablero[6] == tablero[2]) {
            alert('Winner diagonales 2');
            return ganador([6, 4, 2]);
        }
        if (!tablero.includes("")) {
            alert('Empate');
            return 'empate';
        }
        return false;
    }
    
    // me indica las posiciones ganadoras.
    function ganador(posicion) {
        bandera = true; // cambia bandera para bloquear el click
        turn = 'pausa';
        posicion.forEach(posicionGanadora => {
            cuadrados[posicionGanadora].classList.toggle('ganadores', true);//para que los cuadros pasen a rojos
        });
    }
    /*function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }*/
    
      let img1= document.getElementById("img1")
      let srcImg1
      img1.addEventListener("click",()=>{
        srcImg1=img1.getAttribute('src')
        console.log(srcImg1); 
        localStorage.setItem("imgX",srcImg1)
        window.location.href="index.html"
      })
      let img2= document.getElementById("img2")
      let srcImg2
      img2.addEventListener("click",()=>{
        srcImg2=img2.getAttribute('src')
        console.log(srcImg2); 
        localStorage.setItem("imgX",srcImg2)
        window.location.href="index.html"
      })
      let img3= document.getElementById("img3")
      let srcImg3
      img3.addEventListener("click",()=>{
        srcImg3=img3.getAttribute('src')
        console.log(srcImg3); 
        localStorage.setItem("imgX",srcImg3)
        window.location.href="index.html"
      })
      let img4= document.getElementById("img4")
      let srcImg4
      img4.addEventListener("click",()=>{
        srcImg4=img4.getAttribute('src')
        console.log(srcImg4); 
        localStorage.setItem("imgX",srcImg4)
        window.location.href="index.html"
      })
    console.log(x);
    
    
})
