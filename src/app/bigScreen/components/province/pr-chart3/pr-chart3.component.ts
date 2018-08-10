import { Component, OnInit } from '@angular/core';
import { ScaleService } from 'src/app/bigScreen/service/scale.service';

@Component({
  selector: 'app-pr-chart3',
  templateUrl: './pr-chart3.component.html',
  styleUrls: ['./pr-chart3.component.less']
})
export class PrChart3Component implements OnInit {
  chartBox = {
    width: 1100,
    height: 500,
    left: 50,
    top: 128 + 400 + 20,
  }
  yMax = 100
  data = [66, 100, 71, 10, 54, 79, 51, 38, 79, 70, 30, 20, 37, 30, 30, 30, 17, 30]
  dataShadow = []
  dataAxis = ['成都城北分公司', '成都崇州分公司', '成都简阳服务中心', '成都彭州分公司', '成都郫县分公司', '成都双流分公司', '成都新都分公司', '成都新津分公司', '成都营业部', '成都营业二部', '昆明营业部', '四川达州分公司', '四川德阳分公司', '四川泸州服务中心', '四川眉山服务中心', '四川绵阳营销部', '四川内江分公司', '四川自贡营销部']
  constructor(
    private scaleService: ScaleService
  ) { }
  chartOption = {}

  proportion(i) {
    i = i * this.scaleService.widthScale
    return i
  }
  YMax() {
    for (let index = 0; index < this.data.length; index++) {
      let aaa = this.data[index];
      if (this.data[index] > this.yMax) {
        this.yMax = this.data[index]
      }
    }
    var aaa = this.yMax
    var bbb = Math.ceil(aaa / 10)
    bbb = bbb * 10
    this.yMax = bbb
  }

  ngOnInit() {

    this.YMax()

    for (var i = 0; i < this.data.length; i++) {
      this.dataShadow.push(this.yMax);
    }
    let that = this
    this.chartOption = {
      title: {
        text: '分公司对应指标完成情况   The completion of the corresponding index of bran',
        top: this.proportion(5),
        left: this.proportion(20),
        textStyle: {
          color: "#9CC4FF",
          fontSize: this.proportion(16),
          fontWeight: 'normal'
        }
      },

      grid: {
        left: this.proportion(100),
        right: this.proportion(100),
        bottom: this.proportion(125),
        top: this.proportion(100),
      },

      xAxis: {
        axisLine: {
          show: false,
          lineStyle: {
            color: '#557DD4',
          }
        },
        axisLabel: {
          rotate: 45,
          fontSize: this.proportion(12),
          margin: this.proportion(18)
        },
        axisTick: {
          show: false,
        },
        type: 'category',
        data: that.dataAxis,
      },

      yAxis: {
        interval: 10,
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#557DD4',
          },
        },
        axisLabel: {
          fontSize: this.proportion(12),
          margin :this.proportion(40),
          formatter :'{value}%'
        },
        splitLine: {
          show: false,
        },
        type: 'value'
      },
      series: [
        { // For shadow
          type: 'bar',
          itemStyle: {
            normal: { color: 'rgba(255,255,255,0.1)' }
          },
          barGap: '-100%',
          barCategoryGap: '40%',
          data: that.dataShadow,
          animation: false,
          barWidth: this.proportion(16),
          markLine: {
            silent: true,
            symbol: 'none',
            label: {
              fontSize : this.proportion(12),
              position: 'end',
              formatter: '{b}\n85%'
            },
            data: [
              {
                name: '目标 Target',
                yAxis: 85,
                lineStyle: {
                  color: 'RGBA(85, 125, 212, 1)'
                }
              },
            ]
          },
        },
        {
          type: 'bar',
          barWidth: this.proportion(16),
          itemStyle: {
            normal: {
              color: new window['echarts'].graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 0, color: 'RGBA(186, 109, 61, 0.5)' },
                  { offset: 1, color: 'RGBA(54, 90, 193, 0.5)' },
                ]
              )
            },
            emphasis: {
              color: new window['echarts'].graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 0, color: 'RGBA(186, 109, 61, 1)' },
                  { offset: 1, color: 'RGBA(54, 90, 193, 1)' }
                ]
              )
            }
          },
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: true,
              position: 'top',
              formatter :'{c}%',
              fontSize: this.proportion(12),
              color: 'RGBA(156, 196, 255, 1)',
            }
          },
          data: that.data,
        }
      ]
    }

  }

}
