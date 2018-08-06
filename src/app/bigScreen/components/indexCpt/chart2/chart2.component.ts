import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.less']
})
export class Chart2Component implements OnInit {
  chart2Cpt={
    width: 751,
    height: 436,
    left: 50+751+319,
    top: 128,
  }
  constructor() { }

  ngOnInit() {
  }

}
