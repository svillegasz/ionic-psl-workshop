import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonDetallePage } from './salon-detalle';

@NgModule({
  declarations: [
    SalonDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(SalonDetallePage),
  ],
})
export class SalonDetallePageModule {}
