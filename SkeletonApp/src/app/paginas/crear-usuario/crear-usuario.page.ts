import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { heart, logoApple, settingsSharp, star } from 'ionicons/icons';
@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.page.html',
  styleUrls: ['./crear-usuario.page.scss'],
})
export class CrearUsuarioPage implements OnInit {

  constructor() {addIcons({ heart, logoApple, settingsSharp, star }); }

  ngOnInit() {
  }

}
