import { Component, OnInit } from '@angular/core';
import { scale } from 'src/app/bigScreen/service/scale.service';


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
    
  ) { }

  
  proportion(i) {
    i = i * scale.widthScale
    return i
  }

  ngOnInit() {
    this.chartOption = {
      title: {
        text: '每天贷款投放量  Daily loan amount',
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
        axisPointer:{
          lineStyle :{
            color : 'RGBA(18, 79, 255, 0.5)'
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
          fontSize :this.proportion(12),
          color: '#5B9DFF',
        },
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
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
          fontSize :this.proportion(12),
        },
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },

      yAxis: {
        axisLine: {
          lineStyle: {
            color: '#1F3C7A',
          }
        },
        axisTick :{
          show: false,
        },
        axisLabel :{
          color: '#557DD4',
          margin : this.proportion(24),
          fontSize :this.proportion(12),
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

      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210],
          symbol: 'none',
          smooth: true,
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310],
          symbol: 'none',
          smooth: true,
        },
        {
          name: '视频广告',
          type: 'line',
          stack: '总量',
          data: [150, 232, 201, 154, 190, 330, 410],
          symbol: 'none',
          smooth: true,
        },
        {
          name: '直接访问',
          type: 'line',
          stack: '总量',
          data: [320, 332, 301, 334, 390, 330, 320],
          symbol: 'none',
          smooth: true,
        },
        {
          name: '搜索引擎',
          type: 'line',
          stack: '总量',
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          symbol: 'none',
          smooth: true,
        }
      ]
    }
  }

}
