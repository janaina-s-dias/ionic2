import { AdressProvider } from './../../providers/adress/adress';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
selector: 'page-adress-edit',
templateUrl: 'adress-edit.html',
})
export class AdressEditPage {
  adresses: Observable<any>;
  title: string;
  form: FormGroup;
  adress: any;
constructor
(
    public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, private provider: AdressProvider,
    private toast: ToastController
)

{

// maneira 1
// this.adress = this.navParams.data.adress || { };
// this.createForm();

// // maneira 2
this.adress = { };
this.createForm();

  if (this.navParams.data.key) {
        const subscribe = this.provider.get(this.navParams.data.key).subscribe((c: any) => {
          subscribe.unsubscribe();
        this.adress = c;
        this.createForm();
    })
 }

  this.adresses = this.provider.getAll();
  this.setupPageTitle();

}
public setupPageTitle() {
  console.log(this.adresses);
  this.title = this.navParams.data.adresses ?  'Update adress' : 'New adress';
}



createForm() {

  this.form = this.formBuilder.group({
  key: [this.adress.key],
  name: [this.adress.name, Validators.required],
  latitude: [this.adress.latitude, Validators.required],
  longitude: [this.adress.longitude, Validators.required]

});
}


onSubmit() {
  if (this.form.valid) {
    this.provider.save(this.form.value)
    .then(() => {
    this.toast.create({ message: 'Adress salvo com sucesso.', duration: 1000 }).present();
    this.navCtrl.pop();
 })
    .catch((e) => {
    this.toast.create({ message: 'Erro ao salvar o adress.', duration: 1000 }).present();
    console.error(e);
    })
  }
  }
}
