import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pr-title',
  templateUrl: './pr-title.component.html',
  styleUrls: ['./pr-title.component.less']
})
export class PrTitleComponent implements OnInit {
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
