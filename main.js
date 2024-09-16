alert('bienvenido al Piedras, Papel, Tijeras o ¡FERRAN!')

let jugador = prompt('por favor ingrese su nombre') 

let pc;  

alert('¡hola ' + jugador + ' Comencemos!!')

function random() {
    return Math.ceil(Math.random()*4)
}

jugador = prompt('elegí: 1 - Piedra, 2 - Papel, 3 - Tijera, 4 - FERRAN')
pc = random();
alert('vos elegiste ' + eleccion(jugador))
alert('pc eligió ' + eleccion(pc))

if(jugador == pc) {
    alert('¡EMPATE!')
}else if(jugador == 1 && pc == 3) {
    alert('HAS GANADOOO!!!')
}else if(jugador == 2 && pc == 1) {
    alert('HAS GANADOOO!!!')
}else if(jugador == 3 && pc == 2) {
    alert('HAS GANADOOO!!!')
}else if(jugador == 4 && pc == 1) {
    alert('HAS GANADOOO FERRAN ES INVENCIBLE MUAJAJA!!!')
}else if(jugador == 4 && pc == 2) {
    alert('HAS GANADOOO FERRAN ES INVENCIBLE MUAJAJA!!!')
}else if(jugador == 4 && pc == 3) {
    alert('HAS GANADOOO FERRAN ES INVENCIBLE MUAJAJA!!!')
}else if(pc == 1 && jugador == 3) {
    alert('HAS PERDIDOOO JAJJJAJAJJA')
}else if(pc == 2 && jugador == 1) {
    alert('HAS PERDIDOOO JAJJJAJAJJA')
}else if(pc == 3 && jugador == 2) {
    alert('HAS PERDIDOOO JAJJJAJAJJA')
}else if(pc == 4 && jugador == 1) {
    alert('HAS PERDIDOOO FERRAN ES INVENCIBLE MUAJAJA!!!')
}else if(pc == 4 && jugador == 2) {
    alert('HAS PERDIDOOO FERRAN ES INVENCIBLE MUAJAJA!!!')
}else if(pc == 4 && jugador == 3) {
    alert('HAS PERDIDOOO FERRAN ES INVENCIBLE MUAJAJA!!!')
}


function eleccion(elegido) {
    let resultado = ''
    if (elegido == 1 ){
        resultado = 'Piedra'
    }else if(elegido == 2){
        resultado = 'Papel'
}else if(elegido == 3){
    resultado = 'tijeras'
}else if(elegido == 4){
    resultado = 'FERRAN'
}else{
    resultado = 'elegi un numero correcto che aparato🤣🤣🤣🤣🤣'
} return resultado
}
