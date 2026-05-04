import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component {
  
  eventos = [
    { 
      nombre: 'Locrada Patria', 
      descripcion: 'Este 25 de mayo, celebra la independencia con música en vivo, comida tradicional y actividades para toda la familia.', 
      img: 'assets/img/locrada.webp' 
    },
    { 
      nombre: 'Taller de Yoga', 
      descripcion: 'Una sesión profunda para conectar mente y cuerpo en un entorno natural.', 
      img: 'https://picsum.photos/id/22/1200/500' 
    },
    { 
      nombre: 'Conferencia Tech', 
      descripcion: 'Explorando las fronteras de la Inteligencia Artificial en el desarrollo web moderno.', 
      img: 'https://picsum.photos/id/0/1200/500' 
    }
  ];

  indice: number = 0;

  // Método para adelantar
  siguiente() {
    if (this.indice < this.eventos.length - 1) {
      this.indice++;
    } else {
      this.indice = 0; // Vuelve al inicio
    }
  }

  // Método para retrasar
  anterior() {
    if (this.indice > 0) {
      this.indice--;
    } else {
      this.indice = this.eventos.length - 1; // Va al último
    }
  }
}