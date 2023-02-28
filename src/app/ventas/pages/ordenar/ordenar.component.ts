import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent {
  EnMayusculas: boolean = true;

  heroes: Heroe[] = [
    { nombre: 'Superman', vuela: true, color: Color.azul },
    { nombre: 'Batman', vuela: false, color: Color.negro },
    { nombre: 'Robin', vuela: false, color: Color.verde },
    { nombre: 'Derdevil', vuela: false, color: Color.rojo },
    { nombre: 'Linter Verde', vuela: true, color: Color.verde },
  ];

  handleClick() {
    this.EnMayusculas = !this.EnMayusculas;
  }
}
