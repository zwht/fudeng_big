import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../animations/routerTransition';
import * as bigScreenRouter from '../../bigScreen.module';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.less'],
  animations: [routerTransition]
})
export class ProvinceComponent implements OnInit {
  bgBox = {
    width: 1920,
    height: 1080,
    left: 0,
    top: 0,
  }
  palyTime;
  isPaly = true;
  activePage;
  menu = bigScreenRouter.routes[1].children
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute, ) { }

  ngOnInit() {
    this.activatedRoute
    this.palyInterval();
  }
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
  palyInterval() {
    if (this.palyTime) clearInterval(this.palyTime)
    if (this.isPaly) {
      this.palyTime = setInterval(() => {
        this.play();
      }, 5000)
    }
  }
  play() {
    this.getNextMenu();
    this.router.navigate(['/province/' + this.activePage.path]);
  }
  getNextMenu() {
    if (this.activePage) {
      this.menu.every((item, i) => {
        if (item.path == this.activePage.path) {
          if (i + 1 < this.menu.length) {
            this.activePage = this.menu[i + 1]
          } else {
            this.activePage = this.menu[0]
          }
          return false
        }
        return true
      })
    } else {
      this.activePage = this.menu[0]
    }
  }
}
