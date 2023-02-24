import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLower: string = 'fernando';
  nombreUpper: string = 'FERNADO';
  nombreCompleto: string = 'FerNaNdo HeRRera';

  fecha: Date = new Date();
}
