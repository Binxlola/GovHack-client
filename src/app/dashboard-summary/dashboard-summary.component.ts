import { Component, OnInit } from '@angular/core';
import {ResponsiveService} from "../responsive.service";

@Component({
  selector: 'app-dashboard-summary',
  templateUrl: './dashboard-summary.component.html',
  styleUrls: ['./dashboard-summary.component.scss']
})
export class DashboardSummaryComponent implements OnInit {

  constructor(public responsiveService: ResponsiveService) { }

  ngOnInit(): void {
  }

}
