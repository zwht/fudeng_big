import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
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

  id
  key = 0
  palyTime;
  isPaly = false;
  activePage;
  actPath = true;
  menu = [
    {
      path: 'siChuan',
      name:'四川'
    },
    {
      path: 'chongQing',
      name:'重庆'
    },
    {
      path: 'huBei',
      name:'湖北'
    }
  ]
  constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute, ) { }

  ngOnInit() {
    debugger
    this.id = this.activatedRoute.snapshot.params['id'];
    this.menu.forEach(item=>{
      if(this.router.url.indexOf(item.path)>-1){
        this.activePage=item;
      }
    })
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
      }, 5000)
    }
  }
  //播放下一个菜单
  play() {
    this.getNextMenu();
    if (this.actPath) {
      this.router.navigate(['/page1', this.activePage.path]);
    } else {
      this.router.navigate(['/page2', this.activePage.path]);
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
  ngOnDestroy(){
    if (this.palyTime) clearInterval(this.palyTime)
  }
}
