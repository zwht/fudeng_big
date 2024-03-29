import { Component, OnInit } from '@angular/core';
import { BigScreenService } from '../../../../share/restServices/BigScreen';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.less']
})
export class TitleComponent implements OnInit {
  titleCpt = {
    width: 1920,
    height: 90,
    left: 0,
    top: 0,
  }
  item1 = {
    width: 240,
    height: 70,
    left: 84,
    top: 41,
  }
  item2 = {
    width: 240,
    height: 70,
    left: 315,
    top: 41,
  }
  item3 = {
    width: 240,
    height: 70,
    left: 510,
    top: 41,
  }
  item4 = {
    width: 240,
    height: 70,
    left: 1264,
    top: 41,
  }

  item5 = {
    width: 240,
    height: 70,
    left: 1469,
    top: 41,
  };

  titleInfo = {
    newLoanAmount: 0,
    loanAmountSum: 0,
    loanBalance: '',
    newLoans: '',
    loansCount: ''
  };
  city;

  constructor(private bigScreenService: BigScreenService,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.city = params['city'] || 202;
      this.initTitle();
    });

  }

  initTitle() {
    this.bigScreenService['basic']({
      params: {
        address: this.city
      }
    }).then(rep => {
      this.titleInfo = rep.data;
    }).catch(error => { });
  }
}


