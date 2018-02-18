import { Component, OnInit } from '@angular/core';

import { Plane } from './plane';
import { PlaneService } from './plane.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  planes: Plane[] = [];
  loaded: Boolean = false;
  constructor( private planeService: PlaneService ) { }

  getPlanes(): void {
    this.planeService
      .getPlanes()
      .then((planes) => {
        this.planes = planes;
        this.loaded = true;
      });
  }

  ngOnInit(): void {
    // mock load time
    setTimeout(((self) => {
      return () => {
        self.getPlanes();
      };
    })(this), 1600);
  }
}
