import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pr-chart4',
  templateUrl: './pr-chart4.component.html',
  styleUrls: ['./pr-chart4.component.less']
})
export class PrChart4Component implements OnInit {
  chartBox = {
    width: 800,
    height: 450,
    left: 50 + 1000 + 20,
    top: 128 + 450 + 20,
  }
  constructor() { }
  chartOption = {}
  chartOption2 = {}
  data = ['客栈', 'MBL', 'SBL', 'GEEX', '房速贷', '房乐贷']
  data1 = []
  itemStyle = [{
    normal: {
      color: new window['echarts'].graphic.LinearGradient(
        0, 0, 0, 1, [{
          offset: 0,
          color: 'RGBA(228, 139, 36, 0.2)'
        },
        {
          offset: 1,
          color: 'RGBA(228, 139, 36, 1)'
        },
        ]
      )
    }
  }, {
    normal: {
      color: new window['echarts'].graphic.LinearGradient(
        0, 0, 0, 1, [{
          offset: 0,
          color: 'RGBA(255, 63, 96, 0.2)'
        },
        {
          offset: 1,
          color: 'RGBA(255, 63, 96, 1)'
        },
        ]
      )
    }
  }, {
    normal: {
      color: new window['echarts'].graphic.LinearGradient(
        0, 0, 0, 1, [{
          offset: 0,
          color: 'RGBA(255, 63, 96, 0.2)'
        },
        {
          offset: 1,
          color: 'RGBA(255, 63, 96, 1)'
        },
        ]
      )
    }
  }, {
    normal: {
      color: new window['echarts'].graphic.LinearGradient(
        0, 0, 0, 1, [{
          offset: 0,
          color: 'RGBA(39, 39, 39, 0.2)'
        },
        {
          offset: 1,
          color: 'RGBA(39, 39, 39, 1)'
        },
        ]
      )
    }
  }, {
    normal: {
      color: new window['echarts'].graphic.LinearGradient(
        0, 0, 0, 1, [{
          offset: 0,
          color: 'RGBA(255, 63, 96, 0.2)'
        },
        {
          offset: 1,
          color: 'RGBA(255, 63, 96, 1)'
        },
        ]
      )
    }
  }, {
    normal: {
      color: new window['echarts'].graphic.LinearGradient(
        0, 0, 0, 1, [{
          offset: 0,
          color: 'RGBA(123, 132, 213, 0.2)'
        },
        {
          offset: 1,
          color: 'RGBA(123, 132, 213, 1)'
        },
        ]
      )
    }
  },{
    normal: {
      color: new window['echarts'].graphic.LinearGradient(
        0, 0, 0, 1, [{
          offset: 0,
          color: 'RGBA(255, 255, 255, 0.1)'
        },
        {
          offset: 1,
          color: 'RGBA(255, 255, 255, 0.1)'
        },
        ]
      )
    }
  },]


  ngOnInit() {
    this.chartOption2 = {
      angleAxis: {
        max: 100,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        splitLine: {
            show: false,
        },
    },
    radiusAxis: {
        type: 'category',
        axisLine: {
            show: false,
        },
        axisTick: {
            alignWithLabel: true,
            show: false,
        },
        axisLabel: {
            show: false
        },
    },
    polar: {
        radius: '80%',
    },
    series: [{
        barWidth: 1,
        center: ['40%', '60%'],
        type: 'bar',
        data: [100, 0, 0, 0, 0, 0],
        coordinateSystem: 'polar',
        name: '客栈',
        itemStyle: this.itemStyle[6],
        stack: 'a',
    }, {
        type: 'bar',
        center: ['40%', '60%'],
        data: [0, 100, 0, 0, 0, 0],
        itemStyle: this.itemStyle[6],
        coordinateSystem: 'polar',
        name: 'MBL',
        stack: 'a'
    }, {
        type: 'bar',
        center: ['40%', '60%'],
        data: [0, 0, 100, 0, 0, 0],
        itemStyle: this.itemStyle[6],
        coordinateSystem: 'polar',
        name: 'SBL',
        stack: 'a'

    }, {
        barWidth: 10,
        center: ['40%', '60%'],
        type: 'bar',
        data: [0, 0, 0, 100, 0, 0],
        itemStyle: this.itemStyle[6],
        coordinateSystem: 'polar',
        name: 'GEEX',
        stack: 'a'
    }, {
        barWidth: 10,
        center: ['40%', '60%'],
        type: 'bar',
        data: [0, 0, 0, 0, 100, 0],
        coordinateSystem: 'polar',
        itemStyle: this.itemStyle[6],
        name: '房速贷',
        stack: 'a'
    }, {
        barWidth: 10,
        center: ['40%', '60%'],
        type: 'bar',
        itemStyle: this.itemStyle[6],
        data: [0, 0, 0, 0, 0, 100],
        coordinateSystem: 'polar',
        name: '房乐贷',
        stack: 'a'
    }, ],
    }
    this.chartOption = {
      title: {
        text: '六款产品对应指标  Six product corresponding indicators',
        top: '15px',
        left: '10%',
        textStyle: {
          color: "#9CC4FF",
          fontWeight: 100,
          fontSize: 12,
        }
      },
      angleAxis: {
        max: 100,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
      radiusAxis: {
        // boundaryGap : false,
        type: 'category',
        data: this.data,
        z: 10,
        axisLine: {
          show: false,
        },
        axisTick: {
          alignWithLabel: true,
          show: false,
        },
        axisLabel: {
          interval: 0,
          margin: 3,
          showMinLabel: true,
          showMaxLabel: true,
          color: 'RGBA(85, 125, 212, 1)',
        },
      },
      polar: {
        radius: '80%',
        center: ['40%', '60%'],
        backgroundColor: 'RGBA(1, 20, 79, 1)',
      },
      series: [{
        center: ['40%', '60%'],
        barWidth: 5,
        type: 'bar',
        data: [70, 0, 0, 0, 0, 0],
        coordinateSystem: 'polar',
        name: '客栈',
        stack: 'a',
        itemStyle: this.itemStyle[0],
      }, {
        center: ['40%', '60%'],
        type: 'bar',
        data: [0, 40, 0, 0, 0, 0],
        coordinateSystem: 'polar',
        name: 'MBL',
        stack: 'a',
        itemStyle: this.itemStyle[1],
      }, {
        type: 'bar',
        center: ['40%', '60%'],
        data: [0, 0, 80, 0, 0, 0],
        coordinateSystem: 'polar',
        name: 'SBL',
        stack: 'a',
        itemStyle: this.itemStyle[2],
      }, {
        barWidth: 10,
        type: 'bar',
        center: ['40%', '60%'],
        data: [0, 0, 0, 70, 0, 0],
        coordinateSystem: 'polar',
        name: 'GEEX',
        stack: 'a',
        itemStyle: this.itemStyle[3],
      }, {
        barWidth: 10,
        type: 'bar',
        center: ['40%', '60%'],
        data: [0, 0, 0, 0, 70, 0],
        coordinateSystem: 'polar',
        name: '房速贷',
        stack: 'a',
        itemStyle: this.itemStyle[4],
      }, {
        barWidth: 10,
        type: 'bar',
        center: ['40%', '60%'],
        data: [0, 0, 0, 0, 0, 70],
        coordinateSystem: 'polar',
        name: '房乐贷',
        stack: 'a',
        itemStyle: this.itemStyle[5],
      },],
      legend: {
        top: '20%',
        right: '5%',
        orient: 'vertical',
        itemHeight: 1,
        itemWidth: 10,
        textStyle: {
          color: '#5B9DFF',
        },
        data: ['客栈', 'MBL', 'SBL', 'GEEX', '房速贷', '房乐贷']
      }
    }
  }
}
