import { Component } from '@angular/core';
import {ResponsiveService} from "../responsive.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(public responsiveService: ResponsiveService) {}
}
