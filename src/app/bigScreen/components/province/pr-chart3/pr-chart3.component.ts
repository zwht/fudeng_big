import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pr-chart3',
  templateUrl: './pr-chart3.component.html',
  styleUrls: ['./pr-chart3.component.less']
})
export class PrChart3Component implements OnInit {
  chartBox = {
    width: 1000,
    height: 450,
    left: 50,
    top: 128+450+20,
  }
  constructor() { }

  ngOnInit() {
  }

}
