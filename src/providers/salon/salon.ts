import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

/*
  Generated class for the SalonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SalonProvider {
  private baseUrl: string = 'https://psl-ionic-workshop.firebaseio.com';

  constructor(public http: Http) {
  }

  public getSalon(name) {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/salon/${name}.json`)
        .subscribe(res => resolve(res.json()));
    });
  }

  public getSalones() {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/salon.json`)
        .subscribe(res => resolve(res.json()));
    });
  }

  public deleteSalon(name) {
    return new Promise(resolve => {
      this.http.delete(`${this.baseUrl}/salon/${name}.json`)
        .subscribe(res => resolve(res.json()));
    });
  }

  public updateSalon(room, name) {
    return new Promise(resolve => {
      this.http.patch(`${this.baseUrl}/salon/${name}.json`, JSON.stringify(room))
        .subscribe(res => resolve(res.json()));
    });
  }

  public createSalon(room, name) {
    return new Promise(resolve => {
      this.http.patch(`${this.baseUrl}/salon/${name}.json`, JSON.stringify(room))
        .subscribe(res => resolve(res.json()));
    });
  }

  public getPisos() {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/piso.json`)
        .subscribe(res => resolve(res.json()));
    });
  }

}
