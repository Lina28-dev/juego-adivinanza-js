// Aca el juego selecciona un numero al azar para que adivines
let numeroAzar = Math.floor(Math.random()*100) + 1

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')

//Esta acción se va ejecutar cuando se toque el boton chequear
function chequearResultado(){
    let numeroIngresado = parseInt(numeroEntrada.value)

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Por favor, introduce un numero válido entre 1 y 100'
        return
    }

    if(numeroIngresado === numeroAzar){
        mensaje.textContent = '!Felicitaciones! !Has adivinado el número!';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
    }else if(numeroIngresado < numeroAzar){
        mensaje.textContent = '!Mas alto! El número es mayor al que dijiste';
        mensaje.style.color = 'red';
    } else {
       mensaje.textContent = 'Mas bajo! El número es menor al que dijiste'; 
       mensaje.style.color = 'red';
    }
}