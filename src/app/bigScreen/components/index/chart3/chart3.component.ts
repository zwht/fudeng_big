import { Component, OnInit } from '@angular/core';
import { scale } from 'src/app/bigScreen/service/scale.service';
import { BigScreenService } from 'src/app/share/restServices/bigScreen';


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
  indicator = []
  school = []
  loanAmountSum = []
  yMax = 300;


  constructor(
    private bigScreenService: BigScreenService
  ) { }

  diushuju(){
    for (let index = 0; index < this.school.length; index++) {
      this.indicator.push({text:this.school[index],max:this.yMax})
    }
  }

  MAX(){
    var aaa = Math.max(...this.loanAmountSum);
    var bbb = Math.ceil(aaa / 100)
    bbb = bbb * 100
    this.yMax = bbb
  }

  getdata() {
    this.bigScreenService['totalloanamountQuery']({
      params: {
      },
      data: {}
    })
      .then(response => {
        if (response.errorCode == 0) {
          for (let index = 0; index < response.data.length; index++) {
            this.school.push(response.data[index][0].school)
            this.loanAmountSum.push((response.data[index][0].loanAmountSum/10000).toFixed(2))
          }
          this.MAX()
          this.diushuju()
          this.chartoption()
        }
      })
  }

  proportion(i) {
    i = i * scale.widthScale
    return i
  }
  ngOnInit() {
    this.getdata()
  }

  chartoption(){
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
                data = data +'<div><span>'+ shuju + '万元</span></div>'
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
            value: this.loanAmountSum,
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
