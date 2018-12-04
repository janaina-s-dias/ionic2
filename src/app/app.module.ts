import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { MyApp } from './app.component';
import { AdressProvider } from '../providers/adress/adress';
import { HomePage } from '../pages/home/home';
import { AdressHomePage } from '../pages/adress-home/adress-home';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdressHomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB45GaQYXAx8UyxP1pCEDcO7cz0P_k88to",
      authDomain: "my-project-1519136145624.firebaseapp.com",
      databaseURL: "https://my-project-1519136145624.firebaseio.com",
      projectId: "my-project-1519136145624",
      storageBucket: "my-project-1519136145624.appspot.com",
      messagingSenderId: "186877568669"

    }),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdressHomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AdressProvider
  ]
})
export class AppModule {}
