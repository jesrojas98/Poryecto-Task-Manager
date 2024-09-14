import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creacion-de-tareas',
  templateUrl: './creacion-de-tareas.component.html',
  styleUrls: ['./creacion-de-tareas.component.scss'],
})
export class CreacionDeTareasComponent  implements OnInit {
  currentValue = 'javascript';
  onIonChange(event: CustomEvent) {
    this.currentValue = event.detail.value;
  }
  onDidDismiss(event: CustomEvent) {
    console.log('didDismiss', JSON.stringify(event.detail));
  }
  constructor() { }

  ngOnInit() {}

}
