import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {
  private listaInscripciones: any[] = [];

  constructor() { }

  // Retorna la lista completa [cite: 65, 66]
  obtenerInscripciones() {
    return this.listaInscripciones;
  }

  // Agrega una nueva inscripción al array [cite: 64, 65]
  agregarInscripcion(item: any) {
    this.listaInscripciones.push(item);
  }

  // Calcula el total acumulado de todas las inscripciones [cite: 67]
  calcularRecaudacionTotal() {
    return this.listaInscripciones.reduce((acc, obj) => acc + obj.precioFinal, 0);
  }

  // Filtra la cantidad de alumnos por categoría para el resumen [cite: 67]
  obtenerResumenPorCategoria(categoria: string) {
    return this.listaInscripciones.filter(i => i.categoriaAlumno === categoria).length;
  }
}