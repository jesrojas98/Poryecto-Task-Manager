import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearUsuarioPageRoutingModule } from './crear-usuario-routing.module';
import { addIcons } from 'ionicons';
import { heart, logoApple, settingsSharp, star } from 'ionicons/icons';
import { CrearUsuarioPage } from './crear-usuario.page';
import { InputEmailComponent } from 'src/app/componentes/input-email/input-email.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearUsuarioPageRoutingModule,   
  ],
  declarations: [CrearUsuarioPage, InputEmailComponent]
})
export class CrearUsuarioPageModule {}
