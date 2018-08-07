import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pr-chart1',
  templateUrl: './pr-chart1.component.html',
  styleUrls: ['./pr-chart1.component.less']
})
export class PrChart1Component implements OnInit {
  chartBox = {
    width: 900,
    height: 450,
    left: 50,
    top: 128,
  }
  chartOption = {}
  constructor() { }

  ngOnInit() {
    this.chartOption = {
      title: {
        text: '每天贷款投放量  Daily loan amount',
        top: '15px',
        left: '15px',
        textStyle: {
          color: "#9CC4FF",
          fontWeight: '16px',
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            color: "#124FFF"
          }
        },
        backgroundColor: '#05204F',
        borderColor: '#003E9A',
        borderWidth: 1,
        textStyle: {
          color: '#9CC4FF',
          fontSize: 12,
        },
        formatter: function (params, ticket, callback) {
          return '<div  style="color: red">Loading</div>';
      },
        padding: 10
      },
      legend: {
        top: 'middle',
        right: 'right',
        orient: 'vertical',
        inactiveColor: 'gray',
        itemHeight: 0,
        itemWidth: 10,
        textStyle: {
          color: '#5B9DFF',
        },
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
      },
      grid: {
        left: '3%',
        right: '20%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        axisLine: {
          lineStyle: {
            color: '#1F3C7A',
          }
        },
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        name :'(万元)',
        nameLocation : 'end',
        axisLine: {
          lineStyle: {
            color: '#1F3C7A',
          }
        },
        splitLine: {
          lineStyle: {
            color: '#1F3C7A'
          }
        },
        type: 'value'
      },

      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210],
          symbol:'none',
          smooth:true,
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310],
          symbol:'none',
          smooth:true,
        },
        {
          name: '视频广告',
          type: 'line',
          stack: '总量',
          data: [150, 232, 201, 154, 190, 330, 410],
          symbol:'none',
          smooth:true,
        },
        {
          name: '直接访问',
          type: 'line',
          stack: '总量',
          data: [320, 332, 301, 334, 390, 330, 320],
          symbol:'none',
          smooth:true,
        },
        {
          name: '搜索引擎',
          type: 'line',
          stack: '总量',
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          symbol:'none',
          smooth:true,
        }
      ]
    }
  }

}
