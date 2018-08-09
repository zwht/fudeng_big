import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-time',
  templateUrl: './top-time.component.html',
  styleUrls: ['./top-time.component.less']
})
export class TopTimeComponent implements OnInit {
  item7={
    width: 290,
    height: 70,
    left: 1680,
    top: 37,
  }
  intervalTime;
  dayTime;
  time;
  day;
  constructor() { }

  ngOnInit() {
    this.getDate()
    this.intervalTime=setInterval(()=>{
      this.getDate()
      debugger
    },1000)
  }
  getDate(){
    let d=new Date();
    this.dayTime=this.setNb(d.getFullYear())+'-'+this.setNb((d.getMonth()+1))+'-'+this.setNb(d.getDate())
    this.time=this.setNb(d.getHours())+":"+this.setNb(d.getMinutes())+":"+this.setNb(d.getSeconds());
    this.day=this.getDay(d.getDay())
  }
  ngOnDestroy(){
    clearInterval(this.intervalTime);
  }
  setNb(k){
    if(k<10){
      return '0'+k;
    }
    return k;
  }
  getDay(k){
    let a=['Sud','Mod','Tud','Wed','Thd','Frd','Sad']
    return a[k];
  }
}
