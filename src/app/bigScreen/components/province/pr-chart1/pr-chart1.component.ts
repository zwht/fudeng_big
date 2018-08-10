import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pr-chart1',
  templateUrl: './pr-chart1.component.html',
  styleUrls: ['./pr-chart1.component.less']
})
export class PrChart1Component implements OnInit {
  chartBox = {
    width: 900,
    height: 400,
    left: 50,
    top: 128,
  };

  current = {
    map: '重庆',
    mapName: 'chongQing',
    red: .55,
    yellow: .3,
    green: .68,
    blue: .9,
    target: .7,
    active: 'green'
  };

  percent(data) {
    return Number(data * 100).toFixed(1) + '%';
  }

  constructor() { }

  ngOnInit() {

  }

}
