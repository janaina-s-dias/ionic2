import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { AdressProvider } from './../../../src/providers/adress/adress';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the AdressHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adress-home',
  templateUrl: 'adress-home.html',
})
export class AdressHomePage {
  adresses: Observable<any>;

  constructor(public navCtrl: NavController, private provider: AdressProvider, private toast: ToastController) {
    this.adresses = this.provider.getAll();
  }

  // newAdress(){
  //   this.navCtrl.push('AdressEditPage');
  // }

  editAdress(adress: any){
    this.navCtrl.push('AdressEditPage', {key: adress.key});
  }

  removeAdress(key: string){
    if(key){
      this.provider.remove(key)
      .then(()=>{
        this.toast.create({message: 'Adress removido com sucesso!', duration:3000}).present();
      })
      .catch(()=>{
        this.toast.create({message: 'Erro ao remover adress!', duration:3000}).present();
      });
    }
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad AdressHomePage');
  // }

}
