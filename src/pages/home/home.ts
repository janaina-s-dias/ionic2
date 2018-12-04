import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular'; 
import { AdressProvider } from './../../../src/providers/adress/adress';
import { Observable } from 'rxjs/Observable';

declare var google;

@IonicPage() 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
    adresses: Observable<any>;
    @ViewChild('map') mapElement: ElementRef;
    map: any;
    start = '2MR8+CW Santos, SP';
    end = '2MR8+CW Santos, SP';
    directionsService = new google.maps.DirectionsService;
    directionsDisplay = new google.maps.DirectionsRenderer; 

  constructor(public navCtrl: NavController, private provider: AdressProvider) {
    this.adresses = this.provider.getAll();
  }
  ionViewDidLoad(){
  this.initMap(); 
}

initMap() {
  this.map = new google.maps.Map(this.mapElement.nativeElement, {
  zoom: 7,
  center: {lat: 41.85, lng: -87.65}
  });
  this.directionsDisplay.setMap(this.map);
} 

calculateAndDisplayRoute() {
  this.directionsService.route({
  origin: this.start,
  destination: this.end,
  travelMode: 'DRIVING'
  }, (response, status) => {
  if (status === 'OK') {
    this.directionsDisplay.setDirections(response);
  } else {
    window.alert('Directions request failed due to ' + status);
  }
  });
}

newAdress(){
  this.navCtrl.push('AdressEditPage');
}

editAdress(adress: any){
  this.navCtrl.push('AdressEditPage', {key: adress.key});
}

}