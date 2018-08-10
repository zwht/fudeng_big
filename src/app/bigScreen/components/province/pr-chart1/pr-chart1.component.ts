import { Component, OnInit } from '@angular/core';
import { PercentPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

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

  map = {
    chongQing: '重庆',
    siChuan: '四川',
    huBei: '湖北'
  };

  percent(data) {
    return this.myPrecent.transform(data);
    // return Number(data * 100).toFixed(1) + '%';
  }

  constructor(public myPrecent: PercentPipe, private route: ActivatedRoute) { }

  ngOnInit() {
    this.current = {
      ...this.current,
      map: this.map[this.route.snapshot.paramMap.get('id')],
      mapName: this.route.snapshot.paramMap.get('id')
    };
  }

}
