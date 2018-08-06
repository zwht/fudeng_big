import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pr-chart2',
  templateUrl: './pr-chart2.component.html',
  styleUrls: ['./pr-chart2.component.less']
})
export class PrChart2Component implements OnInit {
  chartBox = {
    width: 900,
    height: 450,
    left: 50+900+20,
    top: 128,
  }
  constructor() { }

  ngOnInit() {
  }

}
