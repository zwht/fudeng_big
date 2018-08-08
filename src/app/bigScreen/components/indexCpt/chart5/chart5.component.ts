import { Component, OnInit } from '@angular/core';
import { window } from '../../../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-chart5',
  templateUrl: './chart5.component.html',
  styleUrls: ['./chart5.component.less']
})
export class Chart5Component implements OnInit {
  chart5Cpt = {
    width: 500,
    height: 440,
    left: 1360,
    top: 607,
  }
  zongshu = 3026
  chartOption = {}
  constructor() { }

  ngOnInit() {
    let that = this
    this.chartOption = {
      title: {
        text: '当前贷款客户总数   Total number of loan customers',
        top: '5px',
        left: '10px',
        textStyle: {
          color: "#9CC4FF",
          fontWeight: '16px',
        }
      },

      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(50,50,50,0)',
        formatter: function (params, ticket, callback) {
          let baifenbi = params.value/that.zongshu*100
          let data = params.name + ':' + params.value
          let baifenzhi = '总占比:' + baifenbi.toFixed(2) + '%'
          return '<div class=".bigScreen_components_indexCpt_chart1"><div class="waikuang"><div class="zuoshang"><div class="zuoshang1"></div><div class="zuoshang2"></div></div><div class="youshang"><div class="youshang1"></div><div class="youshang2"></div></div><div class="neikuang" ><div><span>'+data+'</span></div>'+baifenzhi+'</div><div><div class="zuoxia1"></div><div class="zuoxia2"></div></div><div class="youxia"><div class="youxia1"></div><div class="youxia2"></div></div></div></div>';          
        },
        padding: 10
      },
      legend: {
        top: 'middle',
        right: 'right',
        orient: 'vertical',
        itemWidth :3,
        itemHeight :3,
        inactiveColor: 'RGBA(91, 157, 255, 0.3)',
        textStyle: {
          color: '#5B9DFF',
        },
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      },

      series: [
        {
          type: 'pie',
          radius: ['55%', '70%'],
          center:['40%', '50%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1548, name: '搜索引擎' }
          ]
        }
      ]
    }
  }

}
