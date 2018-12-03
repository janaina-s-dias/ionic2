import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdressEditPage } from './adress-edit';

@NgModule({
  declarations: [
    AdressEditPage,
  ],
  imports: [
    IonicPageModule.forChild(AdressEditPage),
  ],
})
export class AdressEditPageModule {}
