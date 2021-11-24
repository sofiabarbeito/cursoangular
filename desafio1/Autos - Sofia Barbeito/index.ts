class Auto {
    private modelo: string;
    private marca: string;
    private kilometros: number;

    constructor(m:string,ma:string,k:number){
        this.modelo = m;
        this.marca = ma;
        this.kilometros = k;
    }

    setModelo(m:string){
        this.modelo = m;
    }

    setMarca(m:string){
        this.marca = m;
    }

    setKilometros(k:number){
        this.kilometros = k;
    }

    mostrarDatos(){
        console.log("Modelo: ",this.modelo);
        console.log("Marca: ",this.marca);
        console.log("Kilometros: ",this.kilometros);
    }
}

let auto1: Auto = new Auto("Etios","Toyota",0);
let auto2: Auto = new Auto("Polo","Volkswagen",1000);
let auto3: Auto = new Auto("Versa","Nissan",10000);


let propietario = { //creo objeto propietario de los autos
    nombre: "Marcos",
    apellido: "Sanchez",
    correo: "marcosanches@gmail.com",
    listaAutos: [auto1,auto2,auto3] 
}

console.log("El señor ",propietario.nombre," ",propietario.apellido," tiene resgistrados los siguientes autos: ")
propietario.listaAutos.forEach(element => { 
    console.log(" ");
    element.mostrarDatos();
});



