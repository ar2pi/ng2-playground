import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Plane} from './plane';

@Injectable()
export class PlaneService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private planesUrl = 'api/mainmenus';

  constructor(private http: Http) {
  }

  getPlanes(): Promise<Plane[]> {
    return this.http.get(this.planesUrl)
      .toPromise()
      .then(response => response.json().data as Plane[])
      .catch((err) => {
        console.log(err);
        // couldn't figure out how in-memory-data-service should be supposed to handle intercepted request correctly... ¯\_(ツ)_/¯
        return [
          {id: 1, name: 'Boeing'},
          {id: 2, name: 'Airbus'}
        ];
      });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
