import { Component, OnInit } from '@angular/core';
import { scale } from '../../../service/scale.service';
import { BigScreenService } from '../../../../share/restServices/BigScreen';

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
  zongshu = 0
  chartOption = {}
  school = []
  loansCount = []
  fdata = []
  color = ['RGBA(255, 160, 103, 1)','RGBA(72, 137, 255, 1)','RGBA(255, 63, 96, 1)','RGBA(18, 79, 255, 1)','RGBA(29, 174, 239, 1)','RGBA(185, 205, 106, 1)','RGBA(182, 84, 229, 1)','RGBA(89, 89, 254, 1)','RGBA(95, 169, 104, 1)']
  schoolshu = {
    广州牵引力 : 0,
    核芯科技 : 0,
    天琥教育 : 0,
    潭州教育 : 0,
    翡翠教育 : 0,
    云琥在线 : 0,
    恒企教育 : 0,
    广州熳点 : 0,
    一路时尚 : 0,
  }

  constructor(
    private bigScreenService: BigScreenService
  ) { }
  proportion(i) {
    i = i * scale.widthScale
    return i
  }

  diushuju(){
    for (let index = 0; index < this.school.length; index++) {
      this.fdata.push({
        value:this.loansCount[index], 
        name:this.school[index],
        itemStyle:{
          color:this.color[index]
        }
      })
      this.zongshu = this.zongshu + this.loansCount[index]
      this.schoolshu[this.school[index]] = this.loansCount[index]
    }
  }

  getdata() {
    this.bigScreenService['tolannumberofloancustomersQuery']({
      params: {
      },
      data: {}
    })
      .then(response => {
        if (response.errorCode == 0) {
          for (let index = 0; index < response.data.length; index++) {
            this.school.push(response.data[index][0].school)
            this.loansCount.push(response.data[index][0].loansCount)
          }
          this.diushuju()
          this.chartoption()
        }
      })
  }

  ngOnInit() {
    this.getdata()
  }

  chartoption() {
    let that = this
    this.chartOption = {
      title: {
        text: '当前贷款客户总数   Total number of loan customers',
        top: this.proportion(0),
        left: this.proportion(50),
        textStyle: {
          color: "#9CC4FF",
          fontSize: this.proportion(16),
          fontWeight: 'normal'
        }
      },

      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(50,50,50,0)',
        formatter: function (params, ticket, callback) {
          let baifenbi = params.value / that.zongshu * 100
          let data = params.name + ':' + params.value + '位'
          let baifenzhi = '总占比:' + baifenbi.toFixed(2) + '%'
          return '<div class=".bigScreen_components_indexCpt_chart1"><div class="waikuang"><div class="zuoshang"><div class="zuoshang1"></div><div class="zuoshang2"></div></div><div class="youshang"><div class="youshang1"></div><div class="youshang2"></div></div><div class="neikuang" ><div><span>' + data + '</span></div>' + baifenzhi + '</div><div><div class="zuoxia1"></div><div class="zuoxia2"></div></div><div class="youxia"><div class="youxia1"></div><div class="youxia2"></div></div></div></div>';
        },
        padding: 10
      },

      legend: {
        top: this.proportion(130),
        right: this.proportion(10),
        orient: 'vertical',
        itemWidth: this.proportion(3),
        itemHeight: this.proportion(3),
        inactiveColor: 'RGBA(91, 157, 255, 0.3)',
        textStyle: {
          color: '#5B9DFF',
          fontSize: this.proportion(12),
        },
        data: this.school,
        formatter: function (name) {
          return name+'('+that.schoolshu[name]+')'
      }
      },

      series: [
        {
          type: 'pie',
          radius: [this.proportion(105), this.proportion(140)],
          center: [this.proportion(200), this.proportion(250)],
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
          data: this.fdata
        }
      ]
    }
  }

}
