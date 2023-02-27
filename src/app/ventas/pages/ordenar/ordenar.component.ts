import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent implements OnInit {
  EnMayusculas: boolean = true;

  constructor() {}

  ngOnInit(): void {}
  handleClick() {
    this.EnMayusculas = !this.EnMayusculas;
  }
}
