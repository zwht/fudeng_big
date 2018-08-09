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
  constructor() { }

  ngOnInit() {
  }

}
