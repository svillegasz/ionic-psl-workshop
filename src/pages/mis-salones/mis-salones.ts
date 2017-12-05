import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SalonProvider } from '../../providers/salon/salon';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

/**
 * Generated class for the MisSalonesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mis-salones',
  templateUrl: 'mis-salones.html',
})
export class MisSalonesPage {
  salones: any;
  salonesList: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public salonProvider: SalonProvider,
    public loadingCtrl: LoadingController,
    public alert: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MisSalonesPage');
  }

  cargarSalones() {
    this.salonesList = new Array();
    const loader = this.loadingCtrl.create({
      content: 'Cargando salones...'
    });

    loader.present().then(async () => {
      this.salones = await this.salonProvider.getSalones();
      for (const key in this.salones) {
        this.salonesList.push({
          nombre: key,
          ubicacion: this.salones[key].ubicacion
        });
      }
      loader.dismiss();
    });
  }

  ionViewWillEnter() {
    this.cargarSalones();
  }
}
