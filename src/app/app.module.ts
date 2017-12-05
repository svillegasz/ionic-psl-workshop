import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { SalonProvider } from '../providers/salon/salon';
import { MisSalonesPage } from '../pages/mis-salones/mis-salones';
import { NuevoSalonPage } from '../pages/nuevo-salon/nuevo-salon';
import { SalonDetallePage } from '../pages/salon-detalle/salon-detalle';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    MisSalonesPage,
    NuevoSalonPage,
    SalonDetallePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MisSalonesPage,
    NuevoSalonPage,
    SalonDetallePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SalonProvider
  ]
})
export class AppModule {}
