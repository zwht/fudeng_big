import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart4',
  templateUrl: './chart4.component.html',
  styleUrls: ['./chart4.component.less']
})
export class Chart4Component implements OnInit {
  chart4Cpt={
    width: 760,
    height: 440,
    left: 576,
    top: 607,
  }
  chartOption = {}
  constructor() { }

  ngOnInit() {
    this.chartOption = {
      title: {
        text: '每日贷款余额  Daily loan balance',
        top: '15px',
        left: '15px',
        textStyle: {
          color: "#9CC4FF",
          fontWeight: '16px',
        }
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(50,50,50,0)',
        formatter: function (params, ticket, callback) {
          let shuju = ''
          for (let index = 0; index < params.length; index++) {
            let data1
            data1 = '<div><span>'+params[index].seriesName+' : '+params[index].value+'万元</span></div>'
            shuju = shuju + data1
          }
          return '<div class=".bigScreen_components_indexCpt_chart1"><div class="waikuang"><div class="zuoshang"><div class="zuoshang1"></div><div class="zuoshang2"></div></div><div class="youshang"><div class="youshang1"></div><div class="youshang2"></div></div><div class="neikuang" ><div><span>'+params[0].name+'</span></div>'+shuju+'</div><div><div class="zuoxia1"></div><div class="zuoxia2"></div></div><div class="youxia"><div class="youxia1"></div><div class="youxia2"></div></div></div></div>';
        },
        padding: 10
      },
      legend: {
        top: '20%',
        right: 'right',
        orient: 'vertical',
        inactiveColor: 'RGBA(91, 157, 255, 0.3)',
        itemHeight: 0,
        itemWidth: 10,
        textStyle: {
          color: '#5B9DFF',
        },
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
      },
      grid: {
        left: '3%',
        right: '15%',
        bottom: '15%',
        containLabel: true,
      },
      xAxis: {
        axisLine: {
          lineStyle: {
            color: '#557DD4',
          }
        },
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        name: '(万元)',
        nameLocation: 'end',
        axisLine: {
          lineStyle: {
            color: '#557DD4',
          }
        },
        splitLine: {
          lineStyle: {
            color: '#1F3C7A'
          }
        },
        type: 'value'
      },
      dataZoom: [{
        start: 0,
        end: 50,
        fillerColor : 'RGBA(85, 125, 212, 0.2)',
        borderColor : 'RGBA(31, 60, 122, 1)',
        handleSize : '80%',
        textStyle :{
          color : '#557DD4',
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
