import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less']
})
export class PageComponent implements OnInit {
  id
  constructor(private activatedRoute: ActivatedRoute, ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

}
