/**
 * Created by zhaowei on 2017/10/16.
 */
import { Injectable } from '@angular/core';
import { HttpServer } from '../services/HttpServer';
@Injectable({
    providedIn: 'root'
})
export class BigScreenService {

    url = '/v1/bigscreen/:params1/:params2/:params3/:params4/:params5';
    urls = {
        add: {
            method: 'post',
            params: {
                params1: 'add'
            }
        },
        basic: {
            method: 'get',
            params: {
                params1: 'basic'
            }
        },
        dailyLoanAmountQuery: {
            method: 'get',
            params: {
                params1: 'dailyLoanAmountQuery'
            }
        },
        dailyloanbalanceQuery: {
            method: 'get',
            params: {
                params1: 'dailyloanbalanceQuery'
            }
        },
        fetchaPage: {
            method: 'get',
            params: {
                params1: 'fetchaPage'
            }
        },
        loanbalanceQuery: {
            method: 'get',
            params: {
                params1: 'loanbalanceQuery'
            }
        },
        tolannumberofloancustomersQuery: {
            method: 'get',
            params: {
                params1: 'tolannumberofloancustomersQuery'
            }
        },
        totalloanamountQuery: {
            method: 'get',
            params: {
                params1: 'totalloanamountQuery'
            }
        },

    };

    constructor(httpServer: HttpServer) {
        httpServer.S(this);
    }

}
