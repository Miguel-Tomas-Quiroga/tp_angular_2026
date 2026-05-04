import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Carta {
  id: number;
  imagen: string;
  volteada: boolean;
  encontrada: boolean;
}

@Component({
  selector: 'app-punto3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component {
  tablero: Carta[] = [];
  imagenes: string[] = [
    'bi-gear-fill', 'bi-flower1', 'bi-heart-fill', 
    'bi-star-fill', 'bi-bug-fill', 'bi-cloud-sun-fill'
  ];
  
  intentosTotales: number = 10;
  intentosRestantes: number = 0;
  cartasSeleccionadas: Carta[] = [];
  juegoIniciado: boolean = false;
  bloquearTablero: boolean = false;
  mensaje: string = '';

  constructor() {
    this.prepararTablero();
  }

  prepararTablero() {
    this.tablero = [];
    // Creamos las 6 parejas (12 cartas)
    let id = 0;
    this.imagenes.forEach(img => {
      this.tablero.push({ id: id++, imagen: img, volteada: false, encontrada: false });
      this.tablero.push({ id: id++, imagen: img, volteada: false, encontrada: false });
    });
    this.mezclarCartas();
  }

  mezclarCartas() {
    this.tablero.sort(() => Math.random() - 0.5);
  }

  iniciarJuego() {
    this.prepararTablero();
    this.intentosRestantes = this.intentosTotales;
    this.juegoIniciado = true;
    this.mensaje = '¡Juego iniciado! Encuentra las parejas.';
  }

  seleccionarCarta(carta: Carta) {
    if (!this.juegoIniciado || this.bloquearTablero || carta.volteada || carta.encontrada) return;

    carta.volteada = true;
    this.cartasSeleccionadas.push(carta);

    if (this.cartasSeleccionadas.length === 2) {
      this.verificarPareja();
    }
  }

  verificarPareja() {
    const [c1, c2] = this.cartasSeleccionadas;
    this.bloquearTablero = true;

    if (c1.imagen === c2.imagen) {
      c1.encontrada = true;
      c2.encontrada = true;
      this.cartasSeleccionadas = [];
      this.bloquearTablero = false;
      this.verificarVictoria();
    } else {
      setTimeout(() => {
        c1.volteada = false;
        c2.volteada = false;
        this.cartasSeleccionadas = [];
        this.intentosRestantes--;
        this.bloquearTablero = false;
        this.verificarDerrota();
      }, 1000);
    }
  }

  verificarVictoria() {
    if (this.tablero.every(c => c.encontrada)) {
      this.mensaje = '¡GANASTE! Felicitaciones 🎉';
      this.juegoIniciado = false;
    }
  }

  verificarDerrota() {
    if (this.intentosRestantes <= 0) {
      this.mensaje = 'GAME OVER - Te quedaste sin intentos 💀';
      this.juegoIniciado = false;
      // Mostrar todas las cartas al perder
      this.tablero.forEach(c => c.volteada = true);
    }
  }

  reiniciar() {
    this.iniciarJuego();
  }
}