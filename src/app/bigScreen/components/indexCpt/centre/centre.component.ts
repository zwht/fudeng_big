import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centre',
  templateUrl: './centre.component.html',
  styleUrls: ['./centre.component.less']
})
export class CentreComponent implements OnInit {
  centreCpt={
    width: 224,
    height: 224,
    left: 849,
    top: 170,
  }
  constructor() { }

  ngOnInit() {
  }

}
