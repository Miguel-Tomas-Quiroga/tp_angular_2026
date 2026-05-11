import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {
  private listaInscripciones: any[] = [];

  agregarInscripcion(item: any) {
    this.listaInscripciones.push(item);
  }

  obtenerInscripciones() {
    return this.listaInscripciones;
  }

  calcularRecaudacionTotal() {
    return this.listaInscripciones.reduce((acc, obj) => acc + obj.precioFinal, 0);
  }
}