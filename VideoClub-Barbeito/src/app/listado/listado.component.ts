import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})


export class ListadoComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

  pelicula1: Pelicula = {id:1, nombre:"Titanic"}
  pelicula2: Pelicula = {id:2, nombre:"La bella y la bestia"}
  pelicula3: Pelicula = {id:3, nombre:"La Cenicienta"}
  pelicula4: Pelicula = {id:4, nombre:"Harry Potter"}
  pelicula5: Pelicula = {id:5, nombre:"El senor de los anillos"}
  pelicula6: Pelicula = {id:6, nombre:"Star Wars"}
  pelicula7: Pelicula = {id:7, nombre:"Avengers"}
  pelicula8: Pelicula = {id:8, nombre:"Capitan America"}
  pelicula9: Pelicula = {id:9, nombre:"Black Widow"}
  pelicula10: Pelicula = {id:10, nombre:"Thor"}

  peliculas: Pelicula[] = [this.pelicula1,this.pelicula2,this.pelicula3,this.pelicula4,this.pelicula5,this.pelicula6,this.pelicula7,this.pelicula8,this.pelicula9,this.pelicula10]

  submitted = false;

  onSubmit() { this.submitted = true; }

}

interface Pelicula {
  id: number;
  nombre: string;
}
