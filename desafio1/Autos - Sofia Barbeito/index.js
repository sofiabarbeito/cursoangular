var Auto = /** @class */ (function () {
    function Auto(m, ma, k) {
        this.modelo = m;
        this.marca = ma;
        this.kilometros = k;
    }
    Auto.prototype.setModelo = function (m) {
        this.modelo = m;
    };
    Auto.prototype.setMarca = function (m) {
        this.marca = m;
    };
    Auto.prototype.setKilometros = function (k) {
        this.kilometros = k;
    };
    Auto.prototype.mostrarDatos = function () {
        console.log("Modelo: ", this.modelo);
        console.log("Marca: ", this.marca);
        console.log("Kilometros: ", this.kilometros);
    };
    return Auto;
}());
var auto1 = new Auto("Etios", "Toyota", 0);
var auto2 = new Auto("Polo", "Volkswagen", 1000);
var auto3 = new Auto("Versa", "Nissan", 10000);
var propietario = {
    nombre: "Marcos",
    apellido: "Sanchez",
    correo: "marcosanches@gmail.com",
    listaAutos: [auto1, auto2, auto3]
};
console.log("El señor ", propietario.nombre, " ", propietario.apellido, " tiene resgistrados los siguientes autos: ");
propietario.listaAutos.forEach(function (element) {
    console.log(" ");
    element.mostrarDatos();
});
