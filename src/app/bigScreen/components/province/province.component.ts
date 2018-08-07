import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../animations/routerTransition';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.less'],
  animations: [routerTransition]
})
export class ProvinceComponent implements OnInit {
  bgBox = {
    width: 1920,
    height: 1080,
    left: 0,
    top: 0,
  }
  constructor() { }

  ngOnInit() {
  }
  //动画方法
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

}
