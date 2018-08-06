import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-chong-qing',
  templateUrl: './chong-qing.component.html',
  styleUrls: ['./chong-qing.component.less']
})
export class ChongQingComponent implements OnInit {
  signal:string;
  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.signal = 'off';
  }

}
