import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pr-chart4',
  templateUrl: './pr-chart4.component.html',
  styleUrls: ['./pr-chart4.component.less']
})
export class PrChart4Component implements OnInit {
  chartBox = {
    width: 800,
    height: 450,
    left: 50 + 1000 + 20,
    top: 128 + 450 + 20,
  }
  constructor() { }
  chartOption = {}


  ngOnInit() {
    this.chartOption = {
      title: {
        text: '六款产品对应指标  Six product corresponding indicators',
        top: '15px',
        left: 'center',
        textStyle: {
          color: "#9CC4FF",
          fontWeight: 100,
          fontSize: 12,
        }
      },
      angleAxis: {
        max: 100,
      },
      radiusAxis: {
        type: 'category',
        data: ['客栈', 'MBL', 'SBL', 'GEEX', '房速贷', '房乐贷'],

      },
      polar: {
        radius: 100,
        center: ['35%', '38%'],
      },
      series: [{
        type: 'bar',
        data: [10, 0, 0, 0, 0, 0],
        coordinateSystem: 'polar',
        name: '客栈',
        center: ['35%', '38%'],
        stack: 'a',
      }, {
        type: 'bar',
        data: [0, 20, 0, 0, 0, 0],
        coordinateSystem: 'polar',
        name: 'MBL',
        center: ['35%', '38%'],
        stack: 'a'
      }, {
        type: 'bar',
        data: [0, 0, 30, 0, 0, 0],
        coordinateSystem: 'polar',
        name: 'SBL',
        center: ['35%', '38%'],
        stack: 'a'
      }, {
        type: 'bar',
        data: [0, 0, 0, 30, 0, 0],
        coordinateSystem: 'polar',
        name: 'GEEX',
        center: ['35%', '38%'],
        stack: 'a'
      }, {
        type: 'bar',
        data: [0, 0, 0, 0, 30, 0],
        coordinateSystem: 'polar',
        name: '房速贷',
        center: ['35%', '38%'],
        stack: 'a'
      }, {
        type: 'bar',
        data: [0, 0, 0, 0, 0, 30],
        coordinateSystem: 'polar',
        name: '房乐贷',
        center: ['35%', '38%'],
        stack: 'a'
      },],
    }

  }

}
