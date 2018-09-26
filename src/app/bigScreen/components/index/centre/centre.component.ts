import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

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
  city
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.city = params['city'] || 202;
      
    });
  }

}
