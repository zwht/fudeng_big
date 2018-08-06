import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pr-chart4',
  templateUrl: './pr-chart4.component.html',
  styleUrls: ['./pr-chart4.component.less']
})
export class PrChart4Component implements OnInit {
  chartBox = {
    width: 800,
    height: 450,
    left: 50+1000+20,
    top: 128+450+20,
  }
  constructor() { }

  ngOnInit() {
  }

}
