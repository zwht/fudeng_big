import { Component, OnInit } from '@angular/core';
import { scale } from 'src/app/bigScreen/service/scale.service';
import { BigScreenService } from 'src/app/share/restServices/BigScreen';


@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.less']
})
export class Chart1Component implements OnInit {
  chart1Cpt = {
    width: 751,
    height: 436,
    left: 50,
    top: 128,
  }
  chartOption = {}
  constructor(
    private bigScreenService: BigScreenService
  ) { }
  fdata = []
  time = []
  school = []
  lsdailyLoanamount = []
  dailyLoanamount = []

  proportion(i) {
    i = i * scale.widthScale
    return i
  }

  diushuju(){
    for (let index = 0; index < this.school.length; index++) {
      this.fdata.push({
        name: this.school[index],
        type: 'line',
        data: this.dailyLoanamount[index],
        symbol: 'none',
        smooth: true,
      })
    }
  }

  getdata() {
    this.bigScreenService['dailyLoanAmountQuery']({
      params: {},
      data: {
        startTime :1262275200000,
        endTime:1893427200000
      }
    })
      .then(response => {
        if (response.errorCode == 0) {
          for (let index = 0; index < response.data[0].length; index++) {
            this.time.push(response.data[0][index].time)
            this.school.push(response.data[index][0].school)
          }
          for (let index1 = 0; index1 < response.data.length; index1++) {
            for (let index2 = 0; index2 < response.data[0].length; index2++) {
              this.lsdailyLoanamount.push((response.data[index1][index2].dailyLoanamount/10000).toFixed(2))
            }
            this.dailyLoanamount.push(this.lsdailyLoanamount)
            this.lsdailyLoanamount = []
          }

          this.diushuju()
          this.charoption()
        }
      })
  }

  ngOnInit() {
    this.getdata()
    console.log(this.fdata);
    
  }

  charoption() {
    this.chartOption = {
      title: {
        text: '每日贷款投放量  Daily loan amount',
        top: this.proportion(31),
        left: this.proportion(30),
        textStyle: {
          color: "#9CC4FF",
          fontSize: this.proportion(16),
          fontWeight: 'normal'
        }
      },

      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            color: 'RGBA(18, 79, 255, 0.5)'
          },
        },
        backgroundColor: 'rgba(50,50,50,0)',
        formatter: function (params, ticket, callback) {
          let shuju = ''
          for (let index = 0; index < params.length; index++) {
            let data1
            data1 = '<div><span>' + params[index].seriesName + ' : ' + params[index].value + '万元</span></div>'
            shuju = shuju + data1
          }
          return '<div class=".bigScreen_components_indexCpt_chart1"><div class="waikuang"><div class="zuoshang"><div class="zuoshang1"></div><div class="zuoshang2"></div></div><div class="youshang"><div class="youshang1"></div><div class="youshang2"></div></div><div class="neikuang" ><div><span>' + params[0].name + '</span></div>' + shuju + '</div><div><div class="zuoxia1"></div><div class="zuoxia2"></div></div><div class="youxia"><div class="youxia1"></div><div class="youxia2"></div></div></div></div>';
        },
        padding: 10
      },

      legend: {
        top: this.proportion(105),
        left: this.proportion(631),
        orient: 'vertical',
        inactiveColor: 'RGBA(91, 157, 255, 0.3)',
        itemHeight: this.proportion(2),
        itemWidth: this.proportion(12),
        textStyle: {
          fontSize: this.proportion(12),
          color: '#5B9DFF',
        },
        data: this.school
      },

      grid: {
        left: this.proportion(34),
        right: this.proportion(159),
        bottom: this.proportion(74),
        top: this.proportion(109),
        containLabel: true,
      },

      xAxis: {
        axisLine: {
          lineStyle: {
            color: '#1F3C7A',
          }
        },
        axisTick: {
          inside: true,
          lineStyle: {
            color: '#1F3C7A'
          },
        },
        axisLabel: {
          color: '#557DD4',
          margin: this.proportion(21),
          fontSize: this.proportion(12),
        },
        type: 'category',
        boundaryGap: false,
        data: this.time
      },

      yAxis: {
        axisLine: {
          lineStyle: {
            color: '#1F3C7A',
          }
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: '#557DD4',
          margin: this.proportion(24),
          fontSize: this.proportion(12),
        },
        splitLine: {
          lineStyle: {
            color: '#1F3C7A'
          }
        },
        type: 'value'
      },

      dataZoom: [{
        left: this.proportion(79),
        right: this.proportion(159),
        bottom: this.proportion(30),
        top: this.proportion(380),
        start: 0,
        end: 50,
        fillerColor: 'RGBA(85, 125, 212, 0.2)',
        borderColor: 'RGBA(31, 60, 122, 1)',
        handleSize: '80%',
        textStyle: {
          color: '#557DD4',
        },
      }],
      series: this.fdata
    }
  }
}
