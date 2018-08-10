import { Component, OnInit } from '@angular/core';
import { ScaleService } from 'src/app/bigScreen/service/scale.service';

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.less']
})
export class Chart2Component implements OnInit {
  chart2Cpt = {
    width: 751,
    height: 436,
    left: 50 + 751 + 319,
    top: 128,
  }
  data = [220, 182, 191, 234, 290, 330, 310]
  yMax = 500;
  dataShadow = [];
  dataShadow2 = [];

  chartOption = {}
  constructor(
    private scaleService: ScaleService
  ) { }

  YMax() {
    for (let index = 0; index < this.data.length; index++) {
      this.dataShadow.push(this.yMax);
      this.dataShadow2.push(10);
    }
  }

  proportion(i) {
    i = i * this.scaleService.widthScale
    return i
  }

  ngOnInit() {

    this.YMax()

    this.chartOption = {
      title: {
        text: '当前贷款余额   Loan balance',
        top: this.proportion(37),
        left: this.proportion(32),
        textStyle: {
          color: "#9CC4FF",
          fontSize: this.proportion(16),
          fontWeight: 'normal'
        }
      },
      grid: {
        left: this.proportion(33),
        right: this.proportion(42),
        bottom: this.proportion(40),
        top: this.proportion(116),
        containLabel: true,
      },

      xAxis: {
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          rotate: 45,
          color : '#557DD4',
          margin: this.proportion(21),
          fontSize :this.proportion(12)
        },
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },

      yAxis: {
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#557DD4',
          }
        },
        splitLine: {
          show: false,
        },
        type: 'value'
      },

      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(50,50,50,0)',
        formatter: function (params, ticket, callback) {
          let shuju = ''
          shuju = '<div><span>' + params[1].value + '万元</span></div>'
          return '<div class=".bigScreen_components_indexCpt_chart1"><div class="waikuang"><div class="zuoshang"><div class="zuoshang1"></div><div class="zuoshang2"></div></div><div class="youshang"><div class="youshang1"></div><div class="youshang2"></div></div><div class="neikuang" ><div><span>' + params[0].name + '</span></div>' + shuju + '</div><div><div class="zuoxia1"></div><div class="zuoxia2"></div></div><div class="youxia"><div class="youxia1"></div><div class="youxia2"></div></div></div></div>';
        },
        padding: 10
      },

      barWidth: 28,
      series: [{
        type: 'bar',
        itemStyle: {
          normal: { color: 'RGBA(31, 60, 122, 0.2)' }
        },
        barGap: '-100%',
        barCategoryGap: '40%',
        data: this.dataShadow,
        animation: false
      },
      {
        data: this.data,
        type: 'bar',
        stack: 'sum',
        itemStyle: {
          color: 'RGBA(123, 159, 255, 0.5)'
        },
      },
      {
        data: this.dataShadow2,
        type: 'bar',
        stack: 'sum',
        itemStyle: {
          color: 'RGBA(247, 146, 83, 1)'
        },
      },
      ]
    }
  }
}
