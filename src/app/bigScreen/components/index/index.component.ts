import { Component, OnInit } from '@angular/core';
import { ScaleService } from '../../service/scale.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
  bgBox = {
    width: 1920,
    height: 1080,
    left: 0,
    top: 0,
  };

  constructor(
    private s:ScaleService
  ) { }

  ngOnInit() {
    window
    debugger
  }

}
