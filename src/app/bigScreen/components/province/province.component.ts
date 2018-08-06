import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.less']
})
export class ProvinceComponent implements OnInit {
  bgBox={
    width: 1920,
    height: 1080,
    left: 0,
    top: 0,
  }
  constructor() { }

  ngOnInit() {
  }

}
