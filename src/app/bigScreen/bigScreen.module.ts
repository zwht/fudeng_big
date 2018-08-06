import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { IndexComponent } from './components/index/index.component';
import { ScaleService } from './service/scale.service';
import { ScaleBoxDirective } from './directives/scale-box.directive';
import { TitleComponent } from './components/indexCpt/title/title.component';
import { Chart1Component } from './components/indexCpt/chart1/chart1.component';
import { Chart2Component } from './components/indexCpt/chart2/chart2.component';
import { Chart3Component } from './components/indexCpt/chart3/chart3.component';
import { Chart4Component } from './components/indexCpt/chart4/chart4.component';
import { Chart5Component } from './components/indexCpt/chart5/chart5.component';
import { CentreComponent } from './components/indexCpt/centre/centre.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChongQingComponent } from './components/province/chong-qing/chong-qing.component';
import { HuBeiComponent } from './components/province/hu-bei/hu-bei.component';
import { ProvinceComponent } from './components/province/province.component';
import { SiChuanComponent } from './components/province/si-chuan/si-chuan.component';
import { PrChart1Component } from './components/province/pr-chart1/pr-chart1.component';
import { PrChart2Component } from './components/province/pr-chart2/pr-chart2.component';
import { PrChart3Component } from './components/province/pr-chart3/pr-chart3.component';
import { PrChart4Component } from './components/province/pr-chart4/pr-chart4.component';
import { PrTitleComponent } from './components/province/pr-title/pr-title.component';
export const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        data: {
            name: '大屏'
        }
    },
    {
        path: 'province',
        component: ProvinceComponent,
        children: [
            {
                path: 'siChuan',
                component: SiChuanComponent,
                data: {
                    name: '四川',
                    state:'siChuan'
                }
            },
            {
                path: 'chongQing',
                component: SiChuanComponent,
                data: {
                    name: '重庆',
                    state:'chongQing'
                }
            },
            {
                path: 'huBei',
                component: SiChuanComponent,
                data: {
                    name: '湖北',
                    state:'huBei'
                }
            }
        ]
    }
];


@NgModule({
    imports: [
        ShareModule,
        NgxEchartsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [IndexComponent, ScaleBoxDirective,
        TitleComponent, Chart1Component, Chart2Component,
        Chart3Component, Chart4Component,
        Chart5Component, CentreComponent,
        ChongQingComponent,PrTitleComponent,
        HuBeiComponent, ProvinceComponent,
        PrChart1Component, PrChart2Component,
        PrChart3Component,SiChuanComponent,
        PrChart4Component
        ],
    providers: [
        ScaleService
    ],
})
export class BigScreenModule { }
