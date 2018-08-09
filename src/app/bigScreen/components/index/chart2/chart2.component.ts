import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
    for (let index = 0; index < this.data.length; index++) {
      this.dataShadow.push(this.yMax);
      this.dataShadow2.push(10);
    }

    this.chartOption = {
      title: {
        text: '当前贷款余额   Loan balance',
        top: '15px',
        left: '15px',
        textStyle: {
          color: "#9CC4FF",
          fontWeight: '16px',
        }
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
        },
        axisTick: {
          show: false,
        },
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },

      yAxis: {
        name: '(万元)',
        nameLocation: 'end',
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
      cursor : 'auto',
      itemStyle: {
        color: 'RGBA(123, 159, 255, 0.7)'
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(50,50,50,0)',
        formatter: function (params, ticket, callback) {
          let shuju = ''
          shuju = '<div><span>'+params[1].value+'万元</span></div>'
          return '<div class=".bigScreen_components_indexCpt_chart1"><div class="waikuang"><div class="zuoshang"><div class="zuoshang1"></div><div class="zuoshang2"></div></div><div class="youshang"><div class="youshang1"></div><div class="youshang2"></div></div><div class="neikuang" ><div><span>'+params[0].name+'</span></div>'+shuju+'</div><div><div class="zuoxia1"></div><div class="zuoxia2"></div></div><div class="youxia"><div class="youxia1"></div><div class="youxia2"></div></div></div></div>';
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
