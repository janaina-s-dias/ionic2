import { AdressProvider } from './../../providers/adress/adress';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@IonicPage()
@Component({
selector: 'page-adress-edit',
templateUrl: 'adress-edit.html',
})
export class AdressEditPage {
  title: string;
  form: FormGroup;
  adress: any;
constructor
(
    public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, private provider: AdressProvider,
    private toast: ToastController
) {
// maneira 1
this.adress = this.navParams.data.adress || { };
this.createForm();
// // maneira 2
// this.contact = { };
// this.createForm();
// if (this.navParams.data.key) {
// const subscribe = this.provider.get(this.navParams.data.key).subscribe((c: any) => {
// subscribe.unsubscribe();
// this.contact = c;
// this.createForm();
// })
// }
  this.setupPageTitle();
}
private setupPageTitle() {
  this.title = this.navParams.data.adress ? 'Update adress' : 'New adress';
}

createForm() {
  this.form = this.formBuilder.group({
  key: [this.adress.key],
  name: [this.adress.name, Validators.required],
  location: [this.adress.location, Validators.required]

  });
  }
  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
      .then(() => {
      this.toast.create({ message: 'Adress salvo com sucesso.', duration: 3000 }).present();
      this.navCtrl.pop();
  })
      .catch((e) => {
      this.toast.create({ message: 'Erro ao salvar o adress.', duration: 3000 }).present();
      console.error(e);
      })
    }
    }
  }