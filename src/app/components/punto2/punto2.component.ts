import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  img: string;
  precio: number;
}

interface ItemCarrito {
  producto: Producto;
  cantidad: number;
}

@Component({
  selector: 'app-punto2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements AfterViewInit {
  // Estructura de datos exacta de la consigna
  productos: Producto[] = [
     { 
    id: 1,
    nombre: 'Notebook Asus 13L', 
    descripcion: 'Disco 40GB, 15 pulgadas, Intel Core i3', 
    img: 'https://dlcdnwebimgs.asus.com/gain/ea0197dd-1be7-4ae9-a831-020c205930d7/', 
    precio: 45.5 
  },
  { 
    id: 2,
    nombre: 'Monitor LG 14', 
    descripcion: 'Pantalla LED 14 pulgadas, Full HD 1080p', 
    img: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_42541_Monitor_Gamer_LG_UltraGear_27GS60F-B_27__FHD_IPS_180Hz_G-Sync_Freesync___efbd8838-grn.jpg', 
    precio: 99 
  },
  { 
    id: 3,
    nombre: 'Monitor LG UltraFine™ 27" UHD 4K 16:9 27US500', 
    descripcion: 'Pantalla: 27 in, IPS, W-LED, 3840 x 2160 pixels. Ángulos de visión (H/V): 178 ° / 178 °', 
    img: 'https://f.fcdn.app/imgs/dbcd3e/www.ltienda.com.uy/lguy/a788/original/catalogo/27US50027US5001/2000-2000/monitor-lg-ultrafine-27-uhd-4k-16-9-27us500-monitor-lg-ultrafine-27-uhd-4k-16-9-27us500.jpg', 
    precio: 99 
  },
  { 
    id: 4,
    nombre: 'Teclado Mecánico RGB', 
    descripcion: 'Teclado mecánico con luces RGB, switches azules', 
    img: 'https://statics.qloud.ar/318/25-11-2025-09-11-57_TEC235.jpg', 
    precio: 45.5 
  },
  { 
    id: 5,
    nombre: 'Mouse Gamer Logitech G203', 
    descripcion: '8000 DPI, 6 botones programables, RGB', 
    img: 'https://compucordoba.com.ar/img/Public/1078/11651-producto-21598-11.jpg', 
    precio: 29.99 
  },
  { 
    id: 6,
    nombre: 'Auriculares HyperX Cloud', 
    descripcion: 'Sonido 7.1, micrófono desmontable, diadema acolchada', 
    img: 'https://diamondsystemar.vtexassets.com/arquivos/ids/160107-800-450?v=638506195666870000&width=800&height=450&aspect=true', 
    precio: 79.99 
  },
  { 
    id: 7,
    nombre: 'SSD Kingston 480GB', 
    descripcion: 'Disco sólido SATA III, velocidad 500MB/s', 
    img: 'https://fullh4rd.com.ar/img/productos/12/hd-ssd-480gb-kingston-a400-sata-iii-25-0.jpg', 
    precio: 54.99 
  },
  { 
    id: 8,
    nombre: 'RAM Corsair 16GB DDR4', 
    descripcion: '3200MHz, CL16, disipador de calor', 
    img: 'https://app.contabilium.com/files/explorer/48428/Productos-Servicios/concepto-14001280.jpg', 
    precio: 89.99 
  },
  { 
    id: 9,
    nombre: 'Placa Madre ASUS B450', 
    descripcion: 'Socket AM4, RGB, PCIe 3.0, M.2', 
    img: 'https://spacegamer.com.ar/img/Public/1058-producto-3568-4715.jpg', 
    precio: 129.99 
  },
  { 
    id: 10,
    nombre: 'Fuente EVGA 600W', 
    descripcion: '80 Plus Bronze, certificación de eficiencia', 
    img: 'https://http2.mlstatic.com/D_Q_NP_2X_920996-MLA99469935166_112025-T.webp', 
    precio: 64.99 
  },
  { 
    id: 11,
    nombre: 'Webcam Logitech C270', 
    descripcion: 'HD 720p, micrófono integrado, clip para monitor', 
    img: 'https://bioscomputacion.com.ar/img/Public/1161-producto-7aae026ef6537e948556b5112df23a3320702f1b8b0df4363429fb927e8e49f9490.jpg', 
    precio: 49.99 
  }
  ];

  Arraycarrito: ItemCarrito[] = [];
  modalCarrito: any;

  ngAfterViewInit() {
    const modalElement = document.getElementById('modalCarrito');
    if (modalElement) {
      this.modalCarrito = new (window as any).bootstrap.Modal(modalElement);
    }
  }

  agregarAlCarrito(producto: Producto) {
    const item = this.Arraycarrito.find(i => i.producto.id === producto.id);
    if (item) {
      item.cantidad++;
    } else {
      this.Arraycarrito.push({ producto, cantidad: 1 });
    }
  }

  // Métodos para el selector de cantidad del modal
  incrementar(item: ItemCarrito) {
    item.cantidad++;
  }

  decrementar(item: ItemCarrito, index: number) {
    if (item.cantidad > 1) {
      item.cantidad--;
    } else {
      this.Arraycarrito.splice(index, 1); // Si llega a 0, se elimina
    }
  }

  calcularTotal(): number {
    return this.Arraycarrito.reduce((total, i) => total + (i.producto.precio * i.cantidad), 0);
  }

  abrirModal() {
    if (this.modalCarrito) this.modalCarrito.show();
  }

  checkOut() {
    this.Arraycarrito = [];
    this.modalCarrito.hide();
    alert('¡Gracias por tu compra!');
  }
}