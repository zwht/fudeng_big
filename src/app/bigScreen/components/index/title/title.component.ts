import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.less']
})
export class TitleComponent implements OnInit {
  titleCpt={
    width: 1920,
    height: 90,
    left: 0,
    top: 0,
  }
  item1={
    width: 240,
    height: 70,
    left: 84,
    top: 41,
  }
  item2={
    width: 240,
    height: 70,
    left: 315,
    top: 41,
  }
  item3={
    width: 240,
    height: 70,
    left: 510,
    top: 41,
  }
  item4={
    width: 240,
    height: 70,
    left: 1264,
    top: 41,
  }
  item5={
    width: 240,
    height: 70,
    left: 1469,
    top: 41,
  }
  item7={
    width: 290,
    height: 70,
    left: 1680,
    top: 41,
  }
  constructor() { }

  ngOnInit() {
  }

}
