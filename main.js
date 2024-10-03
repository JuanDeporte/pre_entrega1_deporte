class Prod {
    constructor(litraje, tipo, color, valor) {
        this.litraje = litraje;
        this.color = color;
        this.tipo = tipo;
        this.valor = valor;
    }
}

let Prods = [];

let pintura1 = new Prod('5', 'verde', 'mate', 500);
let pintura2 = new Prod('15', 'rojo', 'metalizado', 2500);
let pintura3 = (new Prod('2', 'fucsia', 'mate', 300))
let pintura4 = (new Prod('50', 'negro', 'metalizado', 5000))
let pintura5 = (new Prod('1', 'oro', 'metal natural', 500000))
let pintura6 = (new Prod('10', 'blanco', 'metalizado', 2000))

alert('¡Hola bienvenido a Coder pinturas!')
    let resp = prompt('Desea agregar algun producto a su compra? si no').toUpperCase()
    if (resp == 'SI') {
        agregar()
    } else if (resp == 'NO') {
        alert('gracias vuelva pronto')
    } else {
        resp = alert('ingresa algo valido. si o no')
    }



    function agregar() {
        let nombrePintura = prompt('ingresa el color de pintura que quieras').toLowerCase();
        let pinturaEncontrada = buscarProd(nombrePintura);
    
        if (pinturaEncontrada) {
            prods.push(pinturaEncontrada);
            console.log('la pintura fue encontrada y agregada correctamente al carrito!');
        } else {
            console.log('No se encontró la pintura.');
        }
    }
    
    function buscarProd(nombre) {
        for (let prod of Prods) {
            if (prod.color.toLowerCase() === nombre.toLowerCase()) {
                return prod; 
            }
        }
        return null; 
    }
