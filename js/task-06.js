
const input = document.querySelector('input')

input.addEventListener('blur', validarSimbolo)


function validarSimbolo() {
let cantidadSimbolos = this.value.length;
let reglaCantidadSimbolos = this.dataset.length;
if(cantidadSimbolos == reglaCantidadSimbolos){
    this.style.borderColor = '#4caf50'
}else{
    this.style.borderColor = '#f44336'
}

console.log(cantidadSimbolos);
}