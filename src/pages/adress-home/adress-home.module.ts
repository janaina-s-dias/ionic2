import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdressHomePage } from './adress-home';

@NgModule({
  declarations: [
    AdressHomePage,
  ],
  imports: [
    IonicPageModule.forChild(AdressHomePage),
  ],
})
export class AdressHomePageModule {}
