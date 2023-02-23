import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pipeApp';

  nombre: string = 'Martin ENRIquez';

  mostrarNombre() {
    return console.log(this.nombre);
  }
}
