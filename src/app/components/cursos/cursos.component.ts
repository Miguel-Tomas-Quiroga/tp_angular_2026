import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InscripcionService } from './inscripcion.service'; // Asegúrate de crear este servicio

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {
  // Objeto que sigue la estructura Inscripcion {dni, precio, categoria, etc} [cite: 57]
  nuevaInscripcion = {
    dni: '',
    precio: 0,
    categoriaAlumno: '', // 1=Estudiante, 2=Egresado, 3=Particular [cite: 58]
    fechaInscripcion: '',
    email: '',
    curso: '',
    precioFinal: 0
  };

  constructor(public inscripcionService: InscripcionService) {}

  // Evento (change) para calcular el descuento [cite: 61]
  calcularTotal() {
    let descuento = 0;
    if (this.nuevaInscripcion.categoriaAlumno === '1') descuento = 0.35; // 35% descuento [cite: 60]
    if (this.nuevaInscripcion.categoriaAlumno === '2') descuento = 0.50; // 50% descuento [cite: 60]
    
    this.nuevaInscripcion.precioFinal = this.nuevaInscripcion.precio * (1 - descuento);
  }

  registrar() {
    // Registra en la lista gestionada por el SERVICE 
    this.inscripcionService.agregarInscripcion({ ...this.nuevaInscripcion });
    // Limpiar formulario
    this.nuevaInscripcion = { dni: '', precio: 0, categoriaAlumno: '', fechaInscripcion: '', email: '', curso: '', precioFinal: 0 };
  }
}