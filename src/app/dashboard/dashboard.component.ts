import { Component } from '@angular/core';
import {ResponsiveService} from "../responsive.service";

export interface Record {
  region: string,
  kilotonnes: number,
  change: number,
  perCapita: number,
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  private readonly _chartOneOptions;
  private readonly _chartTwoOptions

  private readonly records: Record[] = [
    {region: 'Northland', kilotonnes: 4908, change: -707, perCapita: 25.9},
    {region: 'Auckland', kilotonnes: 11201, change: -513, perCapita: 6.7},
    {region: 'Waikato', kilotonnes: 15603, change: 994, perCapita: 32.2},
    {region: 'Bay of Plenty', kilotonnes: 3455, change: 431, perCapita: 10.5},
    {region: 'Gisborne', kilotonnes: 1321, change: -190, perCapita: 26.4},
    {region: 'Hawke\'s Bay', kilotonnes: 3268, change: -177, perCapita: 18.7},
    {region: 'Taranaki', kilotonnes: 6082, change: -207, perCapita: 49.5},
    {region: 'Manawatū-Whanganui', kilotonnes: 6075, change: -37, perCapita: 24.3},
    {region: 'Wellington', kilotonnes: 3499, change: -86, perCapita: 6.6},
    {region: 'Tasman/Nelson', kilotonnes: 1211, change: -26, perCapita: 11.1},
    {region: 'Tasman', kilotonnes: 854, change: 29, perCapita: 15.5},
    {region: 'Nelson', kilotonnes: 356, change: -55, perCapita: 6.6},
    {region: 'Marlborough', kilotonnes: 756, change: -16, perCapita: 15.3},
    {region: 'West Coast', kilotonnes: 1393, change: 84, perCapita: 43.1},
    {region: 'Canterbury', kilotonnes: 11641, change: 1112, perCapita: 18.4},
    {region: 'Otago', kilotonnes: 5241, change: 448, perCapita: 21.9},
    {region: 'Southland', kilotonnes: 6079, change: 354, perCapita: 59.9},
  ]

  constructor(public responsiveService: ResponsiveService) {
    this._chartOneOptions = {
      legend: {
        data:['kilotonnes', 'Change in kilotonnes (2007–19)']
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.records.map(record => record.region)
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'kilotonnes',
          type: 'bar',
          data: this.records.map(record => record.kilotonnes),
          barWidth: '10%'
        },
        {
          name: 'Change in kilotonnes (2007–19)',
          type: 'bar',
          data: this.records.map(record => record.change),
          barWidth: '10%'
        },
        {
          name: 'CO2 equivalents (tonnes) per capita',
          type: 'bar',
          data: this.records.map(record => record.perCapita),
          barWidth: '10%'
        }
      ]
    };

    this._chartTwoOptions = {
      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          name: 'CO2 equivalents (tonnes) per capita',
          type: 'pie',
          data: this.records.map(record => {
            return {
              name: record.region,
              value: record.perCapita
            }
          }),
          barWidth: '10%'
        }
      ]
    };
  }

  get chartOneOptions(): any {
    return this._chartOneOptions;
  }

  get chartTwoOptions(): any {
    return this._chartTwoOptions;
  }
}
