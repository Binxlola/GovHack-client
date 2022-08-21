import { Component } from '@angular/core';
import {ResponsiveService} from "../responsive.service";

export interface Record {
  region: string,
  kilotonnes: number
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  private readonly chartOptions;

  private readonly records: Record[] = [
    {region: 'Northland', kilotonnes: 4908},
    {region: 'Auckland', kilotonnes: 4908},
    {region: 'Waikato', kilotonnes: 4908},
    {region: 'Bay of Plenty', kilotonnes: 4908},
    {region: 'Gisborne', kilotonnes: 4908},
    {region: 'Hawke\'s Bay', kilotonnes: 4908},
    {region: 'Taranaki', kilotonnes: 4908},
    {region: 'Manawatū-Whanganui', kilotonnes: 4908},
    {region: 'Wellington', kilotonnes: 4908},
    {region: 'Tasman/Nelson', kilotonnes: 4908},
    {region: 'Tasman', kilotonnes: 4908},
    {region: 'Nelson', kilotonnes: 4908},
    {region: 'Marlborough', kilotonnes: 4908},
    {region: 'West Coast', kilotonnes: 4908},
    {region: 'Canterbury', kilotonnes: 4908},
    {region: 'Otago', kilotonnes: 4908},
    {region: 'Southland', kilotonnes: 4908},
  ]

  constructor(public responsiveService: ResponsiveService) {
    this.chartOptions = {
      title: {
        text: 'Carbon dioxide equivalent emissions and intensity By Region'
      },
      tooltip: {
        // trigger: 'axis'
      },
      legend: {
        data:['kilotonnes']
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
          type: 'line',
          data: this.records.map(record => record.kilotonnes)
        }
      ]
    };
  }
}
