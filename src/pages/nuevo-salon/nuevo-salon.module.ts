import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoSalonPage } from './nuevo-salon';

@NgModule({
  declarations: [
    NuevoSalonPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoSalonPage),
  ],
})
export class NuevoSalonPageModule {}
