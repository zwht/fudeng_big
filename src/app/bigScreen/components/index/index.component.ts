import { Component, OnInit } from '@angular/core';
import { ScaleService } from '../../service/scale.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
  cpTitle = {
    width: 1300,
    height: 45,
    left: 31 + 196,
    top: 59 + 65,
  };
  constructor(
    private s:ScaleService
  ) { }

  ngOnInit() {
    window
    debugger
  }

}
