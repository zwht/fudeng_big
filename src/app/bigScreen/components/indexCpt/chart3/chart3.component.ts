import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chart3',
  templateUrl: './chart3.component.html',
  styleUrls: ['./chart3.component.less']
})
export class Chart3Component implements OnInit {
  chart3Cpt = {
    width: 500,
    height: 440,
    left: 50,
    top: 607,
  }
  chartOption = {}

  constructor() { }

  ngOnInit() {

    this.chartOption = {
      title: {
        text: '当前贷款投放总量  Total loan amount',
        left: '30px',
        textStyle: {
          color: "#9CC4FF",
          fontWeight: '16px',
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      radar:
      {
        indicator: [
          { text: '核芯科技', max: 2400 },
          { text: '天琥教育', max: 2400 },
          { text: '翡翠教育', max: 2400 },
          { text: '云琥在线', max: 2400 },
          { text: '广州牵引力', max: 2400 },
          { text: '广州熳点', max: 2400 },
          { text: '恒企教育', max: 2400 },
          { text: '潭州教育', max: 2400 },
        ],
        radius: 90,

        splitLine: {
          lineStyle: {
            color: 'RGBA(31, 60, 122, 1)',
          }
        },
        splitArea: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: 'RGBA(31, 60, 122, 1)'
          }
        },
      },
      series: [
        {
          itemStyle: {
            color: 'RGBA(154, 103, 73, 0)'
          },
          // symbol: 'none',
          type: 'radar',
          data: [{
            value: [2000, 2100, 1900, 1800, 1600, 2200, 2300, 1700],
            areaStyle: {
              normal: {
                  opacity: 0.7,
                  color: new window['echarts'].graphic.RadialGradient(0.5, 0.5, 0.5,[
                      {
                          color: 'RGBA(154, 103, 73, 0)',
                          offset: 0
                      },
                      {
                          color: 'RGBA(154, 103, 73, 1)',
                          offset: 1
                      }
                  ])
              }
          }
          }],
        },
      ]
    }
  }
}
