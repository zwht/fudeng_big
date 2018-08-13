import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { BigScreenService } from '../../../../share/restServices/BigScreen';

@Component({
  selector: 'app-pr-title',
  templateUrl: './pr-title.component.html',
  styleUrls: ['./pr-title.component.less']
})
export class PrTitleComponent implements OnInit {
  titleCpt = {
    width: 1920,
    height: 90,
    left: 0,
    top: 0,
  }
  item1 = {
    width: 240,
    height: 70,
    left: 86,
    top: 41,
  }
  item2 = {
    width: 240,
    height: 70,
    left: 335,
    top: 41,
  }
  item3 = {
    width: 240,
    height: 70,
    left: 533,
    top: 41,
  }
  item4 = {
    width: 240,
    height: 70,
    left: 1231,
    top: 41,
  }
  item5 = {
    width: 240,
    height: 70,
    left: 1439,
    top: 41,
  }
  item6 = {
    width: 240,
    height: 70,
    left: 1570,
    top: 41,
  }



  id
  key = 0
  palyTime;
  isPaly = false;
  activePage;
  actPath = true;
  jgTime = 5000;
  menu = [
    {
      path: 'siChuan',
      name: '四川'
    },
    {
      path: 'chongQing',
      name: '重庆'
    },
    {
      path: 'huBei',
      name: '湖北'
    }
  ]
  headerInfo = {};
  constructor(
    private bigScreenService: BigScreenService,
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute, ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.menu.forEach(item => {
      if (this.router.url.indexOf(item.path) > -1) {
        this.activePage = item;
      }
    })
    this.palyInterval();
    this.initTitle();
  }
  initTitle() {
    this.bigScreenService['basic']({}).then(rep => {
      this.headerInfo = rep.data;
    }).catch(error => { });
  }
  playClick(key) {
    this.isPaly = key;
    this.palyInterval();
  }
  //动画方法
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
  //定时播放菜单
  palyInterval() {
    if (this.palyTime) clearInterval(this.palyTime)
    if (this.isPaly) {
      this.palyTime = setInterval(() => {
        this.play();
      }, this.jgTime)
    }
  }
  //播放下一个菜单
  play() {
    this.getNextMenu();
    if (this.actPath) {
      this.router.navigate(['/province1', this.activePage.path]);
    } else {
      this.router.navigate(['/province2', this.activePage.path]);
    }
    setTimeout(() => {
      this.titleService.setTitle('' + this.activePage.name);
    }, 10)
    this.actPath = !this.actPath;
  }
  // 获取下一个选中菜单
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
  ngOnDestroy() {
    if (this.palyTime) clearInterval(this.palyTime)
  }
}
