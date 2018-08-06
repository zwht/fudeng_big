import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pr-chart1',
  templateUrl: './pr-chart1.component.html',
  styleUrls: ['./pr-chart1.component.less']
})
export class PrChart1Component implements OnInit {
  chartBox = {
    width: 900,
    height: 450,
    left: 50,
    top: 128,
  }
  constructor() { }

  ngOnInit() {
  }

}
