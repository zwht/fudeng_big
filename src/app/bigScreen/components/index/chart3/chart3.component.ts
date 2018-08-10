import { Component, OnInit } from '@angular/core';
import { scale } from 'src/app/bigScreen/service/scale.service';


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
  indicator = [
  { text: '核芯科技', max: 2400 },
  { text: '天琥教育', max: 2400 },
  { text: '翡翠教育', max: 2400 },
  { text: '云琥在线', max: 2400 },
  { text: '广州牵引力', max: 2400 },
  { text: '广州熳点', max: 2400 },
  { text: '恒企教育', max: 2400 },
  { text: '潭州教育', max: 2400 }
]

  constructor(
    
  ) { }
  proportion(i) {
    i = i * scale.widthScale
    debugger
    return i
  }

  ngOnInit() {
    let that = this

    this.chartOption = {
      title: {
        text: '当前贷款投放总量   Total loan amount',
        top: this.proportion(0),
        left: this.proportion(96),
        textStyle: {
          color: "#9CC4FF",
          fontSize: this.proportion(16),
          fontWeight: 'normal'
        }
      },

      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(0,0,0,0)',
        formatter: function (params, ticket, callback) {
          let data = ''
          for (let index = 0; index < params.data.value.length; index++) {
                let shuju = that.indicator[index].text + ':' + params.data.value[index]  
                data = data +'<div><span>'+ shuju + '</span></div>'
          }
          return '<div class=".bigScreen_components_indexCpt_chart1"><div class="waikuang"><div class="zuoshang"><div class="zuoshang1"></div><div class="zuoshang2"></div></div><div class="youshang"><div class="youshang1"></div><div class="youshang2"></div></div><div class="neikuang" ><div>'+data+'</div></div><div><div class="zuoxia1"></div><div class="zuoxia2"></div></div><div class="youxia"><div class="youxia1"></div><div class="youxia2"></div></div></div></div>';
        },
        padding: this.proportion(10)
      },

      radar:{
        name:{
          color : 'RGBA(85, 125, 212, 1)',
          fontSize :this.proportion(12)
        },
        nameGap : this.proportion(5),
        indicator: this.indicator,
        center: [this.proportion(200), this.proportion(230)],
        radius: this.proportion(157),
        splitLine: {
          lineStyle: {
            color: 'RGBA(31, 60, 122, 1)',
          }
        },
        axisLine: {
          lineStyle: {
            color: 'RGBA(31, 60, 122, 1)',
          }
        },
        splitArea: {
          areaStyle:{
            color: 'RGBA(0,0,0,0.4)',
          }
        },
      },

      series: [
        {
          itemStyle: {
            color: 'RGBA(154, 103, 73, 1)',
          },
          lineStyle: {
            width: 0
          },
          symbol: "circle",
          symbolSize: this.proportion(6),
          type: 'radar',

          data: [{
            name: '1111',
            value: [2000, 2100, 1900, 1800, 1600, 2200, 2300, 1700],
            areaStyle: {
              normal: {
                color: new window['echarts'].graphic.RadialGradient(0.5, 0.5, 0.5, [
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
