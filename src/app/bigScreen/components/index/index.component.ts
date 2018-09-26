import { Component, OnInit } from '@angular/core';
import { scale } from '../../service/scale.service';
import { UserService } from '../../../share/restServices/UserService';
import { ActivatedRoute, Params } from '@angular/router';
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
  city;
  constructor(
    private activatedRoute: ActivatedRoute,
    private s: UserService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.city = params['city'] || 202;
    });
  }
}
